import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import AccountNumberIcon from "../../../assets/svg/AccountNumberIcon";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon"; 
import PersonIcon from "../../../assets/svg/PersonIcon";
import PhoneIcon from "../../../assets/svg/PhoneIcon"; 

function ManageFamilyMember(props) { 
  const [name, setname] = useState(""); 
  const [address, setaddress] = useState(""); 
  const [email, setemail] = useState(""); 
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
            <BackArrowIcon /> <span>Family Member</span>
          </div>
        </div>
      </div>

   
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-md-9 ">
          <form action="">
          
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <PersonIcon />{" "}
              <input
                type="text"
                value={name}
                placeholder="Full Name"
                className="border-0 w-100"
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AccountNumberIcon />{" "}
              <input
                type="text"
                value={address}
                placeholder="Address"
                className="border-0 w-100"
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AccountNumberIcon />{" "}
              <input
                type="text"
                value={email}
                placeholder="Email"
                className="border-0 w-100"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <PhoneIcon />{" "}
              <input
                type="text"
                value={phonenumber}
                placeholder="Phone Number"
                className="border-0 w-100"
                onChange={(e) => {
                  setphonenumber(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AccountNumberIcon />{" "}
              <input
                type="text"
                value={houseOwnerType}
                placeholder="Landlord or Tenant"
                className="border-0 w-100"
                onChange={(e) => {
                  sethouseOwnerType(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AccountNumberIcon />{" "}
              <input
                type="text"
                value={numberInousehold}
                placeholder="Number in Household"
                className="border-0 w-100"
                onChange={(e) => {
                  setnumberInousehold(e.target.value);
                }}
              />
            </div>
            <div className="d-flex align-items-center gap-2 border rounded mb-4 p-2">
              <AccountNumberIcon />{" "}
              <input
                type="text"
                value={apartmentType}
                placeholder="Apartment/Building Type"
                className="border-0 w-100"
                onChange={(e) => {
                  setapartmentType(e.target.value);
                }}
              />
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

export default ManageFamilyMember;
