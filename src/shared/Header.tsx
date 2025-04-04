import { GlobalApplicationcontext } from "@/contexte/global/GlobalApplicationcontext";
import { search } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

function Header() {
    const {
        state: { title, token },
    } = useContext(GlobalApplicationcontext);

    const { data, isLoading } = useQuery({
        queryKey: ["use-profile"],
        queryFn: () => search({ path: "profiles/read", token }),
        retry: 2,
    })


    if (isLoading) {
        return (
            <header className="flex justify-between my-3 text-2xl font-bold">
                <h3>{title}</h3>
            </header>
        );
    }
    return (
        <header className="flex justify-between my-3 text-2xl font-bold">
            <h3>{title}</h3>
            <span>{data?.firstName}</span>
        </header>
    );
}

export default Header;