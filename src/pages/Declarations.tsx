import DeclarationsItems from "@/componnents/declarations/DeclarationsItems";
import { useDeclarations } from "@/hook";
import Debug from "@/shared/Debug";
import PageFilter from "@/shared/PageFilter";

function Declarations() {
    const { filteredDeclarations, declarations, updateStatus, sortByStatus, sortByDate } = useDeclarations();
    return (
        <>
            <div>
                <>
                    <PageFilter
                        btnLabel="Nouvelle declaration"
                        btnPath="/private/declarations/nouvelle-declaration"
                        inputPlaceHolder="rechercher une declaration"
                    />
                </>
            </div>
            <div className=" bg-white shadow-md rounded-md">
                <DeclarationsItems
                    declarations={filteredDeclarations.length ? filteredDeclarations : declarations}
                    updateStatus={updateStatus}
                    sortByStatus={sortByStatus}
                    sortByDate={sortByDate}
                />
            </div >
            <Debug data={declarations} />
        </>
    )
}

export default Declarations