import React, { useEffect, useState } from "react";
import "../App.css";
import Row from "./Row";
const Table = ({ data, columns, setData }) => {

    const checkAndAddRow = () => {
        const lastRowIndex = data.length - 1
        const lastRow = data[lastRowIndex]
        const hasSubstantialInput = Object.values(lastRow || {}).some(value =>
            value && value.toString().length > 1
        )
        if (hasSubstantialInput && !data[lastRowIndex + 1]) {
            setData([...data, {
                no: lastRowIndex + 2,
                code: "",
                quantity: "",
                weight: "",
                price: "",
                unit: "",
                priceBeforeDis: "",
                Dis: "",
                net: ""
            }])
        } else if (data.length > 1 && !hasSubstantialInput) {
            const secondLastRow = data[lastRowIndex - 1]
            const hasInputInSecondLast = Object.values(secondLastRow || {}).some(value => value)

            if (!hasInputInSecondLast) {
                setData(data.slice(0, -1))
            }
        }
    }

    const [qunt, setQunt] = useState()
    const [weight, setWeight] = useState()
    const [dis, setDis] = useState()
    const [net, setNet] = useState()
    useEffect(() => {
        calculate()
        const debounceTimer = setTimeout(() => {
            checkAndAddRow()
        }, 300)

        return () => clearTimeout(debounceTimer)
    }, [data])

    const calculate = () => {
        const totalQuantity = data.reduce((acc, el) => acc + Number(el.quantity || 0), 0)
        const totalWeight = data.reduce((acc, el) => acc + Number(el.weight || 0), 0)
        const totalDis = data.reduce((acc, el) => acc + Number(el.priceBeforeDis || 0), 0)
        const totalNet = data.reduce((acc, el) => acc + Number(el.net || 0), 0)

        setQunt(totalQuantity)
        setWeight(totalWeight)
        setDis(totalDis)
        setNet(totalNet)
    }

    return (
        <div>
            <h1>รายการสินค้า</h1>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} className={index === 2 || index === 3 || index === 6 || index === 7 ? "line" : ""}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody style={{ borderBottom: "1px solid #bbb" }}>
                        {data.map((el, index) => (
                            <Row key={index} data={el} index={index} setData={setData} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><p>{qunt}</p></td>
                            <td><p>{weight}</p></td>
                            <td></td>
                            <td></td>
                            <td><p>{dis}</p></td>
                            <td></td>
                            <td><p>{net}</p></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Table;

