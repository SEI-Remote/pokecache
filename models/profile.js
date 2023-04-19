import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  pokemon: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}],
  team: [{type: Schema.Types.ObjectId, ref: 'Pokemon'}],
  pendingIncomingInvites: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  pendingOutgoingInvites: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  friends: [{type: Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
