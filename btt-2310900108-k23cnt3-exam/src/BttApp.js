import React, { useState } from "react";
import ProductList from "./components/BttProductList";
import ProductAdd from "./components/BttProductAdd";

const BttApp = () => {
    const [products, setProducts] = useState([
        { pid: 2310900108, pName: "Bùi Thành Trung", pQuantity: 10, pPrice: 10000 },
        { pid: 2, pName: "Sản phẩm B", pQuantity: 5, pPrice: 15000 },
        { pid: 3, pName: "Sản phẩm C", pQuantity: 8, pPrice: 20000 },
    ]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <ProductList products={products} />
            <ProductAdd onAddProduct={addProduct} />
        </div>
    );
};

export default BttApp;