import bcrypt from "bcrypt";
import { User } from "../patientlist-db/schema.js";

async function createUser(data) {
  password = await bcrypt.hash(data.password, 10);

  const user = new User({
    ...data,
    password: password,
  });
  return await user.save();
}

async function getUserByEmail(email) {
  return await User.findOne({ email: email }).select(
    "+password +isPlainTextPassword"
  );
}

async function getUserById(userId) {
  return await User.findById(userId);
}

async function updateUser(userId, data) {
  return await User.findByIdAndUpdate(userId, data, { new: true });
}

async function updateUserProfile(userProfile) {
  const dbUserProfile = await User.findByIdAndUpdate({_id: userProfile._id}, userProfile,)
  return dbUserProfile !== undefined;

}


async function deleteUser(userId) {
  return await User.findByIdAndDelete(userId);
}

export { 
  createUser, 
  getUserByEmail, 
  getUserById, 
  updateUser, 
  updateUserProfile,
  deleteUser 
};
