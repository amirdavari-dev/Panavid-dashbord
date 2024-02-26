import { useContext } from "react"
import UserNavbar from "../../component/usernavbar/usernavbar"
import { DashbordAPI } from "../../component/contextAPI/contextAPI"
import RoutePages from "../../component/routePages/routePages"
import { useLocation } from "react-router"
import TableVideoInformation from "../../component/mainContent/all video/tableVideoInformation"

const AllVideo = () => {
    const {menuCollect}=useContext(DashbordAPI)
    const loc = useLocation().pathname.slice(1)
    return (
        <div className={` ${menuCollect ? "lg:col-span-11" : "lg:col-span-10"} col-span-12`}>
            <UserNavbar />     
            <RoutePages routeName={loc} />    
            <TableVideoInformation />   
        </div>
        
    )
}
export default AllVideo