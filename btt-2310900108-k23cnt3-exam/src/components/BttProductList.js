import React from "react";

const BttProductList = ({ products }) => {
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.pid}>
                            <td>{product.pid}</td>
                            <td>{product.pName}</td>
                            <td>{product.pQuantity}</td>
                            <td>{product.pPrice} VND</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BttProductList;