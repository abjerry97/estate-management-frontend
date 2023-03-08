import axios from "axios";
import React, { useEffect, useState } from "react";
import FavouriteIcon from "../../../../assets/svg/FavouriteIcon";
import SearchBox from "../../../../components/Badge/SearchBox";
import { addToCartHandler } from "../../../../helper/helper";
import FoodModal from "./FoodModal";

function Food(props) {
  const { cartItems, setcartItems, cartItemQty, setcartItemQty } = props; 
  const [foods, setfoods] = useState([]);
  const [currentSelectedFood, setcurrentSelectedFood] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    axios
      .get("/foods")
      .then(function (response) {
        console.log(response);
        setfoods(response.data.foods);
        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 
  return (
    <div className="mt-3">
      <div className="mb-3">
        <p className="mt-2 text-center">
          Order your next meal within the estate
        </p>
        <SearchBox />
      </div>
      <div className="commerce-card-wrapper row row-cols-2 row-cols-md-4 g-3 ">
        {foods.map((currentFood, index) => {
          return (
            <div className="" key={index}>
              <div
                className="commerce-card p-2 border shadow-sm rounded"
                onClick={() => {
                  setcurrentSelectedFood(currentFood);
                  setModalShow(true);
                }}
              >
                <div className="img-thumbnails">
                  <img src={currentFood?.image[0]?.url} alt="" width="100%" />
                </div>
                <div className="text-center mt-2">
                  <h4>{currentFood.name}</h4>
                  <p>{currentFood?.description?.value}</p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div
                      className="commerce-card-btn clearfix p-2 text-white cursor-pointer  "
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCartHandler(cartItems,setcartItems,currentFood,cartItemQty,setcartItemQty)
                      
                      }}
                    >
                      add to cart
                    </div>
                    <FavouriteIcon />
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
      <FoodModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentSelectedFood={currentSelectedFood}
      />
    </div>
  );
}

export default Food;
