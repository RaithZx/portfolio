import React from "react";
import profilePicHat from "../images/profileHat.jpg";

const Card = () => {
  return (
    <div className="flex flex-start bg-white border-2 border-black">
      <div classname="w-1/5 ml-3">
        {/* <img
          width="200px"
          className="rounded-full border border-gray-100 shadow-sm"
          src={profilePicHat}
          alt=""
        /> */}
        <div class="relative w-24 h-24">
          <img
            class="rounded-full border border-gray-100 shadow-sm"
            src={profilePicHat}
            alt="user image"
          />
          <div class="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
        </div>
      </div>
      <div className="w-4/5 ml-8 mr-3">Contact me</div>
    </div>
  );
};

export default Card;
