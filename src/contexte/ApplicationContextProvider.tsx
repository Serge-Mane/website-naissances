import { Declaration } from "@/types/Declaration";
import React, { useState } from "react"

type StateData = {
    declarations: Declaration[];
};
type Props = {
    state: StateData;
    updateDeclaration: (declarations: Declaration[]) => void;
    updateRequests?: (declarations: Declaration[]) => void;
};
//creation de context
export const ApplicationContext = React.createContext<Props>({} as Props);

function ApplicationContextProvider({ children }: any) {
    const [state, setState] = useState<StateData>({ declarations: [] });
    const updateDeclaration = (declarations: Declaration[]) => {
        setState((current) => ({ ...current, declarations }));
    }
    return (
        //mise a disposition du context
        <ApplicationContext.Provider value={{ state, updateDeclaration }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider