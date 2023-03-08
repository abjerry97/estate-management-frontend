import axios from "axios";
import React, { useEffect, useState } from "react"; 
import PhoneIcon from "../../../../assets/svg/PhoneIcon";
import SearchBox from "../../../../components/Badge/SearchBox"; 
import PropertiesModal from "./PropertiesModal"; 

function Properties(props) { 
  const [realEstate, setrealEstate] = useState([]);
  const [currentSelectedrealEstate, setcurrentSelectedrealEstate] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    axios
      .get("/properties")
      .then(function (response) {
        console.log(response);
        setrealEstate(response.data.properties);
        // console.log("response1", realEstate);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); 
  return (
    <div className="mt-3">
      <div className="mb-3">
        <p className="mt-2 text-center">
        Check for available property for purchase, lease and rent   </p>
        <SearchBox />
      </div>
      <div className="commerce-card-wrapper row row-cols-1 row-cols-md-2 g-3">
        {realEstate.map((currentrealEstate, index) => {
          return (
            <div className="" key={index}>
              <div
                className="commerce-card p-2 border shadow-sm rounded d-flex"
                onClick={() => {
                  setcurrentSelectedrealEstate(currentrealEstate);
                  setModalShow(true);
                }}
              >
                <div className="img-thumbnails   col-6">
                  <img src={currentrealEstate?.image[0]?.url} alt="" width="100%" />
                </div>
                <div className=" col-6  p-2">
                  <h4>{currentrealEstate?.name?.ownerName}</h4>
                  <p className="m-0">{currentrealEstate?.ownerEmail}</p>
                  <p className="m-0">{currentrealEstate?.ownerPhone}</p>
                  <p className="m-0">{currentrealEstate?.description?.value || ""}</p>
                  <p className="m-0">N {currentrealEstate?.price?.value}/{currentrealEstate?.category}</p>
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
      <PropertiesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentSelectedrealEstate={currentSelectedrealEstate}
      />
    </div>
  );
}

export default Properties;
