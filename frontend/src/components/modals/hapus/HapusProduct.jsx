import React, { useState } from "react";
import Button from "../../Button";
import ModalLayout from "../ModalLayout";
import axios from "axios";

const HapusProduct = ({ product }) => {
  const [open, setOpen] = useState(false);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3200/products/${id}`);
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        className="bg-red-600 border-red-600 text-red-600"
        onClick={() => setOpen(true)}
      >
        Hapus
      </Button>

      <ModalLayout open={open} onClose={() => setOpen(false)}>
        <p className="mt-12 mb-4">Anda yakin ingin menghapus data?</p>
        <Button onClick={() => deleteProduct(product.id)}>Hapus</Button>
      </ModalLayout>
    </>
  );
};

export default HapusProduct;
