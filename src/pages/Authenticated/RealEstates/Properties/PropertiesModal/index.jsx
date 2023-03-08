import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../../../assets/svg/CloseIcon";
import PhoneIcon from "../../../../../assets/svg/PhoneIcon";

function PropertiesModal(props) {
  const { currentSelectedrealEstate } = props;

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
            src={currentSelectedrealEstate?.image[0]?.url || ""}
            alt=""
            className="modal-img "
          />
        </div>
        <div className="mt-4">
          <div className="text-center">
            <h5>{currentSelectedrealEstate?.ownerName}</h5>
          </div>
          <div className="">
            <p className="m-0">{currentSelectedrealEstate?.ownerEmail || ""}</p>
            <p className="m-0">{currentSelectedrealEstate?.ownerPhone|| ""}</p>

            <div className="">
              <p className="m-0">{currentSelectedrealEstate?.description?.value || ""}</p>
            </div>

            <div className="d-flex align-items-center">
              <div className=" p-2">
                {" "}
                <p className="m-0">
                  
                N {currentSelectedrealEstate?.price?.value}/{currentSelectedrealEstate?.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PropertiesModal;
