import { useContext } from "react"
import UserNavbar from "../../component/usernavbar/usernavbar"
import { DashbordAPI } from "../../component/contextAPI/contextAPI"

const NewVideoPlayer = ()=>{
    const {menuCollect} = useContext(DashbordAPI)
    return(
        <div className={` ${menuCollect ? "lg:col-span-11" : "lg:col-span-10"} col-span-12`}>
            <UserNavbar />
        </div>
    )
}
export default NewVideoPlayer