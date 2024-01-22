import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { GetItems } from "~/methods";

export const loader = async (params: LoaderFunctionArgs) => {
  const url = new URL(params.request.url);
  const page = url.searchParams.get("page");
  const pageToUse = page ? parseInt(page) : 1;
  return json(await GetItems(pageToUse));
};
const ListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serverPage = searchParams.get("page");
  const pageToUse = serverPage ? parseInt(serverPage) : 1;
  const [currentPage, setCurrentPage] = useState(pageToUse);
  const { data, totalPages } = useLoaderData<typeof loader>();
  function navigateToPage(page: number) {
    setSearchParams({ page: page.toString() });
    setCurrentPage(page);
  }
  return (
    <div>
      <h1>LIST IS </h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/edit/${item.id}`}>{item.name}</Link>
          </div>
        );
      })}
      <div>Current Page is {currentPage} </div>

      {currentPage > 1 && (
        <button onClick={() => navigateToPage(currentPage - 1)}>Prev</button>
      )}
      {currentPage < totalPages && (
        <button onClick={() => navigateToPage(currentPage + 1)}>Next</button>
      )}
      <h2>CREATE NEW </h2>
      <Link to="/create">click here</Link>
    </div>
  );
};
export default ListPage;
