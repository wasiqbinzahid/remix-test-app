import { redirect } from "@remix-run/node";
import { LoaderFunctionArgs } from "react-router";
import { authenticator } from "~/auth/authenticator";
export const loader = async (param: LoaderFunctionArgs) => {
  return await authenticator.logout(param.request, {
    redirectTo: "/auth/login",
  });
};
export const Logout = () => {
  return redirect("/auth/login");
};
