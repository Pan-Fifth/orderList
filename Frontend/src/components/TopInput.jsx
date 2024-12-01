import React from 'react';
const TopInput = ({name,acc,title,setTitle}) => {
 
  const hdlOnChange = (e)=>{
    setTitle(prv=>({...prv,[e.target.name]:e.target.value}))
  }
  return (
      <>
        <input className='top-input' placeholder= {name} name = {acc} onChange={hdlOnChange} value={title[acc]}/>
      </>
  );
};

export default TopInput;