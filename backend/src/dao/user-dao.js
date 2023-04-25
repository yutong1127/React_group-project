import bcrypt from "bcrypt";
import { User } from "../patientlist-db/schema";

async function createUser(data) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({
    ...data,
    password: hashedPassword,
  });
  return await user.save();
}

async function getUserByEmail(email) {
  return await User.findOne({ email: email });
}

async function getUserById(userId) {
  return await User.findById(userId);
}

async function updateUser(userId, data) {
  return await User.findByIdAndUpdate(userId, data, { new: true });
}

async function deleteUser(userId) {
  return await User.findByIdAndDelete(userId);
}

export { 
  createUser, 
  getUserByEmail, 
  getUserById, 
  updateUser, 
  deleteUser 
};