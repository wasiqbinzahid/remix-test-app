import { ActionFunctionArgs, redirect } from "@remix-run/node";
import CreateEditForm from "~/components/CreateEditForm";
import { CreateItem } from "~/methods";

export const action = async (param: ActionFunctionArgs) => {
  console.log("I AM BEING CALLED");
  const formData = await param.request.formData();
  const name = String(formData.get("name"));
  const baseAge = String(formData.get("age"));
  const age = parseInt(baseAge);
  await CreateItem({
    name,
    age,
  });
  return redirect("/");
};
const CreateItemForm = () => {
  return (
    <div>
      <CreateEditForm submitPath="/create" />
    </div>
  );
};
export default CreateItemForm;
