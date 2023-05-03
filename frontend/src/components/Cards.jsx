import React from "react";

const Card = ({ children }) => {
  return (
    <div className="overflow-hidden bg-white shadow-md rounded-md">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className="p-4 border-b ">
      <h3 className="font-bold text-2xl content-center justify-between">
        {children}
      </h3>
    </div>
  );
};

const Body = ({ children }) => {
  return <div className="p-4 border-b table-auto">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="px-4 py-1">{children}</div>;
};

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
