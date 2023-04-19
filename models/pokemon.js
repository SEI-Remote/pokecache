import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  name: String,
  collectedBy: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  height: Number,
  weight: Number,
  image: String,
  number: Number,
  types: [],
  abilities: [],
  stats: [],
}, {
  timestamps: true
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export {
  Pokemon
}
