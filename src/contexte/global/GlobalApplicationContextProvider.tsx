import { Declaration } from "@/types/Declaration";
import { Requests } from "@/types/Request";
import { createContext, useReducer } from "react";
import GlobalApplicationReducer from "./GlobalApplicationReducer";
import { APPLICATION_STATE, FILTER_REQUESTS, SET_REQUESTS, SET_REQUESTS_STATUS, UPDATE_TITLE } from "@/utils";

//Les proprietes de mon state(etat)
type StateProps = {
  title: string;
  requestFilter?: string;
  token?: string;
  requests: Requests[];
  declarations: Declaration[];
}
//Les proprietes qu'on doit definir dans notre application
type Props = {
  state: StateProps;//l'etat global de notre application qui veut dire le state contient le StateProps
  updateTitle: (data: any) => void;
  setRequests: (data: any) => void;
  updateRequestStatus: (data: any) => void;
  filterRequests: (data: any) => void;
};

//creation du context global de notre application
export const GlobalApplicationcontext = createContext<Props>({} as Props);

function GlobalApplicationcontextProvider({ children }: any) {
  /*pour manipuler l'etat global de notre application avec un titre par defaut
  et dire que par defaut le demandes et les declarations sont vides*
  const [state, setState] = useState<StateProps>({ title: "Titre par defaut", requests: [], declarations: [], });*/

  /*mettre a jour les titres de nos pages
  const newState={...state,title:data.title}: je reccuper tout ce qui est dans le state et je rajoute le nouveau title */
  const [state, dispatch] = useReducer(GlobalApplicationReducer, APPLICATION_STATE);

  const updateTitle = (data: any) => {
    dispatch({ type: UPDATE_TITLE, data });
  };

  /*mettre a jour les titres de nos pages
  const newState={...state,title:data.title}: je reccuper tout ce qui est dans le state et je rajoute les nouvelles demandes */
  const setRequests = ({ requests }: StateProps) => {
    dispatch({ type: SET_REQUESTS, data: requests });
  };

  /**ici on a diviser nos requests qui sont dans l'etat en deux celles qu'on doit modifffier
   *  et celles qu'on ne doit pas toucher 
   * [0] pour dire qu'on prend le premier du tableau*/
  const updateRequestStatus = (data: any) => {
    dispatch({ type: SET_REQUESTS_STATUS, data });

    /**
     * ici pour dire que la nouvelle demande va prendre celles qu'on ne doit pas toucher plus l'objet qu'on doit 
     * modiffier le status 
     */
  };
  const filterRequests = (data: any) => {
    dispatch({ type: FILTER_REQUESTS, data });
  };

  return (
    /*Mise a disposition du context c-a-d comme une blise et 
    recevoir en valeur le state,la methode pour modiffier le titre*/
    <GlobalApplicationcontext.Provider value={{ state, setRequests, filterRequests, updateTitle, updateRequestStatus }}>
      {children}
    </GlobalApplicationcontext.Provider>
  )
}

export default GlobalApplicationcontextProvider