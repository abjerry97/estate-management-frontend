import axios from "axios";
import React, { useEffect } from "react";

export default function Passes(props) {
  const { allGuests, setAllGuests } = props;
  // console.log(props)
  // useEffect(() => {
  //   axios
  //     .get("/guest/guests")
  //     .then(function (response) {
  //       setAllGuests(response.data.foundGuests);
  //       console.log("response1", response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <div className="m-0 p-0">
      <h5>Recent</h5>

      <hr />
      {(allGuests || []).map((currentGuest, currentGuestId) => {
        const date = new Date(currentGuest.createdOn);

        return <div className="emanager-card p-3 mt-2 d-flex justify-content-between">
          <div className="">
        <h5>  {currentGuest.name.value}</h5>
         {date.toISOString()}
          </div>
          <div className="">
          {currentGuest.pass.value}
          </div>
        </div>;
      })}
    </div>
  );
}
