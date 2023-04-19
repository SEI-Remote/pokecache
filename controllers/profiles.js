import { Profile } from "../models/profile.js"

function index(req, res) {
  res.render('profiles/index')
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    res.render('profiles/show', {
      profile
    })
  })
}

export {
  index,
  show
}