import { Modal } from "@mui/material"
import { IoClose } from "react-icons/io5";
import MenuItems from "../menuitems/menuItems";
import person from "./../../assets/person.webp"
import UserInfo from "../userInfo/userInfo";
const ModalBox = ({ menu, setMenu }) => {
    return (
        <Modal

            open={menu}
            onClose={() => setMenu(false)}
            className="flex flex-row lg:hidden "
            data-aos="fade-left"
        >
            <div data-aos="fade-right" className="bg-slate-800 text-white w-2/3 xs:w-1/2 sm:w-1/3 md:w-1/4 overflow-y-scroll">
                <div className=" m-2 text-end">
                    <button onClick={() => setMenu(false)} className="p-[2px] rounded-lg bg-white text-rose-700 hover:scale-75 animation-fade">
                        <IoClose size={20} />
                    </button>
                </div>
                <div className="flex_item flex-row-reverse px-4">
                    <UserInfo mail={"devamirdavari@gmail.com"} imgSrc={person} />
                </div>
                <div className="flex justify-center items-center text-[10px]">
                    <MenuItems mainStatus={false} />
                </div>
            </div>
        </Modal>
    )
}
export default ModalBox