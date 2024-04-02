import { useEffect } from "react";
import { useLazyGetListProductQuery } from "../store/portal-store";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [trigger, result] = useLazyGetListProductQuery();

  const { data, error, isError, isLoading, isFetching } = result;

  useEffect(() => {
    trigger({ limit: 14 }, true);
  }, []);

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
      ) : data ? (
        data.map((element: any, index: number) => {
          return (
            <Link to={`/product/${element.id}`} key={index}>
              <p>Product {element.id}</p>
            </Link>
          );
        })
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductList;
