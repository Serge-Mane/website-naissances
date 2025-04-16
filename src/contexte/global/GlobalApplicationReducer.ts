import { Requests } from "@/types/Request";
import { APPLICATION_STATE, APPLICATION_STATE_KEY, DELETE_TOKEN, FILTER_REQUESTS, INITIAL_STATE, LOGOUT, SET_REQUESTS, SET_REQUESTS_STATUS, SET_TOKEN, UPDATE_TITLE } from "@/utils"


/**
 * ici on a le traitement de toutes les methoes qui devrais etre dans le context c'est ca le reducer
 */
function GlobalApplicationReducer(state: any = APPLICATION_STATE, action: any) {
    const { type, data } = action;
    const sessionState = sessionStorage.getItem(APPLICATION_STATE_KEY);
    if (sessionState) {
        state = JSON.parse(sessionState);
    }
    switch (type) {
        case UPDATE_TITLE:
            state = { ...state, title: data.title };
            break;
        case SET_REQUESTS:
            state = { ...state, requests: data };
            break;
        case SET_REQUESTS_STATUS:
            const { requests } = state;
            const { id, status } = data;
            const requestsToUpdate: Requests = requests.filter(({ id: requestId }: any) => requestId === id)[0];
            const requestsToKeep: Requests[] = requests.filter(({ id: requestId }: any) => requestId !== id);
            const updateRequests = [...requestsToKeep, { ...requestsToUpdate, status: status }];
            state = { ...state, requests: updateRequests };
            break;
        case SET_TOKEN:
            state = { ...state, token: data.token };
            break;
        case DELETE_TOKEN:
            state = delete state.token;
            break;
        case FILTER_REQUESTS:
            state = { ...state, requestFilter: data };
            break;
        case LOGOUT:
            state = INITIAL_STATE;
            break;
    }
    sessionStorage.setItem(APPLICATION_STATE_KEY, JSON.stringify(state));
    return state;
}

export default GlobalApplicationReducer