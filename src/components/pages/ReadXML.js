import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
function ReadXML() {
    let location = useLocation();
      let navigate = useNavigate();
      let {id} = useParams();
      console.log("test", id);
  return (
    <div className='home'>
      <h1>{id}</h1>
    </div>
  );
}

export default ReadXML;