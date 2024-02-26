import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const GoToPage =()=>{
    return(
        <div className="w-fit flex_item">
            <p>
                Go to page: 1
            </p>
            <div className="flex_item">
                <button title="Go to next page" className="hover:text-slate-800 animation-fade"><IoIosArrowUp size={20} /></button>
                <button title="Go to previous page" className="hover:text-slate-800 animation-fade"><IoIosArrowDown size={20} /></button>
            </div>
        </div>
    )
}
export default GoToPage