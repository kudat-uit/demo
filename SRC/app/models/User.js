const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  level: { type: Number, default: 1 },
  gold: { type: Number, default: 0 },
  sliver: { type: Number, default: 0 },
  experiencePoints: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
