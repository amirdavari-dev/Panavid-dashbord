import { useRef, useState } from "react";
import styled from "./search.module.css"
import { IoSearch } from "react-icons/io5";

const Search = () => {
    const inputElem = useRef(null)
    const [searchValue, setSearchValue] = useState("")
    return (
        <div className="flex_item w-full h-full relative">
            <input title="Search in the input" onKeyUpCapture={(e) => {
                setSearchValue(e.target.value)
            }} ref={inputElem} type="search" autoComplete="off" placeholder="Search" className={`${styled} outline-none border-b border-slate-300 focus:border-lime-500 text-sm p-2 h-full w-full`} />
            <button className="text-slate-500 hover:text-lime-500 animation-fade absolute right-4" onClick={() => {
                searchValue === "" ? inputElem.current.focus() : console.log('searched', searchValue);
            }}><IoSearch size={19} /></button>
        </div>
    )
}
export default Search