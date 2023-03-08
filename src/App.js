import axios from "axios";
import { useEffect, useState } from "react";
import Unauthenticated from "./pages/Unauthenticated";
import Authenticated from "./pages/Authenticated";
import SliderBtn from "./components/Badge/SliderBtn/SliderBtn";
function App() {
  const [estates, setEstates] = useState([]);
  const [currentEstate, setCurrentEstate] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [allPasses, setAllPasses] = useState([]);
  const [allGuests, setAllGuests] = useState([]);
  const [allUpdates, setAllUpdates] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartItemQty, setcartItemQty] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const allProps = {
    estates,
    currentEstate,
    setCurrentEstate,
    setEstates,
    userInfo,
    setUserInfo,
    allPasses,
    setAllPasses,
    allGuests,
    setAllGuests,
    allUpdates,
    setAllUpdates,
    cartItems,
    setcartItems,
    cartItemQty,
    setcartItemQty,
  };
  return (
    <>
      {!userInfo ? (
        <Unauthenticated {...allProps} />
      ) : (
        <Authenticated {...allProps} />
      )}

      {/* <SliderBtn/> */}
    </>
  );
}

export default App;
