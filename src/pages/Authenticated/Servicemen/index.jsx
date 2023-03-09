import React, { useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon"; 
import CompanyHomeIcon from "../../../assets/svg/CompanyHomeIcon"; 
import MyBusinessIcon from "../../../assets/svg/MyBusinessIcon";
import ServicemenIcon from "../../../assets/svg/ServicemenIcon"; 
import Company from "./Company"; 
import Services from "./Services";

function Servicemen(props) {
  const ref = useRef(null)
  const cartCountref  =ref.current
  const navigate = useNavigate();
  const [activeCommerceTab, setactiveCommerceTab] = useState(0);
  const commerceNavlinks = [
    {
      id: 0,
      name: "Company",
      icon: <CompanyHomeIcon />,
      to: "company",
      component: <Company {...props} />,
    },
    {
      id: 1,
      name: "Servicemen",
      icon: <ServicemenIcon />,
      to: "services",
      component: <Services {...props} />,
    },
    {
      id: 2,
      name: "My Business",
      icon: <MyBusinessIcon />,
      to: "",
      component: <Services {...props} />,
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
            <BackArrowIcon /> <span>Services</span>
          </div>
          <div className="">
            Cart <div className="badge pills" ref={cartCountref}> {props.cartItems.length}</div>
          </div>
        </div>

        <div className="row mt-3 clear-fix cursor-pointer pb-4">
          {commerceNavlinks.map((currentCommerceNav, index) => {
            return (
              <div
                className={`${
                  activeCommerceTab === currentCommerceNav.id
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
              </div>
            );
          })}
        </div>

      </div>
   

      {commerceNavlinks[activeCommerceTab].component}
    </div>
  );
}

export default Servicemen;
