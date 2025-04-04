import { Navigate, Outlet } from "react-router-dom"
import Nav from "@/componnents/nav/Nav";
import { useContext } from "react";
import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationcontext";
import Header from "@/shared/Header";

function PrivateLayout() {

    const {
        state: { token },
    } = useContext(GlobalApplicationcontext);

    return (
        <>
            {token ? (
                <section className=" min-h-screen">
                    <Nav />
                    <main className="wrapper pl-64 pr-10">
                        <Header />
                        <Outlet />
                    </main>
                </section>
            ) : (
                <Navigate to={"/connexion"} />
            )}
        </>

    );
}

export default PrivateLayout;