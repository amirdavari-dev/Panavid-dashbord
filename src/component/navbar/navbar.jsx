import person from "./../../assets/person.webp"
import { HiMenuAlt4 } from "react-icons/hi";
import ModalBox from "./..//modallbox/modalbox";
import { useState } from "react";
import UserInfo from "../userInfo/userInfo";
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <ModalBox menu={menu} setMenu={setMenu} />
            <nav className={` lg:hidden bg-slate-800 text-white flex justify-between items-center p-3 mt-5 rounded-2xl`}>
                <div>
                    <button onClick={() => setMenu(true)} className="lg:hidden">
                        <HiMenuAlt4 size={30} />
                    </button>
                </div>
                <div className="flex_item">
                    <UserInfo mail={"devamirDavari@gmail.com"} imgSrc={person} />
                </div>
            </nav>
        </>
    )
}
export default Navbar