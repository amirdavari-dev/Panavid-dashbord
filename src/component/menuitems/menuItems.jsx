import { SiFsecure } from "react-icons/si";
import { FiLock } from "react-icons/fi";
import { SiVlcmediaplayer } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { DashbordAPI } from "../contextAPI/contextAPI";

const MenuItems = ({ mainStatus = true }) => {
    const { menuCollect, setMenuCollect } = useContext(DashbordAPI)
    return (
        <div className={` ${mainStatus ? "hidden lg:block" : "block lg:hidden"} w-fit 2xl:w-100 ${menuCollect ? "col-span-1" : "col-span-2"} col-span-1 animation-fade`}>
            <ul className={` bg-slate-800 rounded-2xl text-white py-10 flex flex-col gap-y-2 items-start relative px-1`}>
                {
                    mainStatus && <button onClick={() => setMenuCollect(curr => !curr)} className="bg-rose-700 p-1 hover:scale-110 animation-fade rounded-lg absolute right-[-4px] top-2">
                        {
                            menuCollect ? <MdOutlineKeyboardArrowRight size={20} /> : <MdOutlineKeyboardArrowLeft size={20} />
                        }
                    </button>
                }

                <li className="li_menuList">
                    <p className={` ${menuCollect && mainStatus && "hidden"} font-bold text-center text-lg`}>PANAVID</p>
                </li>

                <li className={`li_menuList flex items-center group ${!menuCollect && "px-2"} `}>
                    <Link className={`${!menuCollect && "bg-slate-600"}  rounded-3xl text-sm flex_item p-2 group-hover:bg-rose-700 group-hover:text-black animation-fade`} to="/new-video-player">
                        <span className={` ${menuCollect && mainStatus && "hidden"} text-[10px] lg:text-[12px]`}>
                            Add Video Player
                        </span>
                        <TiPlus className="bg-rose-700 text-black p-1 rounded-full group-hover:bg-slate-800 group-hover:text-rose-700 animation-fade" size={21} />

                    </Link>
                </li>


                <li className="li_menuList">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? "bg-rose-700 text-white flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]" : "flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]"

                        }}
                        to="/essentials"
                    >
                        <SiFsecure />
                        <span className={` ${menuCollect && mainStatus && "hidden"} `}>
                            Essentials
                        </span>
                    </NavLink>
                </li>
                <li className="li_menuList">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? "bg-rose-700 text-white flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]" : "flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]"
                        }}
                        to="controlled-access"
                    >
                        <FiLock />
                        <span className={` ${menuCollect && mainStatus && "hidden"} `}>
                            Controlled Access
                        </span>
                    </NavLink>
                </li>
                <li className="li_menuList">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? "bg-rose-700 text-white flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]" : "flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]"

                        }}
                        to="/media">
                        <SiVlcmediaplayer />
                        <span className={` ${menuCollect && mainStatus && "hidden"} `}>
                            Media
                        </span>
                    </NavLink>
                </li>
                <li className="li_menuList">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? "bg-rose-700 text-white flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]" : "flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]"

                        }}
                        to="/">
                        <RiMessage3Line />
                        <span className={` ${menuCollect && mainStatus && "hidden"} `}>
                            Comments
                        </span>
                    </NavLink>
                </li>

                <li className="li_menuList">
                    <NavLink
                        className={({ isActive }) => {
                            return isActive ? "bg-rose-700 text-white flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]" : "flex_item_menu p-2 rounded-l-xl rounded-tr-xl rounded-br-[40px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]"
                        }}
                        to="all-video"
                    >
                        <SiVlcmediaplayer />
                        <span className={` ${menuCollect && mainStatus && "hidden"} `}>
                            All video
                        </span>
                    </NavLink>
                </li>
                <li className={`li_menuList flex items-center group mt-20 ${!menuCollect && "px-2"} `}>
                    <Link className={`${!menuCollect && "bg-rose-700"}  rounded-3xl text-sm flex_item p-2 group-hover:text-black animation-fade`} to="/new-video-player">
                        <FaWordpress size={21} className="bg-slate-700 text-white rounded-full group-hover:bg-slate-800 group-hover:text-rose-700 animation-fade" />
                        <span className={` ${menuCollect && mainStatus && "hidden"} text-[10px] lg:text-[12px]`}>
                            Back to wordpress
                        </span>

                    </Link>
                </li>

            </ul>

        </div>

    )
}
export default MenuItems