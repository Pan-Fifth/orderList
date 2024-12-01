import React from 'react'

const Row = ({ data, index, setData }) => {
    const hdlOnChange = (e) => {
        const { name, value } = e.target
        setData(prv => {
            const newData = [...prv]
            const currentRow = newData[index]
    
            const newPriceBeforeDis = name === 'price' || name === 'quantity'
                ? Number(value) * (name === 'price' ? Number(currentRow?.quantity || 0) : Number(currentRow?.price || 0))
                : currentRow?.priceBeforeDis || 0
    
            const discountAmount = name === 'Dis' 
                ? (newPriceBeforeDis * Number(value)) / 100
                : (newPriceBeforeDis * Number(currentRow?.Dis || 0)) / 100
    
            const netPrice = newPriceBeforeDis - discountAmount
    
            newData[index] = {
                ...currentRow,
                [name]: value,
                priceBeforeDis: newPriceBeforeDis,
                net: netPrice !== 0 ? netPrice.toFixed(2) : ""
            }
            
            return newData
        })
    }
    
    

    return (
        <>
            <tr key={index} >
                <td>{index + 1}</td>
                <td><input type="text" name="code" value={data?.code || ''} onChange={hdlOnChange} /></td>
                <td className="line"><input type="number" name="quantity" value={data?.quantity || ''} onChange={hdlOnChange} /></td>
                <td className="line"><input type="number" name="weight" value={data?.weight || ''} onChange={hdlOnChange} /></td>
                <td><input type="number" name="price" value={data?.price || ''} onChange={hdlOnChange} /></td>
                <td><input type="text" name="unit" value={data?.unit || ''} onChange={hdlOnChange} /></td>
                <td className="line"><input type="number" name="priceBeforeDis" value={data?.priceBeforeDis || 0} readOnly  /></td>
                <td className="line"> <div style={{ display: 'flex', alignItems: 'center', gap:"2px" }}>
                    <input type="number" name="Dis" value={data?.Dis || ''} onChange={hdlOnChange} />
                    <span>%</span>
                </div></td>
                <td ><input type="number" name="net" value={data?.net || ""} onChange={hdlOnChange} readOnly  /></td>
            </tr>
        </>
    )
}

export default Row
