import { search } from "@/services"
import ActionsButton from "@/shared/ActionButton";
import PageFilter from "@/shared/PageFilter"
import StatusBadge from "@/shared/StatusBadge";
import { formatDate } from "@/utils";
import { useEffect, useState } from "react";

function Requests() {
    const [requests, setRequests] = useState([]);
    const getRequests = async () => {
        const data = await search("requests");
        setRequests(data);
    };

    useEffect(
        () => {
            getRequests();
        }, []
    );
    return (
        <>
            <PageFilter
                btnLabel="Nouvelle demande"
                btnPath="/private/demandes/nouvelle-demande"
                inputPlaceHolder="rechercher une demande"
            />
            <div>
                {requests.map((item: any, index: number) => (
                    <article
                        className={`grid grid-cols-12 border-t
                     border-gray-300 col-span-2 items-center ${index % 2 === 0 ?
                                'bg-gray-100' : null}`} key={item.id}>

                        <span className={`p-2 col-span-2 flex flex-col`}>
                            <span>{item.child.firstName}</span>
                            <span className="uppercase">{item.child.lastName}</span>
                        </span>
                        <span className={`p-2`}>
                            {formatDate(item.child.birthDate)}
                        </span>

                        <span className={`p-2 col-span-2 flex flex-col text-center`}>
                            <span>{item.parent.firstName}</span>
                            <span className="uppercase">{item.parent.lastName}</span>
                        </span>
                        <span className={`p-2 col-span-3 flex flex-col`}>
                            <span>{item.parent.email}</span>
                            <span >{item.parent.phone}</span>
                        </span>
                        <StatusBadge status={item.status || "NEW"} />
                        <ActionsButton classes="p-2 col-span-3" action={() => null} id={`${item.id}`}>
                        </ActionsButton>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Requests