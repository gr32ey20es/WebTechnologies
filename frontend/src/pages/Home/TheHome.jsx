import React, { useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";


const TheHome = () => {

  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser)
  }, []);
  return (
   <div className="home">
        Xin chào {currentUser?.UserName}
   </div>
  );
};

export default TheHome;
