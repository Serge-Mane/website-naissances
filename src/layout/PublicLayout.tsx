import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationcontext";
import Banner from "@/shared/Banner";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicLayout() {
    /**
     * reccuperation du token 
     */
    const {
        state: { token },
    } = useContext(GlobalApplicationcontext);

    /**si le token existe(il est connecté) puis on le redirrige vers declartion sinon Outlet c dire la meme action*/
    return (
        <>
            {token ? (
                <Navigate to={"/private/declarations"} />
            ) : (
                <section className=" min-h-screen grid md:grid-cols-2">
                    <Banner />
                    <Outlet />
                </section>
            )}
        </>
    );
}

export default PublicLayout