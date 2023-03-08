import axios from 'axios';
import React, { useEffect, useState } from 'react'  
import Dispatch from '../../../../assets/svg/Dispatch';
import Event from '../../../../assets/svg/Event';
import GuestIcon from '../../../../assets/svg/GuestIcon';
import Taxi from '../../../../assets/svg/Taxi';
import CreatePass from '../modals/createPass';
export default function CreateVisitor(props) {
 
  const [modalShow, setModalShow] = useState(false);
  const [gatePasses, setgatePasses] = useState([]);
  const { allGuests, setAllGuests } = props;
  return (
    <div className=""> 
         <p className="mt-5">What kind of visitor are you expecting?</p>
      <div className=" guest-emanager-card-wrapper">
        <div className="emanager-card p-3" onClick={() => setModalShow(true)}>
          {" "}
          <div className="emanager-card-header position-relative">
            <Taxi />
          </div>
          <div className="emanager-card-body mt-2">
            <h3 className="purple-text">
              <strong>Taxi</strong>{" "}
            </h3>
            <p>Send a Gate pass to your taxi</p>
          </div>
        </div>
        <div className="emanager-card p-3 " onClick={() => setModalShow(true)}>
          {" "}
          <div className="emanager-card-header position-relative">
            <Dispatch />
          </div>
          <div className="emanager-card-body mt-2">
            <h3 className="purple-text">
              <strong>Dispatch</strong>{" "}
            </h3>
            <p>Send a Gate pass to a dispatch Rider</p>
          </div>
        </div>
        <div className="emanager-card p-3 " onClick={() => setModalShow(true)}>
          {" "}
          <div className="emanager-card-header position-relative">
            <Event />
          </div>
          <div className="emanager-card-body mt-2">
            <h3 className="purple-text">
              <strong>Event</strong>{" "}
            </h3>
            <p>Send a guest coming for your event</p>
          </div>
        </div>
        <div className="emanager-card p-3 " onClick={() => setModalShow(true)}>
          {" "}
          <div className="emanager-card-header position-relative">
            <GuestIcon />
          </div>
          <div className="emanager-card-body mt-2">
            <h3 className="purple-text">
              <strong>Guest</strong>{" "}
            </h3>
            <p>Send A gate pass to your guest.</p>
          </div>
        </div>
      </div>
      <CreatePass show={modalShow} onHide={() => setModalShow(false)} />

      <div className="mt-4 d-flex justify-content-between">
        <h5>Incoming Guest</h5> <span>Slide left to Remove</span> 
      </div>


      {(allGuests || []).map((currentGuest, currentGuestId) => {
        const date = new Date(currentGuest.createdOn)- new Date(); 
        return <div key={currentGuestId} className=" emanager-card p-3 row mt-3">
        <div className="col-2">
          <Taxi />
        </div>
        <div className="col-6">
          <h3 className="purple-text">
            <strong>{currentGuest.name.value}</strong>{" "}
          </h3>
        
          <div className="">
            <span>Expires in {new Date(date).getMinutes().toString()} </span>
          </div>
        </div>
        <div className="col-4">
          <span>Gate Pass</span>
          <h4>{currentGuest.pass.value}</h4>
        </div>
        </div>




      })}
 
    </div>
  )
}
