function index(req, res) {
  res.render('profiles/index')
}

function show(req, res) {
  res.render('profiles/show', {
    profileId: req.params.profileId
  })
}

export {
  index,
  show
}