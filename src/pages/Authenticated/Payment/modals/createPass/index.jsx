import { Modal, Tab, Tabs } from "react-bootstrap";
import React, { useState } from "react"; 
import PassCreationSuccess from "../PassCreationSuccess";
import MakeBillPayment from "./Tabs/MakeBillPayment";

function PayBills(props) {
  const { bills } = props; 
  const [activeTabName, setActiveTabName] = useState(bills[0].name);
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
          {bills.map((currentBill, index) => {
            return (
              <Tab
                eventKey={currentBill.name}
                title={currentBill.name}
                className="p-4"
                key={index}
              >
                <MakeBillPayment
                currentBill={currentBill}
                  onHide={props.onHide}
                  onCreate={showCreationSuccess}
                  setpassInfo={setpassInfo}
                />
              </Tab>
            );
          })}
        </Tabs>
      ) : (
        <PassCreationSuccess
          onHide={props.onHide}
          onCancel={showCreationSuccess}
          passInfo={passInfo}
          setpassInfo={setpassInfo}
        />
      )}

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default PayBills;
