import { Users } from "../repository";

export default {
  Query: {
    users: async (parent, args, models) => {
      return models.User.find().exec();
    }
  },
  Mutation: {
    signUp: async (parent, { name }, models) => {
      return Users.signUp(models.User, name);
    }
  }
};
