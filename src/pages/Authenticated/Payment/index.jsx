import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateVisitor from "./Bills"; 
import axios from "axios";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon";
import PaymentHistory from "./PaymentHistory";
import Bills from "./Bills";
import EstateLevyIcon from "../../../assets/svg/EstateLevyIcon";
import WaterBillIcon from "../../../assets/svg/WaterBillIcon";
import WasteBillIcon from "../../../assets/svg/WasteBillIcon";
import ViewMoreIcon from "../../../assets/svg/ViewMoreIcon";

function Payment(props) {
  const bills = [
    {
      name: "Estate Levy",
      text: "Pay for your estate levy",
      icon: <EstateLevyIcon />,
    },
    {
      name: "Water Bill",
      text: "Pay for your water bills",
      icon: <WaterBillIcon />,
    },
    {
      name: "Waste Levy",
      text: "Pay for your waste bills",
      icon: <WasteBillIcon />,
    },
    {
      name: "Project",
      text: "Contribute to on-going estate project",
      icon: <ViewMoreIcon />,
    },
  ];
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
      name: "Bills",
      component: <Bills {...props} bills={bills} />,
    },
    {
      key: 1,
      name: "History",
      component: <PaymentHistory {...props}/>,
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
        <div className="d-flex align-items-center gap-2 cursor-pointer"><BackArrowIcon/> <span> Payment</span></div>
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

export default Payment;
