import bcrypt from "bcrypt";
import { User } from "../patientlist-db/schema.js";

async function createUser(data) {
  const password = await bcrypt.hash(data.password, 10);

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
  return await User.findById(userId).populate("team");

}

async function updateUser(userId, data) {
  return await User.findByIdAndUpdate(userId, data, { new: true });
}


async function updateUserProfile(userProfile) {
  const dbUserProfile = await User.findByIdAndUpdate({_id: userProfile._id}, userProfile);
  // if (userProfile.password) {
  //   const password = await bcrypt.hash(userProfile.password, 10);
  //   userProfile.password = password;
  // }

  // const dbUserProfile = await User.findByIdAndUpdate({ _id: userProfile._id }, userProfile,)
  return dbUserProfile !== undefined;
}

async function updateUserPassword(userId, newPassword) {
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const result = await User.updateOne(
    { _id: userId },
    { $set: { password: hashedPassword } }
  );
  return result.nModified > 0;
}

async function deleteUser(userId) {
  return await User.findByIdAndDelete(userId);
}

async function retrieveAllSupervisors() {
  return await User.find({ "isSupervisor": true });
}

export {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  updateUserProfile,
  deleteUser,
  retrieveAllSupervisors,
  updateUserPassword,
};
