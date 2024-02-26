import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
const Actions = () => {
    return (
        <div className="flex_item w-fit">
            <button className="hover:text-slate-800 animation-fade text-indigo-500 opacity-70">
            <AiFillEdit size={20} />
            </button>
            <button className="text-rose-700 hover:text-rose-900 opacity-70 animation-fade">
                <MdDeleteOutline size={20} />
            </button>
        </div>
    )
}
export default Actions