import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon";
import ReadNotice from "./Modals/ReadNotice";

function Notice() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [notice, setNotice] = useState([]);
  const [currentNotice, setcurrentNotice] = useState(null);
  useEffect(() => {
    axios
      .get("/notice")
      .then(function (response) {
        console.log(response);
        setNotice(response.data.notification?.notifications);
        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const readNotice = (noticeId) => {
    axios
      .put(`/notice/${noticeId}`)
      .then(function (response) {
        alert(response.data.message);
        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container"> 
      <div className="mt-3 mb-4 " onClick={() => navigate("/")}>
        <div className="">
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <BackArrowIcon /> <span>Notice</span>
          </div>
        </div>
      </div>
      <hr />

      {notice.map((currentnotice, currentnoticeId) => {
        const date = new Date(currentnotice.createdOn);

        return (
          <div
            className="emanager-card p-3 mt-2 d-flex justify-content-between"
            onClick={() => {
              setcurrentNotice(currentnotice);
              setModalShow(true);
              readNotice(currentnotice._id);
            }}
          >
            <div className="">
              <h5> {currentnotice?.message?.subject?.value || ""}</h5>
              {currentnotice?.message?.value.value || ""}
            </div>
            <div className="">{date.toISOString()}</div>
          </div>
        );
      })}

      <ReadNotice
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentNotice={currentNotice}
      />
    </div>
  );
}

export default Notice;
