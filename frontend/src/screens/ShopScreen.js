import { useEffect } from "react";
import Product from "../componets/Product";
import LoadingBox from "../componets/LoadingBox";
import MessageBox from "../componets/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
export default function ShopScreen() {
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}>
              {" "}
            </Product>
          ))}
        </div>
      )}
    </div>
  );
}
