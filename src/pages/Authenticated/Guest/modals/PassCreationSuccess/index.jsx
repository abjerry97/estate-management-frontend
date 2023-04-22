import { Modal, Button, Tab, Tabs } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import PersonIcon from "../../../../../assets/svg/PersonIcon";
import Dispatch from "../../../../../assets/svg/Dispatch";

function PassCreationSuccess(props) {
  const {passInfo,allUpdates } = props
  console.log(`passInfo`,passInfo)
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column p-5">
     {passInfo.icon}
        <h3 className="purple-text mt-2">{passInfo.name}</h3>
        <small className="gray-text mt-4">gate pass</small>
        <h1 className="gray-text">{passInfo.pass}</h1>
        <p className="gray-text">Expires in 34:09s</p>

        <p className="text-center gray-text">
          Send Gate Pass as SMS to the {passInfo.type}. Your wallet will be
          charged N4 for this SMS
        </p>
        <small className="gray-text">Wallet Balance</small>
        <h1 className="gray-text">N{allUpdates.walletBalance}</h1>
        <div className=" gray-text text-center success-card-badge rounded-1 p-2">
          Transfer  to <strong>7987438843</strong> Wema Bank Avis Charles to fund your wallet
        </div>
     
      </div>
      <div className="p-4">
      <div className="mt-2 ">
        <button
          className="page-btn border-0 w-100 p-2"
        
        >
          Send as SMS
        </button>
      </div>
      <div className=" my-3 ">
        <button
          className="page-btn-white w-100 p-2"
      
          onClick={()=>{
            props.onCancel(false);
            
            props.onHide()}}
        >
          Close
        </button>
      </div>
      </div>
    </>
  );
}

export default PassCreationSuccess;
