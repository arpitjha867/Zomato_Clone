import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import {
  decrease,
  increase,
  removeItem,
} from "../utilities/features/cartSlice";
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, amount, total } = useSelector((store) => store.cart);
  const goToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="px-[2px] w-75--lg flex-col mx-auto pt-[10px]">
        <div className="flex justify-between align-middle">
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
          </div>
          <Searchbar />
        </div>
        <div className="w-full bg-slate-200 h-auto p-4">
          {cartItems.length !== 0 ? (
            cartItems.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="w-full rounded-sm bg-slate-300 flex justify-between p-3 mb-3"
                  >
                    <div className="flex">
                      <img
                        src="https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg"
                        alt="cart items"
                        className="h-[80px] w-[80px] rounded-md"
                      />
                      <div className="flex-col justify-between text-2xl ml-4 font-weight">
                        <p>{item.name}</p>
                        <p>Rating : {item.rating}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => dispatch(increase(item.id))}
                      >
                        +
                      </button>
                      <span className="mx-3 text-lg font-bold">
                        {item.amount}
                      </span>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                          if (item.amount === 1) {
                            //   console.log("here");
                            dispatch(removeItem(item.id));
                            return;
                          }
                          dispatch(decrease(item.id));
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <p className=" text-5xl text-gray-600">Cart is empty !</p>
          )}
          <br />
          {cartItems.length !== 0 ? (
            <div className="flex justify-between items-center">
              <div>
                <button className="bg-green-500 rounded-md p-4 text-white font-bold">
                  Place order
                </button>
              </div>
              <div className="text-xl">
                <p>Total avg spend : {total}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
