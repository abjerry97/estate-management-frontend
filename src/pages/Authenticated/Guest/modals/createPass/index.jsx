import { Modal, Button, Tab, Tabs } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import CreateTaxiPassTab from "./Tabs/CreateTaxiPassTab";
import CreateDispatchPassTab from "./Tabs/CreateDispatchPassTab";
import CreateEventPassTab from "./Tabs/CreateEventPassTab";
import CreateGuestPassTab from "./Tabs/CreateGuestPassTab";
import PassCreationSuccess from "../PassCreationSuccess";

function CreatePass(props) {
  const navigate = useNavigate();
  const [activeTabName, setActiveTabName] = useState("taxi");
  const [creationSuccess, showCreationSuccess] = useState(false);
  const [passInfo, setpassInfo] = useState({});

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > 
      {!creationSuccess ? (
        <Tabs
          defaultActiveKey={activeTabName}
          id="uncontrolled-tab-example"
          className="mb-3 p-2"
          onSelect={(e) => setActiveTabName(e)}
        >
          <Tab eventKey="taxi" title="Taxi" className="p-4">
            <CreateTaxiPassTab
              onHide={props.onHide}
              onCreate={showCreationSuccess}
              setpassInfo={setpassInfo}
            />
          </Tab>
          <Tab eventKey="dispatch" title="Dispatch" className="p-4">
            <CreateDispatchPassTab
              onHide={props.onHide}
              setpassInfo={setpassInfo}
            />
          </Tab>
          <Tab eventKey="event" title="Event" className="p-3">
            <CreateEventPassTab
              onHide={props.onHide}
              setpassInfo={setpassInfo}
            />
          </Tab>
          <Tab eventKey="guest" title="Guest" className="p-3">
            {" "}
            <CreateGuestPassTab
              onHide={props.onHide}
              setpassInfo={setpassInfo}
            />
          </Tab>
        </Tabs>
      ) : (
        <PassCreationSuccess
          onHide={props.onHide}
          onCancel={showCreationSuccess}
          passInfo={passInfo}
          setpassInfo={setpassInfo}
          {...props}
        />
      )}

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default CreatePass;
