
import InformationUpdate from "./informationsUpdate/informationUpdate"
import Options from "./options/optiojns"
import Search from "./search/search"
import UserInfo from "./userInfo/userInfo"

const UserNavbar = () => {
    return (
        <div className="grid grid-cols-12 grid-rows-2 sm:grid-rows-none grid-flow-col w-full p-2 rounded-2xl gap-x-2 sm:gap-x-0 drop-shadow-sm">
            <UserInfo />
            <div className="col-span-6 xs:col-span-7 sm:col-span-9 md:col-span-9 xl:col-span-10 px-1 gap-y-2 sm:gap-y-0 grid grid-cols-12 row-span-2 sm:row-span-1 sm:polygon-left xl:polygon-left-sm radius-left bg-white overflow-hidden">
                <div className="flex_item col-span-12 sm:col-span-4 md:col-span-4">
                    <Search />
                </div>
                <Options />
                <InformationUpdate />
            </div>
        </div>

    )
}
export default UserNavbar