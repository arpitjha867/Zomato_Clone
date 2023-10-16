import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import cartLogo from "../assests/cart.png";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../utilities/features/cartSlice";

function FoodInfoPage() {
  const { cartItems, amount } = useSelector((store) => store.cart);
  const location = useLocation();
  const dataFromFoodCard = location.state?.dataProp;
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const dispatch = useDispatch();
  const addToCartFunc = () => {
    dispatch(addItem(dataFromFoodCard));
  };
  const itemAlreadyExist = cartItems.find((item) => {
    return item.id === dataFromFoodCard.id;
  });
  return (
    <>
      <div
        className="px-[2px] w-75--lg"
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          paddingTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <p
              onClick={goToHome}
              style={{
                cursor: "pointer",
                fontStyle: "italic",
                fontSize: "40px",
                fontWeight: "bolder",
                margin: "0px 20px 0px 0px",
              }}
            >
              Tomato
            </p>
            <Searchbar />
          </div>
          <Link
            to="/cart"
            className="flex justify-between align-middle cursor-pointer p-2 relative"
          >
            {amount != 0 ? (
              <span className=" absolute rounded-full bg-red-600 text-white w-5 h-5 right-0 top-0 text-center">
                {amount}
              </span>
            ) : (
              ""
            )}

            <img className="w-8 h-8 " src={cartLogo} alt="cart" />
          </Link>
        </div>

        <div className="grid grid-cols-5 grid-rows-2 w-[100%] h-[400px] gap-2 ">
          <div className="col-span-3 row-span-2  ">
            <img
              src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg"
              alt="Food 1"
              className="h-[100%] w-full overflow-hidden transition-duration-300   object-cover  cursor-pointer"
            />
          </div>
          <div className="">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
              alt="Food 2"
              className="w-full h-[100%] object-cover    cursor-pointer"
            />
          </div>
          <div className="row-span-2 ">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717_1280.jpg"
              alt="Food 3"
              className="w-full h-[100%] object-cover   cursor-pointer"
            />
          </div>
          <div className="  ">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
              alt="Food 2"
              className="w-full h-[100%] object-cover     cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-between mt-2">
          <div className="font-weight text-4xl">{dataFromFoodCard.name}</div>
          <div
            style={{
              background: "#267E3E",
              alignContent: "center",
              display: "flex",
              color: "white",
              alignItems: "center",
              padding: "2px 2px 2px 2px",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "2px",
              }}
            >
              {dataFromFoodCard.rating}
            </div>
            <div className="mr-[5px]">
              <i color="#FFFFFF">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFFFFF"
                  width="14px"
                  height="14px"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                >
                  <title>star-fill</title>
                  <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                </svg>
              </i>
            </div>{" "}
            Delivery Reviews
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col justify-between text-[#696969] text-lg">
            <p>{dataFromFoodCard.dishes}</p>
            <p>Avg spend : {dataFromFoodCard.avg_spend}</p>
            <p>Avg delivery time : {dataFromFoodCard.delivery_time} mins</p>
          </div>
          <div className="flex items-center">
            {itemAlreadyExist ? (
              <>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => dispatch(increase(dataFromFoodCard.id))}
                >
                  +
                </button>
                <span className="mx-3 text-lg font-bold">
                  {itemAlreadyExist.amount}
                </span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    if (itemAlreadyExist.amount === 1) {
                      //   console.log("here");
                      dispatch(removeItem(dataFromFoodCard.id));
                      return;
                    }
                    dispatch(decrease(dataFromFoodCard.id));
                  }}
                >
                  -
                </button>
              </>
            ) : (
              <button
                onClick={addToCartFunc}
                className=" bg-blue-600 p-2 text-white rounded-md h-10"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodInfoPage;
