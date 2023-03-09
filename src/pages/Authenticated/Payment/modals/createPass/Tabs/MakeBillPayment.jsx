import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import axios from "axios";
import CompanyIcon from "../../../../../../assets/svg/CompanyIcon";
import PersonIcon from "../../../../../../assets/svg/PersonIcon";
import PhonenumberIcon from "../../../../../../assets/svg/PhonenumberIcon";
import PlatenumberIcon from "../../../../../../assets/svg/PlatenumberIcon";
import Taxi from "../../../../../../assets/svg/Taxi";
import { useNavigate } from "react-router-dom";
import NairaIcon from "../../../../../../assets/svg/NairaIcon";
import CalenderIcon from "../../../../../../assets/svg/CalenderIcon";
import AccountNumberIcon from "../../../../../../assets/svg/AccountNumberIcon";

function MakeBillPayment(props) {
  const {currentBill}= props
  const navigate = useNavigate();

  const handleSubmit  = (e) => {
    e.preventDefault();
    axios
      .post(`/guest/create/taxi`, {
        phone: noOfMonths,
        name: amount,
        companyName: toMonth,
        plateNumber: fromMonth,
        numberOfGuests: 1,
      })
      .then((response) => {
        alert(response.data.message);
        if (response.data.success) {
          if (response.data.guest) {
            const { guest } = response.data;
            props.onCreate(true);
            props.setpassInfo({
              name: guest.name,
              icon: <Taxi />,
              type: "Taxi",
              pass: response.data.code.value,
              email: guest.email,
              phoneNumber: guest.phoneNumber,
              houseAddress: guest.houseAddress,
            });
            //   setUserInfo(user)
          }
          //  navigate("/passes")
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const [amount, setAmount] = useState("");
  const [noOfMonths, setNoOfMonths] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [fromMonth, setFromMonth] = useState("");

  return (
    <form>
     {currentBill.icon} {currentBill.text}
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <NairaIcon />
        <input
          type="text"
          name=""
          id=""
          value={amount}
          placeholder="amount"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <AccountNumberIcon />

        <input
          type="text"
          name=""
          id=""
          value={noOfMonths}
          placeholder="number of months"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setNoOfMonths(e.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <CalenderIcon />

        <input
          type="text"
          name=""
          id=""
          value={fromMonth}
          placeholder="from month"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setFromMonth(e.target.value);
          }}
        />
      </div>
      
      <div className="d-flex align-items-center purple-border p-2 mt-3">
        <CalenderIcon />
        <input
          type="text"
          name=""
          id=""
          value={toMonth}
          placeholder="to month"
          className="border-0 w-100 mx-2 somehow-black-text"
          onChange={(e) => {
            setToMonth(e.target.value);
          }}
        />
      </div>
      <div className="mt-4 ">
        <button
          className="page-btn border-0 w-100 p-2"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
      <div className=" my-3 ">
        <button className="page-btn-white w-100 p-2" onClick={props.onHide}>
          Close
        </button>
      </div>
    </form>
  );
}

export default MakeBillPayment;
