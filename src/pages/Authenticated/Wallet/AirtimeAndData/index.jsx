import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import AirtimeAndDataIcon from "../../../../assets/svg/AirtimeAndDataIcon";
import AmountIcon from "../../../../assets/svg/AmountIcon";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import BankIcon from "../../../../assets/svg/BankIcon";
import BeneficiaryIcon from "../../../../assets/svg/BeneficiaryIcon";
import DownArrowIcon from "../../../../assets/svg/DownArrowIcon";
import FoodHomeIcon from "../../../../assets/svg/FoodHomeIcon";
import PhoneIcon from "../../../../assets/svg/PhoneIcon";
import PhonenumberIcon from "../../../../assets/svg/PhonenumberIcon";
import RemarkIcon from "../../../../assets/svg/RemarkIcon";
import TransferIcon from "../../../../assets/svg/TransferIcon";
import UtilitiesIcon from "../../../../assets/svg/UtilitiesIcon";
import ViewMoreIcon from "../../../../assets/svg/ViewMoreIcon";
import Company from "../../Servicemen/Company";

function AirtimeAndData(props) {
  const [activeTransactionsTab, setactiveTransactionsTab] = useState(1);
  const [phoneNumber, setphoneNumber] = useState("");
  const [airtimeOrData, setairtimeOrData] = useState("");
  const [networkProvider, setnetworkProvider] = useState("");
  const [dataSubscription, setdataSubscription] = useState("");
  
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
      <div className="mt-3 mb-4 " onClick={() => navigate(-1)}>
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
              <PhonenumberIcon />{" "}
              <input
                type="tel"
                value={phoneNumber}
                placeholder="Enter Phone Number"
                className="border-0 w-100"
                onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
              />
            </div>

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <BankIcon />{" "}
              <div className="border-0 w-100">{airtimeOrData || "Airtime Or Data"}</div>
              <DownArrowIcon />
            </div> 
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <BankIcon />{" "}
              <div className="border-0 w-100">{networkProvider || "Select Network Provider"}</div>
              <DownArrowIcon />
            </div> 

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <BankIcon />{" "}
              <div className="border-0 w-100">{dataSubscription || "Select Data Subscription"}</div>
              <DownArrowIcon />
            </div> 

         

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AmountIcon />{" "}
              <input
                type="number"
                placeholder="Enter Amount"
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

export default AirtimeAndData;
