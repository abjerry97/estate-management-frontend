import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../../../assets/svg/CloseIcon";
import PhoneIcon from "../../../../../assets/svg/PhoneIcon";

function CompanyModal(props) {
  const { currentSelectedbusiness } = props;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="p-3">
        <div className="d-flex gap-3">
          <span onClick={() => props.onHide()} className="cursor-pointer">
            <CloseIcon />
          </span>{" "}
          <strong>{}</strong>
        </div>

        <div className="img-thumbnails d-flex align-items-center justify-content-center my-5 rounded-2 overflow-hidden">
          <img
            src={currentSelectedbusiness?.image[0]?.url || ""}
            alt=""
            className="modal-img "
          />
        </div>
        <div className="mt-4">
          <div className="text-center">
            <h5>{currentSelectedbusiness?.name?.value}</h5>
          </div>
          <div className="">
            <p>{currentSelectedbusiness?.emails[0].value || ""}</p>

            <div className="">
              <p>{currentSelectedbusiness?.details?.value || ""}</p>
            </div>

            <div className="d-flex align-items-center">
              <div className="food-modal-btn p-2">
                {" "}
                <p className="m-0">
                  <span>
                    <PhoneIcon />
                  </span>{" "}
                  {currentSelectedbusiness?.phoneNumbers[0]?.countryCode}
                  {currentSelectedbusiness?.phoneNumbers[0]?.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CompanyModal;
