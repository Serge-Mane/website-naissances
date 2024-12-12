
import { INITIAL_STATE, UPDATE_DECLARARTIONS, UPDATE_DECLARARTIONS_STATUS } from "@/utils";

function ApplicationReducer(state: any = INITIAL_STATE, action: any) {
    const { type, data } = action || {};

    switch (type) {
        case UPDATE_DECLARARTIONS:
            state = {
                ...state,
                declarations: data
            }

            break;
        case UPDATE_DECLARARTIONS_STATUS:
            const declarations = state.declarations;
            const { id: idToUpdate, status } = data;
            const filteredDeclaration = declarations.filter(({ id }: { id: string }) => id === idToUpdate);
            const declarationsToUpdate = filteredDeclaration[0];
            const declarationToKeep = declarations.filter(({ id }: { id: string }) => id !== idToUpdate);


            state = {
                ...state,
                declarations: [
                    ...declarationToKeep,
                    {
                        ...declarationsToUpdate,
                        status: status,
                    },
                ],
            };

            break;

    }

    return state

}
export { ApplicationReducer }