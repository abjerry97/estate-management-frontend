import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AirtimeAndDataIcon from "../../../../assets/svg/AirtimeAndDataIcon";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import FoodHomeIcon from "../../../../assets/svg/FoodHomeIcon";
import TransferIcon from "../../../../assets/svg/TransferIcon";
import UtilitiesIcon from "../../../../assets/svg/UtilitiesIcon";
import ViewMoreIcon from "../../../../assets/svg/ViewMoreIcon";
import Company from "../../Servicemen/Company";

function WalletHome(props) {
  const [activeTransactionsTab, setactiveTransactionsTab] = useState(0);
  const TransactionsNavlinks = [
    {
      id: 0,
      name: "Transfer",
      icon: <TransferIcon />,
      to: "company",
      component: <Company {...props} />,
    },
    {
      id: 1,
      name: " Airtime & Data",
      icon: <AirtimeAndDataIcon />,
      to: "services",
      component: <Company {...props} />,
    },
    {
      id: 2,
      name: " Utilities",
      icon: <UtilitiesIcon />,
      to: "",
      component: <Company {...props} />,
    },
    {
      id: 3,
      name: " Commerce",
      icon: <FoodHomeIcon />,
      to: "",
      component: <Company {...props} />,
    },
    {
      id: 4,
      name: " View more",
      icon: <ViewMoreIcon />,
      to: "",
      component: <Company {...props} />,
    },
  ];

  useEffect(() => {
    axios
      .get("/election/candidate")
      .then(function (response) {
        console.log(response);

        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="mt-3 mb-4 " onClick={() => navigate(-1)}>
        <div className="">
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <BackArrowIcon /> <span>Wallet</span>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center ">
        <div className="">
          <span>Balance available</span>
          <h2>₦30,000</h2>
        </div>
        <div className="">
          <Link to="fundwallet" className=" page-btn p-2 px-3 text-white">Fund Wallet</Link>
        </div>
      </div>
      <hr />
      <div className="d-flex gap-md-5 mt-4 text-center">
        <Link to="transfer" className=" d-flex flex-column align-items-center">
          <TransferIcon />
          <span>Transfer</span>
        </Link>
        <Link to="airtime-and-data" className="d-flex flex-column align-items-center">
          <AirtimeAndDataIcon />
          <span> Airtime & Data</span>
        </Link>
        <Link to="transfer" className="d-flex flex-column align-items-center">
          <UtilitiesIcon />
          <span> Utilities</span>
        </Link>
        <Link to="transfer" className="d-flex flex-column align-items-center">
          <ViewMoreIcon />
          <span>View more</span>
        </Link>
      </div>

      <div className="mt-4">
        <h3>TRANSACTIONS HISTORY</h3>
      </div>
      <div className="row mt-3 clear-fix cursor-pointer pb-4">
        {TransactionsNavlinks.map((currentTransactionsNav, index) => {
          return (
            <div
              className={`${
                activeTransactionsTab === currentTransactionsNav.id
                  ? "col-4 col-md-5 commerce-nav-active"
                  : "col"
              } clear-fix d-flex justify-content-center align-items-center gap-2 gap-md-5 p-2`}
              key={index}
              onClick={() => {
                setactiveTransactionsTab(currentTransactionsNav.id);
              }}
            >
              {currentTransactionsNav.icon}
              <span
                className={`${
                  activeTransactionsTab === currentTransactionsNav.id
                    ? ""
                    : "d-none"
                }`}
              >
                {currentTransactionsNav.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="d-flex justify-content-between mb-2">
            <div className="">
              <div className="">Transfer From Avis Charles</div>
              <span>February 15, 07:37AM</span>
            </div>
            <div className="">
              <strong>₦2,350</strong>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <div className="">
              <div className="">Transfer From Avis Charles</div>
              <span>February 15, 07:37AM</span>
            </div>
            <div className="">
              <strong>₦2,350</strong>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <div className="">
              <div className="">Transfer From Avis Charles</div>
              <span>February 15, 07:37AM</span>
            </div>
            <div className="">
              <strong>₦2,350</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletHome;
