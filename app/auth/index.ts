import { createCookieSessionStorage } from "@remix-run/node";

export const sessionStorageState = createCookieSessionStorage({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: false, // true only for prod - this is a test project so no need
    secrets: ["SECRET!@#!@#"],
  },
});

export const { getSession, commitSession, destroySession } =
  sessionStorageState;
