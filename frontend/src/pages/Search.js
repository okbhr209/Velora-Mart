import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../components/context/search";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/HomePage.css";
import { useCart } from "../components/context/cart";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  const addToCart = async (productId, quantity) => {
    // Check if the product is already present in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.productId === productId
    );

    let updatedCart;
    // If the product is already present, update its quantity
    if (existingProductIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // If the product is not present, add it to the cart
      updatedCart = [...cart, { productId, quantity }];
      setCart(updatedCart);
    }
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item Added to cart");
  };

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">
                    {" "}
                    {p?.price?.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}{" "}
                  </p>
                  <button
                    class="btn btn-primary ms-1"
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      addToCart(p, 1);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
