import { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { authenticator } from "~/auth/authenticator";

export const action: ActionFunction = async (param) => {
  // try {

  return await authenticator.authenticate("user-pass", param.request, {
    successRedirect: "/list",
    failureRedirect: "/auth/login",
  });
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as "email" | "password";
    const val = e.target.value;
    setFormData((old) => ({ ...old, [name]: val }));
  };
  return (
    <div>
      <h1>Login</h1>
      <Form method="post" action="/auth/login">
        <div>Email</div>
        <div>
          <input
            value={formData.email}
            onChange={handleFormChange}
            name="email"
          />
        </div>
        <div>Pass</div>
        <div>
          <input
            value={formData.password}
            onChange={handleFormChange}
            name="password"
          />
        </div>
        <button>Submit</button>
      </Form>
    </div>
  );
};
export default LoginPage;
