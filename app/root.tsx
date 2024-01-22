import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import { authenticator } from "./auth/authenticator";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];
export const loader = async ({ request }: LoaderFunctionArgs) => {
  if (!request.url.includes("login")) {
    await authenticator.isAuthenticated(request, {
      failureRedirect: "/auth/login",
    });
    return json({ isAuthorized: true });
  }
  return json({ isAuthorized: false });
};

export default function App() {
  const { isAuthorized } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {isAuthorized && <Link to="/logout">LOGOUT</Link>}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
