import { Outlet } from "react-router-dom"
import Nav from "@/componnents/nav/Nav";
import { useContext } from "react";
import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationContextProvider";

function PrivateLayout() {

    const {
        state: { title },
    } = useContext(GlobalApplicationcontext);

    return (
        <section className=" min-h-screen">
            <Nav />
            <main className="wrapper pl-64 pr-10">
                <header className="flex justify-between my-3 text-2xl font-bold">
                    <h3>{title}</h3>
                    <span>SAM</span>
                </header>
                <Outlet />
            </main>
        </section>
    );
}

export default PrivateLayout;