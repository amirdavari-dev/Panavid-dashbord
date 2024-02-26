import { useContext } from "react"
import { DashbordAPI } from "../../component/contextAPI/contextAPI"
import UserNavbar from "../../component/usernavbar/usernavbar"

const Comments = () => {
    const {menuCollect} =useContext(DashbordAPI)
    return (
        <div className={` ${menuCollect ? "lg:col-span-11" : "lg:col-span-10"} col-span-12`}>
            <UserNavbar />
        </div>
    )
}
export default Comments