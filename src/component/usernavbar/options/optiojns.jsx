import { IoAlertCircleOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GoScreenFull } from "react-icons/go";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { LiaFlagUsaSolid } from "react-icons/lia";
const Options =()=>{
    return(
        <div className="flex_item p-1 col-span-12 sm:col-span-4 md:col-span-4 text-slate-500">
            <button className=" hover:text-slate-800 animation-fade relative">
                <IoAlertCircleOutline size={18} />
                <span className="absolute text-rose-500 top-0 right-0">
                <FaCircle size={7} />
                </span>
                </button>
            <button className="text-yellow-600 hover:text-yellow-700 animation-fade"><IoSunnyOutline size={18} /></button>
            <button className=" hover:text-slate-800 animation-fade relative">
                <HiOutlineBellAlert size={18} />
                <span className="absolute text-rose-500 top-0 right-0">
                <FaCircle size={7} />
                </span>
                </button>
            <button className="bg-slate-400 hover:bg-slate-300 hover:text-slate-800 animation-fade p-[1px] text-white rounded-md"><GoScreenFull size={18} /></button>
            <button className=" hover:text-slate-800 animation-fade"><FaArrowRightArrowLeft size={18} /></button>
            <button className="text-rose-500 hover:text-rose-800 animation-fade"><LiaFlagUsaSolid size={18} /></button>
        </div>
    )
}
export default Options