import axios from "axios";
import React, { useEffect, useState } from "react"; 
import PhoneIcon from "../../../../assets/svg/PhoneIcon";
import SearchBox from "../../../../components/Badge/SearchBox"; 
import ServicesModal from "./ServicesModal"; 

function Services(props) { 
  const [services, setservices] = useState([]);
  const [currentSelectedservices, setcurrentSelectedservices] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    axios
      .get("/services")
      .then(function (response) {
        // console.log(response);
        setservices(response.data.service);
        // console.log("response1", services);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 
  return (
    <div className="mt-3">
      <div className="mb-3">
        <p className="mt-2 text-center">
        Discover artisans around you, or put your skills online for discovery.    </p>
        <SearchBox />
      </div>
      <div className="commerce-card-wrapper row row-cols-1 row-cols-md-2 g-3">
        {services.map((currentservices, index) => {
          return (
            <div className="" key={index}>
              <div
                className="commerce-card p-2 border shadow-sm rounded d-flex"
                onClick={() => {
                  setcurrentSelectedservices(currentservices);
                  setModalShow(true);
                }}
              >
                <div className="img-thumbnails   col-6">
                  <img src={currentservices?.image[0]?.url} alt="" width="100%" />
                </div>
                <div className=" col-6  p-2">
                  <h4>{currentservices?.name?.value}</h4>
                  <p className="m-0">{currentservices?.details?.value}</p>
                  <p className="m-0">{currentservices?.emails[0]?.value}</p>
                  <p className="m-0"><span><PhoneIcon/></span> {currentservices?.phoneNumbers[0]?.countryCode}{currentservices?.phoneNumbers[0]?.value}</p>
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
      <ServicesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentSelectedservices={currentSelectedservices}
      />
    </div>
  );
}

export default Services;
