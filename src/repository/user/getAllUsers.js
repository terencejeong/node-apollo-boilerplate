export default async function getAllUsers(model) {
  const users = await model.find({});
  if (users) {
    return users;
  } else {
    return null;
  }
}
