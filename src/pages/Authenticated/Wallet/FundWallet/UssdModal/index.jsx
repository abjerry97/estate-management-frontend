import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../../../assets/svg/CloseIcon";
import PhoneIcon from "../../../../../assets/svg/PhoneIcon";

function UssdModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-3">
        <div className="d-flex  justify-content-between ">
          <span onClick={() => props.onHide()} className="cursor-pointer">
            <CloseIcon />
          </span>{" "}
          <strong>USSD</strong>
          <strong></strong>
        </div>
        <hr />

        <div className="text-center">
          <p>Dial the short code below on your phone</p>
        </div>

        <div className="w-75 mt-5 m-auto ">
          <ul className=" list-unstyled mt-3">
            <li className="d-flex justify-content-between mb-3">
              <span>GTBank</span>
              <strong>*902#</strong>
            </li>
            <li className="d-flex justify-content-between mb-3">
              <span>Access Bank</span>
              <strong>*902#</strong>
            </li>
            <li className="d-flex justify-content-between mb-3">
              <span>Fidelity Bank</span>
              <strong>*902#</strong>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-center">
          <div className="page-btn p-2 px-4">
        Restart Transcation
        </div>
        </div>
      </div>
    </Modal>
  );
}

export default UssdModal;
