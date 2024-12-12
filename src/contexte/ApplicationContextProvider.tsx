import { Declaration } from "@/types/Declaration";
import React, { useReducer } from "react"
import { ApplicationReducer } from "./ApplicationReducer";
import { INITIAL_STATE, UPDATE_DECLARARTIONS, UPDATE_DECLARARTIONS_STATUS } from "@/utils";

type StateData = {
    declarations: Declaration[];
};
type Props = {
    state: StateData;
    updateDeclaration: (declarations: Declaration[]) => void;
    updateRequests?: (declarations: Declaration[]) => void;
    updateDeclarationStatus: ({ id, status }: { id: string, status: string }) => void;
};
//creation de context
export const ApplicationContext = React.createContext<Props>({} as Props);

function ApplicationContextProvider({ children }: any) {
    //const [state, setState] = useState<StateData>({ declarations: [] });
    const [state, dispatch] = useReducer(ApplicationReducer, INITIAL_STATE);
    const updateDeclaration = (declarations: Declaration[]) => {
        dispatch({ type: UPDATE_DECLARARTIONS, data: declarations })
    }

    const updateDeclarationStatus = ({ id, status }: { id: string, status: string }) => {
        dispatch({ type: UPDATE_DECLARARTIONS_STATUS, data: { id, status } })
    }

    return (
        //mise a disposition du context
        <ApplicationContext.Provider value={{ state, updateDeclaration, updateDeclarationStatus }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider