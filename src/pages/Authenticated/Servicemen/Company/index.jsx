import axios from "axios";
import React, { useEffect, useState } from "react";
import FavouriteIcon from "../../../../assets/svg/FavouriteIcon";
import PhoneIcon from "../../../../assets/svg/PhoneIcon";
import SearchBox from "../../../../components/Badge/SearchBox";
import { addToCartHandler } from "../../../../helper/helper";
import CompanyModal from "./CompanyModal"; 

function Company(props) { 
  const [business, setbusiness] = useState([]);
  const [currentSelectedbusiness, setcurrentSelectedbusiness] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    axios
      .get("/business")
      .then(function (response) {
        // console.log(response);
        setbusiness(response.data.business);
        console.log("response1", business);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 
  return (
    <div className="mt-3">
      <div className="mb-3">
        <p className="mt-2 text-center">
        Discover company services around you, or put your business online for discovery.
        </p>
        <SearchBox />
      </div>
      <div className="commerce-card-wrapper row row-cols-1 row-cols-md-2 g-3">
        {business.map((currentbusiness, index) => {
          return (
            <div className="" key={index}>
              <div
                className="commerce-card p-2 border shadow-sm rounded d-flex"
                onClick={() => {
                  setcurrentSelectedbusiness(currentbusiness);
                  setModalShow(true);
                }}
              >
                <div className="img-thumbnails   col-6">
                  <img src={currentbusiness?.image[0]?.url} alt="" width="100%" />
                </div>
                <div className=" col-6  p-2">
                  <h4>{currentbusiness?.name?.value}</h4>
                  <p className="m-0">{currentbusiness?.details?.value}</p>
                  <p className="m-0">{currentbusiness?.emails[0]?.value}</p>
                  <p className="m-0"><span><PhoneIcon/></span> {currentbusiness?.phoneNumbers[0]?.countryCode}{currentbusiness?.phoneNumbers[0]?.value}</p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    {/* <div
                      className="commerce-card-btn clearfix p-2 text-white cursor-pointer  "
                      onClick={(e) => {
                        e.stopPropagation(); 
                      
                      }}
                    >
                      add to cart
                    </div> */}
                    {/* <FavouriteIcon /> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>
      <CompanyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentSelectedbusiness={currentSelectedbusiness}
      />
    </div>
  );
}

export default Company;
