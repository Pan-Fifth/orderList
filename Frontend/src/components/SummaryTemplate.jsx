import React, { useState } from "react";
import "../App.css";

const SummaryTemplate = () => {
    const [values, setValues] = useState({
        netPrice: 0,
        discount: 0,
        priceAfterDiscount: 0,
        vat: 0,
        grandTotal: 0,
        note: "",
    });

    return (
        <div>
            <h1 style={{ width: "100%" }}>สรุป</h1>
            <div className="summary-container">
                <div className="summary-item">
                    <label>ราคาสุทธิ</label>
                    <div className="showSum">
                        <p>{values.netPrice}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="summary-item">
                    <label>ส่วนลดท้ายบิล</label>
                    <div className="showSum">
                        <p>{values.discount}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="summary-item">
                    <label>ราคาหลังหักส่วนลด</label>
                    <div className="showSum">
                        <p>{values.priceAfterDiscount}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="summary-item">
                    <label>Vat</label>
                    <div className="showSum">
                        <p>{values.vat}</p>
                        <span>THB</span>
                    </div>
                </div>

                <div className="grand-total">
                    <span>Grand Total</span>
                    <span>{values.grandTotal.toFixed(2)} THB</span>
                </div>

                <div className="note-section">

                    <p>{values.note}</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryTemplate;

