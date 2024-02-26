import ArrowVertical from "./arrowVertical/arrowVertical"
import GoToPage from "./goToPage/goToPage"
import PageTitle from "./pageTitle/pageTitle"

const PaginationTable = () => {
    return (
        <div className="bg-white rounded-2xl text-sm text-slate-500 flex justify-between items-center py-2 px-1 my-2">
            <ArrowVertical />
            <PageTitle />
            <GoToPage />
        </div>
    )
}
export default PaginationTable