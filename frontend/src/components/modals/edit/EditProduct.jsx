import axios from "axios";
import React, { useState, useEffect } from "react";
import ModalLayout from "../ModalLayout";
import Button from "../../Button";
import Input from "../../Input";

const EditProduct = (props) => {
  const [open, setOpen] = useState(false);

  const [nama_produk, setNamaProduk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");
  const { id } = props;

  useEffect(() => {
    getProductById();
  }, [id]);

  const updateProduct = async () => {
    try {
      await axios.patch(`http://localhost:3200/products/${id}`, {
        nama_produk,
        keterangan,
        jumlah,
        harga,
      });
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:3200/products/${id}`);
    if (response.data !== null) {
      setNamaProduk(response.data.nama_produk);
      setKeterangan(response.data.keterangan);
      setJumlah(response.data.jumlah);
      setHarga(response.data.harga);
    }
  };

  return (
    <>
      <Button
        className="bg-yellow-500 hover:bg-white hover:border-2 hover:border-yellow-500 hover:text-yellow-500"
        onClick={() => setOpen(true)}
      >
        Edit
      </Button>

      <ModalLayout open={open} onClose={() => setOpen(false)}>
        <form onSubmit={updateProduct}>
          <label className="text-base font-light">Nama Produk</label>
          <Input
            value={nama_produk}
            type="text"
            onChange={(e) => setNamaProduk(e.target.value)}
          />
          <label className="text-base font-light">Keterangan</label>
          <Input
            value={keterangan}
            type="text"
            onChange={(e) => setKeterangan(e.target.value)}
          />
          <label className="text-base font-light">Jumlah</label>
          <Input value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
          <label className="text-base font-light">Harga</label>
          <Input value={harga} onChange={(e) => setHarga(e.target.value)} />
          <Button type="submit">Update Data</Button>
        </form>
      </ModalLayout>
    </>
  );
};

export default EditProduct;
