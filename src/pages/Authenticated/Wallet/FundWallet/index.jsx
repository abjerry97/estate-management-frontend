import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AirtimeAndDataIcon from "../../../../assets/svg/AirtimeAndDataIcon";
import BackArrowIcon from "../../../../assets/svg/BackArrowIcon";
import BankMenuIcon from "../../../../assets/svg/BankMenuIcon";
import DebitCardIcon from "../../../../assets/svg/DebitCardIcon";
import FoodHomeIcon from "../../../../assets/svg/FoodHomeIcon";
import RightArrowIcon from "../../../../assets/svg/RightArrowIcon";
import TransferIcon from "../../../../assets/svg/TransferIcon";
import UssdMenuIcon from "../../../../assets/svg/UssdMenuIcon";
import UtilitiesIcon from "../../../../assets/svg/UtilitiesIcon";
import ViewMoreIcon from "../../../../assets/svg/ViewMoreIcon";
import Company from "../../Servicemen/Company";
import UssdModal from "./UssdModal";

function FundWallet(props) {
  const [activeTransactionsTab, setactiveTransactionsTab] = useState(0);
  const [ussdModal, setussdModal] = useState(false)

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
        {/* <div className="">
          <div className=" page-btn p-2 px-3">Fund Wallet</div>
        </div> */}
      </div>
      <hr />
      <div className="">
        <div className="">
          <div className="row">
            <div className="col-2">
              <BankMenuIcon />
            </div>
            <div className="col-8">
              <h5>Via Bank transfer</h5>
              <p>
                To add money to your wallet, make a transfer to the account
                details below
              </p>

              <ul className=" list-unstyled mt-3">
                <li className="d-flex justify-content-between mb-3">
                  <span>BANK NAME</span>
                  <strong>GTBank</strong>
                </li>
                <li className="d-flex justify-content-between mb-3">
                  <span>ACCOUNT NUMBER</span>
                  <strong>000901123467</strong>
                </li>
                <li className="d-flex justify-content-between mb-3">
                  <span>BENEFICIARY</span>
                  <strong>Avis Charles</strong>
                </li>
              </ul>
              <div className="row align-items-center">
                <div className="col-5"><hr /></div>
                <div className="col-1 text-center">OR</div>
                <div className="col-5"><hr /></div>
               </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2">
              <UssdMenuIcon />
            </div>
            <div className="col-8">
              <h5>USSD</h5>
              <p>
              Transfer using your other banks’ USSD code
              </p>
  
            </div>
            <div className="col-2 " >
              <div className="" onClick={()=>{setussdModal(true)}}>
            <RightArrowIcon /></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2">
              <DebitCardIcon />
            </div>
            <div className="col-8">
              <h5>Add money with a debit card</h5>
              <p>
              Fund your Account with your bank card
              </p>
  
            </div>
            <div className="col-2">
            <RightArrowIcon/>
            </div>
          </div>
        </div>
      </div>
      <UssdModal     show={ussdModal}
        onHide={() => setussdModal(false)}/>
    </div>
  );
}

export default FundWallet;
