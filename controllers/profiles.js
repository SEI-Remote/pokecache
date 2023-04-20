import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      res.render('profiles/index', {
        profiles,
        userProfile
      })
    })
  })
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    res.render('profiles/show', {
      profile
    })
  })
}

function requestFriend(req, res) {
  // find the logged in user's profile _id
  Profile.findById(req.user.profile)
  .then(userProfile => {
    // push the friend _id into the pendingOutgoing
    userProfile.pendingOutgoingInvites.push(req.params.profileId)
    userProfile.save()
    .then(() => {
      // find the friend profile
      Profile.findById(req.params.profileId)
      .then(friendProfile => {
        // push the logged in user's profile _id into pendingIncoming
        friendProfile.pendingIncomingInvites.push(req.user.profile)
        friendProfile.save()
        .then(() => {
          res.redirect('/profiles')
        })
      })
    })
  })
}

function acceptFriend(req, res) {
  // find the logged in user's profile
  Profile.findById(req.user.profile)
  .then(userProfile => {
    console.log(userProfile)
    // remove the friend _id from pending incoming
    userProfile.pendingIncomingInvites.remove(req.params.profileId)
    // add friend _id to friends list
    userProfile.friends.push(req.params.profileId)
    userProfile.save()
    .then(() => {
      // find the friend profile
      Profile.findById(req.params.profileId)
      .then(friendProfile => {
        // remove the logged in user's profile _id from pending outgoing
        friendProfile.pendingOutgoingInvites.remove({_id: req.user.profile._id})
        // add to friends
        friendProfile.friends.push(req.user.profile)
        friendProfile.save()
        .then(() => {
          res.redirect('/profiles')
        })
        .catch(err => {
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => {
      console.log(err)
    })
  })
}

function removeFriend(req, res) {
  
}

export {
  index,
  show,
  requestFriend,
  acceptFriend,
  removeFriend
}