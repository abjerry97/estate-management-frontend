import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import BackArrowIcon from "../../../assets/svg/BackArrowIcon"; 
import DownArrowIcon from "../../../assets/svg/DownArrowIcon"; 
import PlusCircleIcon from "../../../assets/svg/PlusCircleIcon"; 

function DropASuggestion(props) {
  const [propertyStatus, setpropertyStatus] = useState("");
  const [subject, setsubject] = useState("");
  const [title, settitle] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [houseOwnerType, sethouseOwnerType] = useState("");
  const [apartmentType, setapartmentType] = useState("");
  const [numberInousehold, setnumberInousehold] = useState("");

  useEffect(() => {
    axios
      .get("/election/candidate")
      .then(function (response) {
        console.log(response);

        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="mt-3 mb-4 " onClick={() => navigate("/")}>
        <div className="">
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <BackArrowIcon /> <span>Drop a Suggestion!</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-7 ">
          <form action="">
      
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <input
                type="text"
                value={subject}
                placeholder="Subject"
                className="border-0 w-100"
                onChange={(e) => {
                  setsubject(e.target.value);
                }}
              />
            </div>

            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border-0 w-100"
              ></textarea>
            </div> 

            <div className="my-5 mt-4 ">
              <button
                className="page-btn border-0 w-100 p-2"
                // onClick={(e) => {
                //   handleLogin(e);
                // }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DropASuggestion;
