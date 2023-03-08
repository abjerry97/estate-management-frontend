import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../../../../../assets/svg/CloseIcon";

function ReadNotice(props) {
  const {currentNotice   } = props;

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
        </div>
     <div className="mt-3 text-center">   <strong >{currentNotice?.message?.subject?.value || ""}</strong>
     </div>
     <p className="mt3">
     {currentNotice?.message?.value.value || ""}
     </p>
      </div>
    </Modal>
  );
}

export default ReadNotice;
