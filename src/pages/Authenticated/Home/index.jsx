import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodHomeIcon from "../../../assets/svg/FoodHomeIcon";
import GuestPlusIcon from "../../../assets/svg/GuestPlusIcon";
import NoticeIcon from "../../../assets/svg/NoticeIcon";
import RealEstateIcon from "../../../assets/svg/RealEstateIcon";
import ServicemenIcon from "../../../assets/svg/ServicemenIcon";
import UpcomingBillsIcon from "../../../assets/svg/UpcomingBillsIcon";
import VoteHandIcon from "../../../assets/svg/VoteHandIcon";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar";

function Home(props) {
  const { allUpdates, setAllUpdates } = props;
  const [sideBarActive, setsideBarActive] = useState(false);
  useEffect(() => {
    axios
      .get("/updates")
      .then(function (response) {
        console.log(response);
        setAllUpdates(response.data.updates);
        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const quickLinks = [
    {
      name: "New Guest",
      text: "Send Gate pass to visitors",
      icon: <GuestPlusIcon />,
      updates: "guestCount",
      to: "guest",
    },
    {
      name: "Vote",
      text: "Vote for opinions or election in the estate.",
      icon: <VoteHandIcon />,
      updates: "activeElectionCount",
      to: "vote",
    },
    {
      name: "Notice",
      text: "Get general information from the estate",
      icon: <NoticeIcon />,
      updates: "notificationCount",
      to: "notice",
    },
  ];
  const quickFind = [
    {
      name: "Quick Find",
      text: "Find food in the estate",
      icon: <FoodHomeIcon />,
      updates: "foodsCount",
      to: "commerce",
    },
    {
      name: "Servicemen",
      text: "Find a dispatch Services",
      icon: <ServicemenIcon />,
      updates: "servicesCount",
      to: "servicemen",
    },
    {
      name: "Real Estate",
      text: "Find properties in the estate",
      icon: <RealEstateIcon />,
      updates: "propertyCount",
      to: "realestates",
    },
  ];

  return (
    <div className="container">
    <NavBar {...props} sideBarActive={sideBarActive}  setsideBarActive={setsideBarActive} />
    {sideBarActive?      <SideBar {...props} sideBarActive={sideBarActive}  setsideBarActive={setsideBarActive} />: <></>}

      <h6 className="purple-text mt-5">Upcoming Payments</h6>
      <div className="emanager-card p-4">
        <strong className="">Upcoming Water Bills</strong>
        <div className="d-flex mt-4 justify-content-between">
          <div className="d-flex">
            {" "}
            <UpcomingBillsIcon />
            <h4 className="purple-text mx-4">
              <strong>N12,000</strong>{" "}
            </h4>
          </div>
          <button className="home-btn">Pay</button>
        </div>
      </div>

      <h6 className=" mt-5">Quick Links</h6>
      <div className="emanager-card-wrapper d-flex justify-content-between gap-3">
        {quickLinks.map((currentQuickLink, index) => {
          return (
            <Link
              to={currentQuickLink.to}
              className="emanager-card w-100 p-3 "
              key={index}
            >
              <div className="emanager-card-header position-relative">
                {currentQuickLink.icon}

                <div className="badge position-absolute ">
                  {allUpdates[currentQuickLink.updates] || 0}
                </div>
              </div>

              <div className="emanager-card-body mt-2">
                <h3 className="purple-text">
                  <strong>{currentQuickLink.name}</strong>{" "}
                </h3>
                <p>{currentQuickLink.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <h6 className=" mt-5">Quick Find</h6>
      <div className="emanager-card-wrapper d-flex justify-content-between gap-3">
        {quickFind.map((currentQuickFind, index) => {
          return (
            <Link
              to={currentQuickFind.to}
              className="emanager-card w-100 p-3 "
              key={index}
            >
              <div className="emanager-card-header position-relative">
                {currentQuickFind.icon}

                <div className="badge position-absolute ">
                  {allUpdates[currentQuickFind.updates] || 0}
                </div>
              </div>

              <div className="emanager-card-body mt-2">
                <h3 className="purple-text">
                  <strong>{currentQuickFind.name}</strong>{" "}
                </h3>
                <p>{currentQuickFind.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
