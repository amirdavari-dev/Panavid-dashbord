import { Link } from "react-router-dom"
import { MdArrowForwardIos } from "react-icons/md";
const RoutePages = ({ routeName = null }) => {
    return (
        <div className="my-2 p-2">
            <ul className="flex justify-start items-center text-sm">
                <li>
                    <Link to="/" className="opacity-70 hover:opacity-100 animation-fade">Home</Link>
                </li>
                <li className="text-slate-600">
                    <MdArrowForwardIos />
                </li>
                {
                    routeName && (
                        <li>
                            <Link to={`/${routeName}`} className="capitalize font-semibold opacity-75">{routeName}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default RoutePages