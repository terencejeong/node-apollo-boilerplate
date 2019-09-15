export default async function signUp(userModel, username) {
  try {
    const name = username;
    const newUser = await userModel.create({
      name
    });
    await newUser.save();
    return newUser;
  } catch (e) {
    return null;
  }
}
