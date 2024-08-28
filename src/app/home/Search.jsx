'use client'
import { useState } from "react"

export default () => {

    const [value, setValue] = useState()

    return(
        <div className="relative">
            <input className="rounded-[12px] w-full h-[42px] border border-gray-1 px-[10px] py-[15px] " type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)}/>
            <svg className="absolute right-2 top-1/2 -mt-[7px] text-[12px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2694 9.3855L12.9461 12.0622L12.0622 12.9461L9.3855 10.2694C8.42306 11.0394 7.2025 11.5 5.875 11.5C2.77 11.5 0.25 8.98 0.25 5.875C0.25 2.77 2.77 0.25 5.875 0.25C8.98 0.25 11.5 2.77 11.5 5.875C11.5 7.2025 11.0394 8.42306 10.2694 9.3855Z" fill="#B1B1B1"/>
            </svg>
        </div>
    )
}