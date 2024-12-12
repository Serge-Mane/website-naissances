import { ApplicationContext } from "@/contexte/ApplicationContextProvider";
import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useContext, useEffect, useRef, useState } from "react";

function useDeclarations() {
    const { state, updateDeclaration, updateDeclarationStatus } = useContext(ApplicationContext)
    const filterRef = useRef<any>();
    const [statusOrder, setstatusOrder] = useState(1);
    const [dateOrder, setDateOrder] = useState(1);
    const [declarations, setDeclarations] = useState<Declaration[]>(state.declarations);
    const [filteredDeclarations, setFilteredDeclarations] = useState<Declaration[]>([]);

    /*
    const toUpdate: c pour dire qu'on doit retourner toutes les declarations tel que l'id qui est ici soit
    egal a l'id qui est dans le data.
    toUpdate: declarations a modiffier
    toKeep: declarations a ne pas modiffier
    en tout on recupere les donnees a modifier et celles qu'on ne doit pas modiffier et je met a jour mon tableau avec 
    les donnees mise a jour de notre element
    */
    const updateStatusWithoutContext = (data: { id: string, status: string }) => {
        const toUpdate = declarations.filter(({ id }: Declaration) => id === data.id)[0];
        const updated = { ...toUpdate, status: data.status };

        const toKeep = declarations.filter(({ id }: Declaration) => id !== data.id);
        setDeclarations([...toKeep, updated]);
    };

    const updateStatus = (data: { id: string, status: string }) => updateDeclarationStatus(data);

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

    const getDeclaration = async () => {
        const data = await search('declarations');
        setDeclarations(data);
        updateDeclaration(data);
    }

    useEffect(() => {
        getDeclaration();
    }, []);
    return { state, declarations, filterRef, sortByStatus, sortByDate, filteredDeclarations, filterDeclarations, updateStatus };

}
export { useDeclarations };