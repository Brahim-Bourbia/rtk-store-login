import { useEffect } from "react";
import { useLazyGetListProductQuery } from "../store/portal-store";

const ProductList = () => {
  const [trigger, result, lastPromiseInfo] = useLazyGetListProductQuery();

  useEffect(() => {
    trigger(5);
  }, []);

  console.log(result, lastPromiseInfo);
  if (result.status === "uninitialized") {
    return <button onClick={() => trigger(5)}>Fetch Post</button>;
  } else {
    const { data, error, isError, isLoading, isFetching } = result;

    if (isError)
      return (
        <div>
          {"status" in error ? error.status : ""}
          <br />
          {"data" in error ? "dart error" : ""}
        </div>
      );
    if (isLoading) return <div>loading...</div>;

    return (
      <div>
        {isFetching ? (
          <h3>Loading</h3>
        ) : (
          data.map((element: any) => {
            return <p>{element.title}</p>;
          })
        )}
      </div>
    );
  }
};

export default ProductList;
