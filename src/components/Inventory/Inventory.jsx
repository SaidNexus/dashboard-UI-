import { useState, useEffect } from "react";
import axios from "axios";
import MobileProductsTable from "./MobileProductsTable";
import DeskTopView from "./DeskTopView";
import Scroll from "./Scroll";
import InventoryData from "./InventoryData";
import Filter from "./Filter";

const categories = [
  "Electronics",
  "Fashion",
  "Beauty",
  "Home",
  "Accessories",
  "Sports",
  "Gaming",
  "Kids",
  "Books",
  "Home Appliances",
  "Furniture",
  "Groceries",
  "Office",
];

const filterBtn = [
  { title: "All", value: "" },
  { title: "In-Stock", value: "in stock" },
  { title: "Low Stock", value: "low stock" },
  { title: "Out of Stock", value: "out of stock" },
];

export default function Inventory() {
  const [filterStock, setFilterStock] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const start = 8 * page;
  const end = (page + 1) * 8;

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SaidNexus/user.json/refs/heads/main/products.json"
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) => {
      if (category && category !== item.category) return false;
      if (filterStock && filterStock !== item.status) return false;
      return true;
    });
    setFilteredData(filtered);
    const totalPrice = filtered.reduce((sum, item) => sum + item.price, 0);
    const totalProducts = filtered.reduce((sum, item) => sum + item.stock, 0);
    setTotalProducts(totalProducts);
    setTotal(totalPrice);
    setPage(0);
  }, [total, products, category, filterStock]);

  useEffect(() => {
    setCurrentData(filteredData.slice(start, end));
  }, [filteredData, start, end]);

  const productData = [
    { title: "Total Products", value: totalProducts },
    {
      title: "Low Stock",
      value: filteredData.filter((item) => item.status === "low stock").length,
    },
    {
      title: "Out of Stock",
      value: filteredData.filter((item) => item.status === "out of stock")
        .length,
    },
    { title: "Total Inventory Price", value: total.toFixed(2) },
  ];

  return (
    <div className="p-4 sm:p-6 mt-6">
      {/*Filter*/}
      <Filter
        setCategory={setCategory}
        categories={categories}
        filterBtn={filterBtn}
        setFilterStock={setFilterStock}
        filterStock={filterStock}
      />
      {/*===Filter===*/}

      {/* Inventory Data */}
      <InventoryData productData={productData} />
      {/*=== Inventory Data ===*/}

      <div className="mt-12 bg-white/50 dark:bg-slate-900 shadow rounded-xl ">
        {/* DeskTopView */}
        <DeskTopView currentData={currentData} />
        {/*=== DeskTopView ===*/}

        {/* Mobile View */}
        <MobileProductsTable data={currentData} />
        {/*=== Mobile View ===*/}

        {/* Scroll */}
        <Scroll
          filteredData={filteredData}
          start={start}
          end={end}
          setPage={setPage}
          page={page}
        />
        {/*=== Scroll ===*/}
      </div>
    </div>
  );
}
