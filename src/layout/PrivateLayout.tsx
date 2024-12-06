import { Outlet } from "react-router-dom"
import Nav from "../componnents/nav/Nav";

function PrivateLayout() {
    return (
        <section className="border-4 border-blue-700 min-h-screen">
            <Nav />
            <main className="wrapper pl-64 pr-10">
                <Outlet />
            </main>
        </section>
    );
}

export default PrivateLayout;