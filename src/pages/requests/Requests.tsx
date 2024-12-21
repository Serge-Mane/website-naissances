import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationContextProvider";
import { search } from "@/services"
import ActionsButton from "@/shared/ActionButton";
import PageFilter from "@/shared/PageFilter"
import StatusBadge from "@/shared/StatusBadge";
import { formatDate } from "@/utils";
import { useContext, useEffect } from "react";

function Requests() {
    const { state, updateTitle, setRequests, updateRequestStatus, filterRequests } = useContext(GlobalApplicationcontext);

    const { requests = [], requestFilter = "" } = state;
    const getRequests = async () => {
        if (!requests || !requests.length) {
            const data = await search("requests");
            setRequests({ requests: data });
        }
        updateTitle({ title: "Demandes" });
    };

    useEffect(() => {
        getRequests();
    }, []);
    return (
        <>
            <PageFilter
                btnLabel="Nouvelle demande"
                btnPath="/private/demandes/nouvelle-demande"
                inputPlaceHolder="rechercher une demande"
                action={filterRequests}
            />
            {requests && requests.length ? (
                <div>
                    {requests.
                        filter((item: any) => {
                            if (requestFilter && requestFilter.length) {
                                const {
                                    parent: { lastName, email },
                                    child: { lastName: childLastName },
                                } = item;
                                return (
                                    lastName.toLowerCase().includes(requestFilter) ||
                                    email.toLowerCase().includes(requestFilter) ||
                                    childLastName.toLowerCase().includes(requestFilter)
                                );
                            } else {
                                return item;
                            }
                        })
                        .map((item: any, index: number) => (
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
                                <ActionsButton classes="p-2 col-span-3" action={updateRequestStatus} id={`${item.id}`}>
                                </ActionsButton>
                            </article>
                        ))}
                </div>
            ) : null}
        </>
    );
}

export default Requests;