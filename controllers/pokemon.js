function index(req, res) {
  res.render('pokemon/index')
}

function show(req, res) {
  res.render('pokemon/show', {
    pokeName: req.params.pokemonName
  })
}

function search(req, res) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${req.query.pokeName.toLowerCase()}`)
  .then(response => {
    return response.json()
  })
  .then(pokeData => {
    console.log(pokeData)
    res.render('pokemon/searchResults', {
      pokeData
    })
  })
}

export {
  index,
  show,
  search
}