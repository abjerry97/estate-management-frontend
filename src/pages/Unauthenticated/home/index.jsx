import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useOutsideAlerter } from "./../../../utils";

function Home(props) {
  const { estates, currentEstate, setCurrentEstate,setEstates } = props
  const [filteredData, setFilteredData] = useState(null);
  const [searchDropdownState, setSearchDropdownState] = useState(false);
  const [searchInput, setsearchInput] = useState("");
  const [searchChangeState, setsearchChangeState] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("/estates")
      .then(function (response) {
        setEstates(response.data.estates);
        console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    setFilteredData(estates);
    const newFilter = (estates|| []).filter((value) => {
      return (
        value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    });
    if (searchInput === "" && searchInput.length > 2) {
      setFilteredData([]);
      setSearchDropdownState(false);
    } else if (searchInput.length > 1) {
      setFilteredData(newFilter);
      setSearchDropdownState(true);
    } else if (searchInput === "" && searchChangeState) {
      setSearchDropdownState(false);
    }
  }, [estates, searchInput]);

  const handleFilter = (searchInput) => {
    // return (
    // )
  };
  const AddEstate = (estate) => {
    if (!!currentEstate) {
      navigate('/login')
    } else {
      axios
        .post("/estate", {
          name: searchInput,
        })
        .then((response) => {
          alert(response.data.message);
          if(response.data.success)
          navigate('/login')

        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useOutsideAlerter(wrapperRef, setSearchDropdownState);

  return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-11 col-md-9 col-lg-5 shadow rounded-3 p-4 mt-5">
            <div className="mb-5">
              <img
                src="/images/pexels-david-mcbee-15461684.jpg"
                alt=""
                width="100%"
              />
              {/* width="100%" */}
            </div>
            <div className="mt-5" ref={wrapperRef}>
              <div className="d-flex align-items-center purple-border p-2">
                <input
                  type="search"
                  name=""
                  id=""
                  value={searchInput}
                  placeholder="enter estate name"
                  className="border-0 w-100 mx-2 somehow-black-text"
                  onChange={(e) => {
                    setsearchInput(e.target.value);
                    setsearchChangeState(true);
                    if (searchInput.length > 3) {
                      handleFilter(searchInput);
                    }
                  }}
                />
                <svg
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setSearchDropdownState(!searchDropdownState);
                  }}
                >
                  <path
                    d="M18.5415 2.10265C18.5422 2.33919 18.4996 2.57291 18.4169 2.78662C18.3342 3.00034 18.2134 3.18863 18.0636 3.33765L10.3136 10.9851C10.0825 11.218 9.79255 11.3453 9.49337 11.3453C9.19419 11.3453 8.90428 11.218 8.67316 10.9851L0.923161 3.06848C0.659381 2.79973 0.493499 2.41354 0.462009 1.99486C0.430518 1.57619 0.535998 1.15932 0.755244 0.83598C0.974489 0.512638 1.28954 0.309299 1.63109 0.270699C1.97264 0.232098 2.31271 0.361395 2.57649 0.630147L9.49983 7.70765L16.4232 0.867648C16.6128 0.674033 16.8436 0.551044 17.0885 0.513235C17.3333 0.475426 17.5818 0.524378 17.8047 0.6543C18.0275 0.784222 18.2154 0.989675 18.3459 1.24635C18.4765 1.50302 18.5444 1.80018 18.5415 2.10265Z"
                    fill="#5E38AF"
                  />
                </svg>
              </div>

              <div className={`position-relative mt-1 `}>
                <ul
                  className={`position-absolute list-unstyled bg-white w-100 border  ${
                    searchDropdownState ? "" : "d-none"
                  }`}
                >
                  {!!filteredData &&
                    filteredData.slice(0, 5).map((estate) => {
                      return (
                        <li
                          className="border-bottom cursor-pointer search-list p-2"
                          key={estate._id}
                          onClick={() => {
                            setCurrentEstate(estate);
                            setsearchInput(
                              `${!!estate.name ? estate.name : ""} ${
                                estate.location.length > 1
                                  ? `,${estate.location}`
                                  : ""
                              }`.trim()
                            );
                          }}
                        >
                          {!!estate.name ? estate.name : ""}
                          {estate.location.length > 1
                            ? `,${estate.location}`
                            : ""}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>

            <div className="my-5 ">
              <button
                className="page-btn border-0 w-100 p-3"
                onClick={(e) => {
                  e.preventDefault();
                  AddEstate();
                }}
              >
                Select Estate
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Home;
