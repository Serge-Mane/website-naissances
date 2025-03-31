import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationcontext";
import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useRef, useState } from "react";

function useDeclarations() {
    const { updateTitle, state: { token } } = useContext(GlobalApplicationcontext);
    const { data } = useQuery({
        queryKey: ['declarations'],
        queryFn: () => search({ path: "declarations", token }),
        retry: 2
    });

    const { state, updateDeclaration } = useContext(GlobalApplicationcontext)
    const filterRef = useRef<any>();
    const [statusOrder, setstatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
    const [declarations, setDeclarations] = useState<Declaration[]>(state.declarations);
    const [filteredDeclarations, setFilteredDeclarations] = useState<Declaration[]>([]);

    const sortByStatus = () => {
        const sortedDeclarations = declarations.sort((itemOne: Declaration, itemTwo: Declaration) => {
            const { status: itemOneStatus } = itemOne;
            const { status: itemTwoStatus } = itemTwo;
            let result = 0;
            if (itemOneStatus > itemTwoStatus) {
                result = 1;
            } else if (itemOneStatus < itemTwoStatus) {
                result = -1;
            }
            setstatusOrder(statusOrder * -1);
            return result * statusOrder;
        });
        setDeclarations([...sortedDeclarations]);
    }

    const sortByDate = () => {
        const sortedDeclarations = declarations.sort((itemOne: Declaration, itemTwo: Declaration) => {
            const { registered: itemOneDate } = itemOne;
            const { registered: itemTwoDate } = itemTwo;
            const jsDateOne = itemOneDate.split(" ")[0];
            const jsDateTwo = itemTwoDate.split(" ")[0];
            const result = new Date(jsDateOne).getTime() - new Date(jsDateTwo).getTime();
            setDateOrder(dateOrder * -1);
            return result * dateOrder;
        });

        setDeclarations([...sortedDeclarations]);
    }


    const filterDeclarations = () => {
        const filter = filterRef.current.value || "";
        if (filter.length >= 2) {
            const filteredDeclarations = declarations.filter(item => {
                const { child: { firstName, lastName } } = item;
                return (
                    firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
                    lastName.toLowerCase().includes(filter.toLowerCase()
                    ))
            });
            setFilteredDeclarations([...filteredDeclarations]);
        } else {
            setFilteredDeclarations([...declarations])
        }
    }
    useEffect(() => {
        updateTitle({ "title": "Declarations" });
        setDeclarations(data);
        updateDeclaration(data);
        //  getDeclaration();
    }, [data]);
    return {
        state, declarations, filterRef, sortByStatus, sortByDate,
        filteredDeclarations, filterDeclarations,
    };

}
export { useDeclarations };