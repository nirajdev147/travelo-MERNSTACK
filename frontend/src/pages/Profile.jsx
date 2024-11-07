import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import '../styles/profile.css';

const Profile = () => {
    const { user } = useContext(AuthContext);
  
    console.log(user);
  
    // const navigate = useNavigate();
  
    // const getUser = async () => {
    //   navigate("/updateProfile", { state: user });
    // };
  
    return (
      <>
       <div className="profile-container">
      <div className="profile-left">
        <div className="profile-image">
          <img
            src={`${user.photo}`}
            alt=""
          />
        </div>
      </div>
      <div className="profile-right">
        <h1 className="profile-title">My Profile</h1>
        <h3 className="profile-type">{user.role}</h3>
        <div className="profile-details">
          <div className="profile-detail">
            <h1 className="profile-label">Name:</h1>
            <p className="profile-value">{user.username}</p>
          </div>
          <div className="profile-detail">
            <h1 className="profile-label">Email:</h1>
            <p className="profile-value">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  };
  
  export default Profile;  