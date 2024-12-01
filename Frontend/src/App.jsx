import { useEffect, useState } from 'react'
import './App.css'
import TopInput from './components/TopInput'
import Table from './components/Table';
import SummaryTemplate from './components/SummaryTemplate';
import useUserStore from './store/userStore';

function App() {
  const topInputContent = [
    { name: "หมายเลขเอกสาร", acc: "docNo" },
    { name: "วันที่ออกเอกสาร", acc: "date" },
    { name: "วันที่ครบกำหนด", acc: "end" },
    { name: "ชื่อลูกค้า", acc: "customerName" },
    { name: "ที่อยู่ออกใบกำกับ", acc: "taxAddress" },
    { name: "ที่อยู่จัดส่ง", acc: "address" },
    { name: "หมายเลขเอกสารอ้างอิง", acc: "refNo" },
    { name: "Currency", acc: "currency" },
  ]
  const addTitle = useUserStore(state => state.addTitle)
  const addTable = useUserStore(state => state.addTable)
  const storeData = useUserStore(state => state.storeData)
  const tNote = useUserStore(state => state.tNote)
  const sNote = useUserStore(state => state.sNote)
  const [tableNote, setTableNote] = useState(tNote)
  const [sumNote, setSumNote] = useState(sNote)
  const [title, setTitle] = useState({
    docNo: useUserStore(state => state.title.docNo),
    date: useUserStore(state => state.title.date),
    end: useUserStore(state => state.title.end),
    customerName: useUserStore(state => state.title.customerName),
    taxAddress: useUserStore(state => state.title.taxAddress),
    address: useUserStore(state => state.title.address),
    refNo: useUserStore(state => state.title.refNo),
    currentcy: useUserStore(state => state.title.currentcy)
  })
  const columns = ["#", "รหัสสินค้า", "จำนวน", "น้ำหนัก", "ราคา/หน่วย", "หน่วย", "ราคาก่อนส่วนลด", "ส่วนลด", "ราคาสุทธิ"];
  const [data, setData] = useState(storeData)

  const hdlNote = (e) => {
    setTableNote(e.target.value)
  }
  const hdlSave = () => {
    addTitle(title)
    addTable(data, tableNote,sumNote)

  }

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <div className='grid-container' >
          {topInputContent.map((el,index) => <TopInput key={index} name={el.name} acc={el.acc} setTitle={setTitle} title={title} />)}
        </div>

        <div style={{ display: "flex", borderTop: "1px solid black" }} >
          <div>
            <Table columns={columns} data={data} setData={setData} />
            <div className="note-section" style={{ maxWidth: "1200px", margin: "40px" }}>
              <textarea
                onChange={hdlNote}
                placeholder="Note"
                style={{ paddingLeft: '15px', paddingTop: "15px" }}
                value={tableNote}
              />
            </div>
          </div>
          <div style={{ borderLeft: "1px solid black ," }}>
            <SummaryTemplate data={data} sumNote={sumNote} setSumNote={setSumNote} />
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "5px" }}>
        <button style={{ cursor: "pointer" }}>Cancle</button>
        <button onClick={hdlSave} style={{ cursor: "pointer" }} >Save</button>
      </div>
    </>
  )
}

export default App
