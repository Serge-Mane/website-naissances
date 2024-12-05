import { Outlet } from "react-router-dom"

function PrivateLayout() {
    return (
        <section className="border border-blue-200">
            PrivateLayout
            <Outlet />
        </section>
    );
}

export default PrivateLayout;