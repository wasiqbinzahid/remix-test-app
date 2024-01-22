import { ActionFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, useSubmit } from "@remix-run/react";
import { LoaderFunctionArgs } from "react-router";
import CreateEditForm from "~/components/CreateEditForm";
import { EditItem } from "~/methods";
import { GetItemById } from "~/methods/get-item-by-id";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (!id) {
    throw new Error("ID NOT FOUND");
  }
  return json(await GetItemById(id));
};
export const action: ActionFunction = async (params) => {
  const formData = await params.request.formData();
  const name = String(formData.get("name"));
  const age = String(formData.get("age"));
  await EditItem({
    age: Number(age),
    name,
    id: Number(params.params.id),
  });
  return redirect("/list");
};

const EditForm = () => {
  const { data } = useLoaderData<typeof loader>();
  if (!data) {
    return (
      <div>
        <h1>ITEM NOT FOUND</h1>
        <button onClick={() => redirect("/list")}>GO TO HOME</button>
      </div>
    );
  }
  return (
    <div>
      <CreateEditForm submitPath={`/edit/${data.id}`} data={data} />
    </div>
  );
};
export default EditForm;
