import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import AccountNumberIcon from "../../../../assets/svg/AccountNumberIcon";
import AirtimeAndDataIcon from "../../../../assets/svg/AirtimeAndDataIcon";
import AmountIcon from "../../../../assets/svg/AmountIcon";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import BankIcon from "../../../../assets/svg/BankIcon";
import BeneficiaryIcon from "../../../../assets/svg/BeneficiaryIcon";
import CalenderIcon from "../../../../assets/svg/CalenderIcon";
import DownArrowIcon from "../../../../assets/svg/DownArrowIcon";
import ElectricityIcon from "../../../../assets/svg/ElectricityIcon";
import FoodHomeIcon from "../../../../assets/svg/FoodHomeIcon";
import PhoneIcon from "../../../../assets/svg/PhoneIcon";
import PhonenumberIcon from "../../../../assets/svg/PhonenumberIcon";
import RemarkIcon from "../../../../assets/svg/RemarkIcon";
import TransferIcon from "../../../../assets/svg/TransferIcon";
import UtilitiesIcon from "../../../../assets/svg/UtilitiesIcon";
import ViewMoreIcon from "../../../../assets/svg/ViewMoreIcon";
import Company from "../../Servicemen/Company";

function ViewMore(props) {
  const [activeTransactionsTab, setactiveTransactionsTab] = useState(3);
  const [billType, setbillType] = useState("");
  const [fromMonth, setfromMonth] = useState("");
  const [toMonth, settoMonth] = useState(""); 
  const [amount, setamount] = useState(0); 
  const TransactionsNavlinks = [
    {
      id: 0,
      name: "Transfer",
      icon: <TransferIcon />,
      to: "/wallet/transfer",
      component: <Company {...props} />,
    },
    {
      id: 1,
      name: " Airtime & Data",
      icon: <AirtimeAndDataIcon />,
      to: "/wallet/airtime-and-data",
      component: <Company {...props} />,
    },
    {
      id: 2,
      name: " Utilities",
      icon: <UtilitiesIcon />,
      to: "/wallet/utilities",
      component: <Company {...props} />,
    },
    {
      id: 3,
      name: " View more",
      icon: <ViewMoreIcon />,
      to: "/wallet/view-more",
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
      <div className="mt-3 mb-4 " onClick={() => navigate("/wallet")}>
        <div className="">
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <BackArrowIcon /> <span>Transfer</span>
          </div>
        </div>
      </div>

      <div className="row mt-3 clear-fix cursor-pointer pb-4">
        {TransactionsNavlinks.map((currentTransactionsNav, index) => {
          return (
            <Link to={currentTransactionsNav.to}
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
            </Link>
          );
        })}
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-9 ">
          <form action="">
    

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AccountNumberIcon />{" "}
              <div className="border-0 w-100">{billType || "Select Bills"}</div>
              <DownArrowIcon />
            </div>  
         

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <CalenderIcon />{" "}
              <input
                type="text"
                placeholder="From Month"
                value={fromMonth}
                className="border-0 w-100"
                onChange={(e) => {
                  setfromMonth(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <CalenderIcon />{" "}
              <input
                type="text"
                placeholder="To Month"
                value={toMonth}
                className="border-0 w-100"
                onChange={(e) => {
                  settoMonth(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AmountIcon />{" "}
              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                className="border-0 w-100"
                onChange={(e) => {
                  setamount(e.target.value);
                }}
              />
            </div>

            <div className="d-flex">
              {/* <input type="checkbox" name="aas" id="" /> */}
              Save Beneficiary
            </div>
            <div className="my-5 mt-4 ">
              <button
                className="page-btn border-0 w-100 p-2"
                // onClick={(e) => {
                //   handleLogin(e);
                // }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewMore;
