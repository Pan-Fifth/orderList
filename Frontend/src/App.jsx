import { useState } from 'react'
import './App.css'
import TopInput from './components/TopInput'
import Table from './components/Table';
import SummaryTemplate from './components/SummaryTemplate';

function App() {
  const topInputContent = ["หมายเลขเอกสาร", "วันที่ออกเอกสาร", "วันที่ครบกำหนด", "ชื่อลูกค้า", "ที่อยู่ออกใบกำกับ", "ที่อยู่จัดส่ง", "หมายเลขเอกสารอ้างอิง", "Currency"]

  const columns = ["#","รหัสสินค้า","จำนวน","น้ำหนัก", "ราคา/หน่วย","หน่วย", "ราคาก่อนส่วนลด", "ส่วนลด","ราคาสุทธิ"];

  const [data, setData] = useState(
    Array(5).fill().map((el, index) => ({
      no: index + 1,
      code: "",
      quantity: "",
      weight: "",
      price: "",
      unit: "",
      priceBeforeDis: "",
      Dis: "",
      net: ""
    })))

    console.log(data)
  return (
    <>
    <div style={{border:"1px solid black"}}>
      <div className='grid-container' >
        {topInputContent.map((name) => <TopInput name={name} />)}
      </div>

      <div style={{display:"flex" , borderTop:"1px solid black"}} >
      <div>
        <Table columns={columns} data={data} />
        <div className="note-section" style={{maxWidth:"1200px", margin:"10px"}}>
        <textarea
          placeholder="Note"
        />
      </div>
      </div>
      <div style={{borderLeft:"1px solid black ,"}}>
        <SummaryTemplate/>
      </div>
      </div>
    </div>
    <div style={{width:"100%",display:"flex", justifyContent:"flex-end", gap:"5px"}}>
    <button >Cancle</button>
    <button>Save</button>
    </div>
    </>
  )
}

export default App
