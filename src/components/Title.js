import React from "react";

const Title = ({ title, Icon }) => {
  return (
    <div className="w-full flex sm:gap-8 gap-4 items-center my-8 text-center justify-center">
      <Icon className="sm:w-6 sm:h-6 w-4 h-4" />
      <h2 className="sm:text-5xl font-bold">{title}</h2>
    </div>
  );
};

export default Title;
