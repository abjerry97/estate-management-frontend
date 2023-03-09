import React, { useRef, useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon";
import CartActiveIcon from "../../../assets/svg/CartActiveIcon";
import FoodHomeIcon from "../../../assets/svg/FoodHomeIcon";
import GoodHomeIcon from "../../../assets/svg/GoodHomeIcon";
import SearchLensIcon from "../../../assets/svg/SearchLensIcon";
import SearchBox from "../../../components/Badge/SearchBox";
import Cart from "./Cart";
import Food from "./Food";
import Goods from "./Goods";

function Commerce(props) {
  const location = useLocation();
  console.log(location);
  const ref = useRef(null);
  const cartCountref = ref.current;
  const navigate = useNavigate();
  const [activeCommerceTab, setactiveCommerceTab] = useState(0);
  const commerceNavlinks = [
    {
      id: 0,
      name: "Food",
      icon: <FoodHomeIcon />,
      to: "food",
      component: <Food {...props} />,
    },
    {
      id: 1,
      name: "Good",
      icon: <GoodHomeIcon />,
      to: "goods",
      component: <Goods {...props} />,
    },
    {
      id: 2,
      name: "Cart",
      icon: <CartActiveIcon />,
      to: "cart",
      component: <Cart {...props} />,
    },
  ];
  return (
    <div className=" container">
      <div className=" container-fluid sticky-top bg-white pt-2 mb-3">
        <div className="d-flex justify-content-between  ">
          <div
            className="d-flex align-items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <BackArrowIcon /> <span>Commerce</span>
          </div>
          <div className="">
            Cart{" "}
            <div className="badge pills" ref={cartCountref}>
              {" "}
              {props.cartItems.length}
            </div>
          </div>
        </div>

        <div className="row mt-3 clear-fix cursor-pointer pb-4">
          {commerceNavlinks.map((currentCommerceNav, index) => {
            return (
              <Link
                to={currentCommerceNav.to}
                className={`${
                  location.pathname == `/commerce/${currentCommerceNav.to}`
                    ? "col-4 col-md-5 commerce-nav-active"
                    : "col"
                } clear-fix d-flex justify-content-center align-items-center gap-2 gap-md-5 p-2`}
                key={index}
                onClick={() => {
                  setactiveCommerceTab(currentCommerceNav.id);
                }}
              >
                {currentCommerceNav.icon}
                <span
                  className={`${
                    activeCommerceTab === currentCommerceNav.id ? "" : "d-none"
                  }`}
                >
                  {currentCommerceNav.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Food {...props} />} />
        <Route path="food" element={<Food {...props} />} />
        <Route path="goods" element={<Goods {...props} />} />
        <Route path="cart" element={<Cart {...props} />} />
      </Routes>

      {/* {commerceNavlinks[activeCommerceTab].component} */}
    </div>
  );
}

export default Commerce;
