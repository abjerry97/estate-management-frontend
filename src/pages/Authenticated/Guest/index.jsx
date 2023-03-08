import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateVisitor from "./CreateVisitor";
import Passes from "./Passes";
import axios from "axios";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon";

function Guest(props) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const { allGuests, setAllGuests } = props;
  console.log(props)
  useEffect(() => {
    axios
      .get("/guest/guests")
      .then(function (response) {
        setAllGuests(response.data.foundGuests);
        console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const tabStyle = {
    border: "0.89px solid #5E38AF",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "center",
  };

  const activeTabStyle = {
    backgroundColor: "#5E38AF",
    color: "#fff",
  };
  const tabs = [
    {
      key: 0,
      name: "Guest",
      component: <CreateVisitor {...props} />,
    },
    {
      key: 1,
      name: "History",
      component: <Passes {...props}/>,
    },
  ];

  const TabNav = ({ id, name }) => {
    return (
      <div
        className="col d-flex text-center align-items-center justify-content-center p-3"
        style={activeTab === id ? activeTabStyle : {}}
        onClick={() => setActiveTab(id)}
      >
        {name}
      </div>
    );
  };
  return (
    <div className="container">
      <div className="mt-3 mb-4 " onClick={() => navigate("/")}>
        <div className="d-flex">
        <div className="d-flex align-items-center gap-2 cursor-pointer"><BackArrowIcon/> <span> Visitors</span></div>
      </div></div>
      <div className="row" style={tabStyle}>
        {tabs.map(({ key, name }, index) => {
          return <TabNav key={index} id={key} name={name} />;
        })}
      </div>

      {tabs[activeTab]?.component || <></>}
    </div>
  );
}

export default Guest;
