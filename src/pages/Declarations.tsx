import { formatDate, getStatusColor, getStatusLabel } from "../utils"
import { Declaration } from "@/types/Declaration";
import { useDeclarations } from "@/hook";

function Declarations() {
    const declarations = useDeclarations();
    return (
        <div className=" bg-white shadow-md rounded-md">
            <article className="grid grid-cols-12 items-center font-extrabold">
                <span className={`p-2 `}>Date</span>
                <span className={`p-2 col-span-2`}>Enfant</span>
                <span className={`p-2 `}>Date Naiss</span>
                <span className={`p-2 `}>Hopital</span>
                <span className={`p-2 col-span-2 text-center`}>Parent 1</span>
                <span className={`p-2 col-span-2`}>Parent 2</span>
                <span className={`p-2 text-center`}>Status</span>
                <span className={`p-2 col-span-2`}>ACTIONS</span>
            </article>
            {declarations.map((item: Declaration, index: number) => (
                <article key={item.id} className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center ${index % 2 === 0 ? 'bg-gray-100' : null}`}>
                    <span className={`p-2`}>{formatDate(item.registered)}</span>
                    <span className={`p-2 col-span-2 flex flex-col`}>
                        <span>{item.child.firstName}</span>
                        <span className="uppercase">{item.child.lastName}</span>
                    </span>
                    <span className={`p-2`}>{formatDate(item.child.birthDate)}</span>
                    <span className={`p-2 `}>
                        <span>{item.company.name}</span>
                    </span>
                    <span className={`p-2 col-span-2 flex flex-col text-center`}>
                        <span>{item.firstParent.firstName}</span>
                        <span className="uppercase">{item.firstParent.lastName}</span>
                    </span>
                    <span className={`p-2 col-span-2 flex flex-col`}>
                        <span>{item.secondParent.firstName}</span>
                        <span className="uppercase">{item.secondParent.lastName}</span>
                    </span>
                    <span className={`p-2 text-center ${getStatusColor(item.status)}`}>
                        {getStatusLabel(item.status)}
                    </span>
                    <span className={`p-2 col-span-2 flex flex-col`}>ACTIONS</span>
                </article>
            ))
            }
        </div >
    )
}

export default Declarations