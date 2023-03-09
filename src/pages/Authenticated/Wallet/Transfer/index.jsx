import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountNumberIcon from "../../../../assets/svg/AccountNumberIcon";
import AirtimeAndDataIcon from "../../../../assets/svg/AirtimeAndDataIcon";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import BankIcon from "../../../../assets/svg/BankIcon";
import BeneficiaryIcon from "../../../../assets/svg/BeneficiaryIcon";
import DownArrowIcon from "../../../../assets/svg/DownArrowIcon";
import FoodHomeIcon from "../../../../assets/svg/FoodHomeIcon";
import RemarkIcon from "../../../../assets/svg/RemarkIcon";
import TransferIcon from "../../../../assets/svg/TransferIcon";
import UtilitiesIcon from "../../../../assets/svg/UtilitiesIcon";
import ViewMoreIcon from "../../../../assets/svg/ViewMoreIcon";
import Company from "../../Servicemen/Company";

function Transfer(props) {
  const [activeTransactionsTab, setactiveTransactionsTab] = useState(0);
  const [accountNumber, setaccountNumber] = useState("");
  const [bankName, setbankName] = useState("");
  const [beneficiaryName, setbeneficiaryName] = useState("");
  const [amount, setamount] = useState(0);
  const [remark, setremark] = useState("");
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
      <div className="mt-3 mb-4 " onClick={() => navigate("/")}>
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
              <input
                type="number"
                value={accountNumber}
                placeholder="Enter Account Number"
                className="border-0 w-100"
                onChange={(e) => {
                  setaccountNumber(e.target.value);
                }}
              />
            </div>

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <BankIcon />{" "}
              <div className="border-0 w-100">{bankName || "Select Bank"}</div>
              <DownArrowIcon />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <BeneficiaryIcon />{" "}
              <div className="border-0 w-100">
                {beneficiaryName || "Beneficiary Name"}{" "}
              </div>
            </div>

            <div className=" mb-4">
              <small>Select Amount</small>
              <div className="d-flex gap-2 justify-content-center">
                <span className="border rounded p-1">-</span>
                <input
                  type="number"
                  name=""
                  id=""
                  className="border-0"
                  value={amount}
                  onChange={(e) => {
                    setamount(e.target.value);
                  }}
                />
                <span className="border rounded p-1">+</span>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <RemarkIcon />{" "}
              <input
                type="text"
                placeholder="Remark (e.g Transfer  to ABC)"
                value={remark}
                className="border-0 w-100"
                onChange={(e) => {
                  setremark(e.target.value);
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

export default Transfer;
