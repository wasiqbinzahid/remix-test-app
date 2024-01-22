import { sessionStorageState } from ".";
import { Authenticator } from "remix-auth";
import { LoginUser, LoginUserPayload } from "~/methods/login-user";
import { FormStrategy } from "remix-auth-form";

export const authenticator = new Authenticator<LoginUserPayload>(
  sessionStorageState
);
authenticator.use(
  new FormStrategy(async ({ form }) => {
    const username = form.get("email");
    const password = form.get("password");
    console.log("I AM CALLED", username, password);
    if (!username || typeof username !== "string") {
      throw new Error("INVALID USERNAME");
    }
    if (!password || typeof password !== "string") {
      throw new Error("INVALID password");
    }
    const userStuff = await LoginUser({ email: username, password });
    console.log("USER STUFF IS ", userStuff);
    return userStuff;
  }),
  "user-pass"
);
