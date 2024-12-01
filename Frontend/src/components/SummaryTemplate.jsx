import React, { useEffect, useState } from "react";
import "../App.css";

const SummaryTemplate = ({ data,sumNote,setSumNote }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [afterDis, setAfterDis] = useState(0)
    const [vat, setVat] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)
    useEffect(() => {
        summary()
    }, [data])

    const summary = () => {

        const sum = data.reduce((acc, el) => {
            return acc + Number(el.priceBeforeDis || 0)
        }, 0)
        const discountAmount = data.reduce((acc, el) => {
            return acc + Number((el.Dis*el.priceBeforeDis)/100 || 0)
        }, 0)
        const afterDiscountAmount = data.reduce((acc, el) => {
            return acc + Number(el.net || 0)
        }, 0)
        
        
        setTotalPrice(sum)
        setDiscount(discountAmount)
        setAfterDis(afterDiscountAmount)
        setVat((afterDiscountAmount * 7) / 100)
        setGrandTotal(afterDiscountAmount+((afterDiscountAmount * 7) / 100))
    }
    const hdlNote = (e) => {
        setSumNote(e.target.value)
      }
  
    return (
        <div>
            <h1 style={{ width: "100%" }}>สรุป</h1>
            <div className="summary-container">
                <div className="summary-item">
                    <label>ราคาสุทธิ</label>
                    <div className="showSum">
                        <p>{totalPrice}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="summary-item">
                    <label>ส่วนลดท้ายบิล</label>
                    <div className="showSum">
                        <p>{discount}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="summary-item">
                    <label>ราคาหลังหักส่วนลด</label>
                    <div className="showSum">
                        <p>{afterDis}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="summary-item">
                    <label>Vat</label>
                    <div className="showSum">
                        <p>{vat}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="grand-total" >
                    <span style={{ paddingLeft: "15px" }}>Grand Total</span>
                    <span style={{paddingRight:"15px"}}>{grandTotal.toFixed(2)} THB</span>
                </div>


                <div className="note-section">
                    <textarea
                        onChange={hdlNote}
                        placeholder="Note"
                        value={sumNote}
                        style={{ paddingLeft: '15px', paddingTop: "15px" }}
                    />
                </div>

            </div>
        </div>
    );
};

export default SummaryTemplate;

