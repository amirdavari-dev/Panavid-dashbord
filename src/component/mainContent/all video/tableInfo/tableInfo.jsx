import Actions from "./actions"
import ID from "./id"
import InfoPlayerName from "./infoPlayerName"
import RowCount from "./rowCount"
import ShortCode from "./shortCode"

const TableInfo = () => {
    return (
        <table className="w-full text-left text-[7px] font-bold sm:font-normal text-slate-500 bg-white rounded-2xl sm:text-sm gap-2 mt-5 overflow-x-scroll table-auto">
            <thead className="my-2">
                <tr className="p-4">
                    <td scope="col" className="py-3 px-1">Row</td>
                    <td scope="col" className="py-3 px-1">Player name</td>
                    <td scope="col" className="py-3 px-1">Player ID</td>
                    <td scope="col" className="py-3 px-1">Shortcode</td>
                    <td scope="col" className="py-3 px-1">Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr className="border-table">
                    <td scope="row" className="py-2 px-1">
                        <RowCount />
                    </td>
                    <td className="py-2 px-1">
                        <InfoPlayerName />
                    </td>
                    <td className="py-2 px-1">
                        <ID />
                    </td>
                    <td className="py-2 px-1">
                        <ShortCode />
                    </td>
                    <td className="py-2 px-1">
                        <Actions />
                    </td>
                </tr>
                <tr className="border-table">
                    <td scope="row" className="py-2 px-1">
                        <RowCount />
                    </td>
                    <td className="py-2 px-1">
                        <InfoPlayerName />
                    </td>
                    <td className="py-2 px-1">
                        <ID />
                    </td>
                    <td className="py-2 px-1">
                        <ShortCode />
                    </td>
                    <td className="py-2 px-1">
                        <Actions />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default TableInfo