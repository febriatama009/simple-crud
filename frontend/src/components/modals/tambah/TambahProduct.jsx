import React, { useState } from "react";
import axios from "axios";
import Input from "../../Input";
import Button from "../../Button";
import ModalLayout from "../ModalLayout";

const TambahProduct = () => {
  const [open, setOpen] = useState(false);

  const [nama_produk, setNamaProduk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");

  const saveProduct = async (e) => {
    try {
      await axios.post("http://localhost:3200/products", {
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

  return (
    <>
      <Button
        className="hover:bg-white hover:border-2 hover:border-green-500 hover:text-green-500 bg-green-500"
        onClick={() => setOpen(true)}
      >
        + Tambah Data
      </Button>

      <ModalLayout open={open} onClose={() => setOpen(false)}>
        <form onSubmit={saveProduct}>
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
          <Button type="submit">Tambah Data </Button>
        </form>
      </ModalLayout>
    </>
  );
};

export default TambahProduct;
