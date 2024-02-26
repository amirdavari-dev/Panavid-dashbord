import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
const ArrowVertical = () => {
    return (
        <div className="flex justify-center items-center gap-x-3 w-fit ">
            <button title="To previous page" className="hover:text-slate-800 animation-fade">
                <MdOutlineKeyboardArrowLeft size={20} />
            </button>
            <button title="To next page" className="hover:text-slate-800 animation-fade">
                <MdOutlineKeyboardArrowRight size={20} />
            </button>
        </div>
    )
}
export default ArrowVertical   