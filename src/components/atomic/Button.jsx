import React from 'react'

export default function Button({margin, title, isColorFlipped, clickHandler}) {
  return (
    <div>
      <button onClick={clickHandler} className={"py-[6px] px-[12px] border border-[#611707] rounded-[5px] font-[600] font-['Poppins'] tracking-[1px] text-[15px] " + (isColorFlipped ? "bg-white text-[#611707]" : "bg-[#611707] text-white")} style={{margin: `${margin}`}}>{title}</button>
    </div>
  )
}
