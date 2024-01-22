import { Form, useSubmit } from "@remix-run/react";
import React from "react";
import { ItemType } from "~/models/types";

interface Props {
  data?: ItemType;
  submitPath: string;
}

const CreateEditForm: React.FC<Props> = ({ data, submitPath }) => {
  const submit = useSubmit();
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // e.persist()
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    submit(data, {
      method: "post",
      action: submitPath,
    });
  }

  return (
    <div>
      {/* action={submitPath} */}
      <form onSubmit={handleFormSubmit} method="post">
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            defaultValue={data?.name || ""}
            name="name"
            id="name"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="name">Age</label>
          </div>
          <input
            required
            type="number"
            name="age"
            id="age"
            defaultValue={data?.age || ""}
            placeholder="Enter age"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default CreateEditForm;
