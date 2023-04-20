import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    Profile.findById(req.user.profile)
    .then(userProfile => {
      console.log(userProfile)
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