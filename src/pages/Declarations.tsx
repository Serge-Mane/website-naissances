import DeclarationsItems from "@/componnents/declarations/DeclarationsItems";
import { useDeclarations } from "@/hook";

function Declarations() {
    const declarations = useDeclarations();
    return (
        <div className=" bg-white shadow-md rounded-md">
            <DeclarationsItems declarations={declarations} />
        </div >
    )
}

export default Declarations