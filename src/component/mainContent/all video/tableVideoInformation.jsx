import { PiVideoBold } from "react-icons/pi";
import Search from "../../usernavbar/search/search";
import TableInfo from "./tableInfo/tableInfo";
import PaginationTable from "./paginationTable/paginationTable";
const TableVideoInformation = () => {
    return (
        <div className="container p-2 bg-slate-100 rounded-lg">
            {/* header */}
            <div className="flex justify-between items-center drop-shadow-sm">
                <div className="flex items-center justify-start gap-x-2 p-3 rounded-right">
                    <span className="text-slate-500">
                        <PiVideoBold size={20} />
                    </span>
                    <p className="text-slate-500 text-sm">

                        All Video Players
                    </p>
                </div>
                <div className="bg-lime-400 sm:polygon-left xl:polygon-left-sm rounded-[10px] overflow-hidden">
                    <Search />
                </div>
            </div>
            <div className="relative sm:px-2 ">
                <TableInfo />
            </div>
            {/* switch pages */}
                <PaginationTable />

        </div>
    )
}
export default TableVideoInformation