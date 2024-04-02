import { useParams } from "react-router-dom";
import { useLazyGetProductQuery } from "../store/portal-store";
import { useEffect } from "react";

const Product = ({}) => {
  const [trigger, result] = useLazyGetProductQuery();

  useEffect(() => {
    trigger({ postId: id }, true);
  }, []);

  const { data, isError, isFetching, isLoading, error } = result;

  let { id } = useParams();

  if (isError)
    return (
      <div>
        {"status" in error ? error.status : ""}
        <br />
        {"data" in error ? "not found " : ""}
      </div>
    );
  if (isLoading) return <div>loading...</div>;

  return isFetching ? (
    <p>Fetching data</p>
  ) : (
    <>
      {!data ? (
        "no infor about this product !!!"
      ) : (
        <>
          <h1>Product {id} Infos</h1>
          <p>
            <label>Title :</label>
            {data.title}
          </p>
          <p>
            <label>description :</label>
            {data.body}
          </p>
        </>
      )}
    </>
  );
};

export default Product;
