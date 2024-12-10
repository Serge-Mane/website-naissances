import DeclarationsItems from "@/componnents/declarations/DeclarationsItems";
import { useDeclarations } from "@/hook";
import { Link } from "react-router-dom";

function Declarations() {
    const { declarations, sortByStatus, sortByDate } = useDeclarations();
    return (
        <>
            <div className=" bg-white shadow-md rounded-md mb-3 flex justify-between items-center px-3 py-3">
                <input type="text" id="rechercher" className="bg-gray-200 rounded-md px-3 py-2 w-96" placeholder="rechercher par nom" />
                <Link to={'/private/declarations/new'} className="bg-green-600 rounded-md text-white px-3 py-2">
                    Nouvelle Declaration
                </Link>
            </div >
            <div className=" bg-white shadow-md rounded-md">
                <DeclarationsItems
                    declarations={declarations}
                    sortByStatus={sortByStatus}
                    sortByDate={sortByDate} />
            </div >
        </>
    )
}

export default Declarations