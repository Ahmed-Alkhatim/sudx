'use client'
import { useState } from "react"

export default () => {
    const categories = [
        { id : 1, name : 'Programming'} , { id : 2, name : 'Design'}, { id : 3, name : 'Content writing'},
        { id : 4, name : 'AI'} , { id : 5, name : 'English Language'}
    ]

    const [selectedCateg, setSelectedCateg] = useState<number>(0)

    return(
        <div className={"flex overflow-scroll space-x-2 scrollbar-hide "} >
            <div className={"rounded-[12px] border border-gray-1 px-4 py-2 whitespace-nowrap " + (selectedCateg == 0 && 'bg-primary text-[#FFF]')} onClick={() => setSelectedCateg(0)} >
                All
            </div>
            { categories.map( (category) => <>
                <div key = {category.id} className={"rounded-[12px] border border-gray-1 px-4 py-2 whitespace-nowrap " + (selectedCateg == category.id && 'bg-primary text-[#FFF]')} onClick={() => setSelectedCateg(category.id)} >
                    { category.name }
                </div>
            </> )}
        </div>
    )
}