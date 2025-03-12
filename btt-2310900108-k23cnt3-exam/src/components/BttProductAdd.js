import React, { useState } from "react";

const BttProductAdd = ({ onAddProduct }) => {
    const [newProduct, setNewProduct] = useState({
        pid: "",
        pName: "",
        pQuantity: "",
        pPrice: "",
    });

    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProduct.pid && newProduct.pName && newProduct.pQuantity && newProduct.pPrice) {
            onAddProduct({
                ...newProduct,
                pid: parseInt(newProduct.pid),
                pQuantity: parseInt(newProduct.pQuantity),
                pPrice: parseFloat(newProduct.pPrice),
            });
            setNewProduct({ pid: "", pName: "", pQuantity: "", pPrice: "" });
        }
    };

    return (
        <div className="card p-3 mt-3">
            <h2 className="text-secondary">Thêm sản phẩm mới</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="pid"
                    placeholder="ID sản phẩm"
                    value={newProduct.pid}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="pName"
                    placeholder="Tên sản phẩm"
                    value={newProduct.pName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="pQuantity"
                    placeholder="Số lượng"
                    value={newProduct.pQuantity}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="pPrice"
                    placeholder="Giá"
                    value={newProduct.pPrice}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default BttProductAdd;