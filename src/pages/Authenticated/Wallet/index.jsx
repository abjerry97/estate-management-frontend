import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AirtimeAndData from './AirtimeAndData';
import FundWallet from './FundWallet';
import Transfer from './Transfer';
import Utilities from './Utilities';
import ViewMore from './ViewMore';
import WalletHome from './WalletHome';

function Wallet(props) {
  return (
 <Routes>
 <Route path="/" element={<WalletHome {...props}/>}/> 
            <Route path="/fundwallet" element={<FundWallet {...props}/>}/> 
            <Route path="/transfer" element={<Transfer {...props}/>}/>  
            <Route path="/airtime-and-data" element={<AirtimeAndData {...props}/>}/> 
            <Route path="/utilities" element={<Utilities {...props}/>}/> 
            <Route path="/view-more" element={<ViewMore {...props}/>}/> 
 </Routes>
  );
}

export default Wallet;
