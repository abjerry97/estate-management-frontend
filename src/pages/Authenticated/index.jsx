import React from 'react'
import { Route, Routes } from 'react-router'
import ApplyAsBusiness from './ApplyAsBusiness'
import ApplyAsServiceman from './ApplyAsServiceman'
import Commerce from './Commerce'
import DropASuggestion from './DropASuggestion'
import ManageFamilyMember from './EditProfile'
import EditProfile from './EditProfile'
import Guest from './Guest' 
import Home from './Home'
import Logout from './logout'
import Notice from './Notice'
import Payment from './Payment'
import RealEstates from './RealEstates'
import Servicemen from './Servicemen'  
import UploadAProperty from './UploadAProperty'
import Vote from './Vote' 
import Wallet from './Wallet'

function Authenticated(props) {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home {...props}/>}/>
          <Route path="/guest/*" element={<Guest {...props} />} />
          <Route path="/logout/*" element={<Logout/>} />
          <Route path="/vote/*" element={<Vote/>} />
          <Route path="/notice/*" element={<Notice/>} />
          <Route path="/commerce/*" element={<Commerce {...props}/>} />
          <Route path="/servicemen/*" element={<Servicemen {...props}/>} />
          <Route path="/realestates/*" element={<RealEstates {...props}/>} />
          <Route path="/wallet/*" element={<Wallet {...props}/>} />
          <Route path="/payment/*" element={<Payment {...props}/>} />
          <Route path="/edit-profile/*" element={<EditProfile {...props}/>} />
          <Route path="/manage-familymember/*" element={<ManageFamilyMember {...props}/>} />
          <Route path="/apply-as-business/*" element={<ApplyAsBusiness {...props}/>} />
          <Route path="/apply-as-serviceman/*" element={<ApplyAsServiceman {...props}/>} />
          <Route path="/upload-property/*" element={<UploadAProperty {...props}/>} />
          <Route path="/drop-suggestion/*" element={<DropASuggestion {...props}/>} />

          
      </Routes></>
  )
}

export default Authenticated