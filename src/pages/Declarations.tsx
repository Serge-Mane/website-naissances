import DeclarationsItems from "@/componnents/declarations/DeclarationsItems";
import { useDeclarations } from "@/hook";

function Declarations() {
    const { declarations, sortByStatus } = useDeclarations();
    return (
        <div className=" bg-white shadow-md rounded-md">
            <DeclarationsItems declarations={declarations} sortByStatus={sortByStatus} />
        </div >
    )
}

export default Declarations