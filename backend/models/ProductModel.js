import { Sequelize } from "sequelize";
import database from "../configuration/Database.js";

const { DataTypes } = Sequelize;

const Product = database.define(
  "product",
  {
    nama_produk: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Product;

(async () => {
  await database.sync();
})();
