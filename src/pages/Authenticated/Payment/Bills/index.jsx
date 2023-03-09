import axios from "axios";
import React, { useEffect, useState } from "react"; 
import Taxi from "../../../../assets/svg/Taxi"; 
import CreatePass from "../modals/createPass";
export default function Bills(props) { 
  const [modalShow, setModalShow] = useState(false);
  const [gatePasses, setgatePasses] = useState([]);
  const { allGuests, setAllGuests,bills } = props;
  return (
    <div className="">
      <p className="mt-5">Select the kind of payment you are making?</p>
      <div className=" guest-emanager-card-wrapper">

        {bills.map((currentBill, index)=>{
          return  <div className="emanager-card p-3" key={index} onClick={() => setModalShow(true)}>
          {" "}
          <div className="emanager-card-header position-relative" >
            {currentBill.icon}
          </div>
          <div className="emanager-card-body mt-2">
            <h3 className="purple-text">
              <strong>{currentBill.name}</strong>{" "}
            </h3>
            <p>{currentBill.text}</p>
          </div>
        </div>
        })}
        
      </div>
      <CreatePass show={modalShow} onHide={() => setModalShow(false)}{...props} />

      <div className="mt-4 d-flex justify-content-between">
        <h5>Upcoming payment</h5> <span>Slide left to Remove</span>
      </div>

      {(allGuests || []).map((currentGuest, currentGuestId) => {
        const date = new Date(currentGuest.createdOn) - new Date();
        return (
          <div key={currentGuestId} className=" emanager-card p-3 row mt-3">
            <div className="col-2">
              <Taxi />
            </div>
            <div className="col-6">
              <h3 className="purple-text">
                <strong>{currentGuest.name.value}</strong>{" "}
              </h3>

              <div className="">
                <span>
                  Expires in {new Date(date).getMinutes().toString()}{" "}
                </span>
              </div>
            </div>
            <div className="col-4">
              <span>Gate Pass</span>
              <h4>{currentGuest.pass.value}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
