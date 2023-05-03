import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards";
import HapusProduct from "./modals/hapus/HapusProduct";
import TambahProduct from "./modals/tambah/TambahProduct";
import EditProduct from "./modals/edit/EditProduct";

function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3200/products");
    setProducts(response.data);
  };

  return (
    <Card>
      <Card.Title>
        <TambahProduct />
      </Card.Title>
      <Card.Body>
        <table className="table-auto">
          <thead>
            <tr className="">
              <th className="pr-24 pb-6">No</th>
              <th className="pr-24 pb-6">Nama Produk</th>
              <th className="pr-24 pb-6">Keterangan</th>
              <th className="pr-24 pb-6">Jumlah</th>
              <th className="pr-24 pb-6">Harga</th>
              <th className="pr-24 pb-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.nama_produk}</td>
                <td>{product.keterangan}</td>
                <td>{product.jumlah}</td>
                <td>Rp {product.harga}</td>
                <td className="space-x-2">
                  {/*  */}
                  {/* edit product */}
                  <EditProduct id={product.id} />

                  {/* delete product */}
                  <HapusProduct product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}

export default Table;
