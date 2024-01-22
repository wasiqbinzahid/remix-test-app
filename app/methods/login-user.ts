import { UserModel } from "~/models/user";

export interface LoginUserPayload {
  email: string;
  password: string;
}
export const LoginUser = async ({ email, password }: LoginUserPayload) => {
  const user = await UserModel.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) {
    throw new Error("USER NOT FOUND");
  }
  return user.toJSON();
};
