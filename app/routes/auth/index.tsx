import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { authenticator } from "~/auth/authenticator";

export const loader = async (params: LoaderFunctionArgs) => {
  return await authenticator.isAuthenticated(params.request, {
    successRedirect: "/list",
  });
};
export const AuthIndex = () => {
  return (
    <div>
      AUTH LAYOUT HERE @@@@ <Outlet />
    </div>
  );
};
export default AuthIndex;
