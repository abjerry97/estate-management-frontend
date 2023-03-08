import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../../../assets/svg/CloseIcon";

function VoteModal(props) {
  const { category,selectedcandidate,setselectedcandidate,handlevote } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-3">
        <div className="d-flex gap-3">
          <span onClick={() => props.onHide()}><CloseIcon/></span>{" "}
          <strong>{category?.type}</strong>
        </div>
        <p className="mt-3 text-center">Note: Casted vote can not be undo</p>
        <div className="mt-4">
          <ul className=" list-unstyled">
            {category?.candidates?.map((candidate, candidateIndex) => {
              return (
                <li
                  className="d-flex align-items-center  row px-3 mt-2"
                  key={candidateIndex}
                >
                  <span className="page-btn-white p-2 px-3 col-2 text-center" onClick={()=>{setselectedcandidate(candidate)
                  handlevote()}}>
                    sd
                  </span>
                  <div className="col-1"></div>
                  <div className="col-9 row vote-badge p-2">
                    <span className="col-6">{candidate?.name}</span>
                    <strong className="col-6">{candidate?.type}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Modal>
  );
}

export default VoteModal;
