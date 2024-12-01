import React from "react";
import "../App.css";

const Table = ({ data, columns }) => {
    return (
        <div>
        <h1>รายการสินค้า</h1>
        <div className="table-container">
            <table className="custom-table" >
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className={index === 2 || index === 3 || index === 6 || index === 7 ? "line" : ""}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody style={{borderBottom:"1px solid #bbb"}}>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row.no}</td>
                            <td ><input type="text" name="code"/></td>
                            <td className="line" ><input type="text" name="quantity" /></td>
                            <td className="line"><input type="text" name="weight"  /></td>
                            <td><input type="text" name="price"  /></td>
                            <td  ><input type="text" name="unit"/></td>
                            <td className="line" ><input type="text" name="priceBeforeDis"  /></td>
                            <td className="line"><input type="text" name="Dis" /></td>
                            <td><input type="text" name="net"  /></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><p></p></td>
                        <td><p></p></td>
                        <td></td>
                        <td></td>
                        <td><p></p></td>
                        <td></td>
                        <td><p></p></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    );
};

export default Table;
