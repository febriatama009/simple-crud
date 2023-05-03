import React from "react";
import Button from "../Button";

const ModalLayout = ({ open, onClose, children }) => {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-lg  bg-white text-gray-600"
        >
          <div>X Tutup</div>
        </Button>
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
