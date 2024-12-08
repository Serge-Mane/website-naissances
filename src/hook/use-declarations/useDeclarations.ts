import { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations() {
    const [declarations, setDeclarations] = useState<Declaration[]>([]);
    const search = async () => {
        const response = await fetch("http://localhost:8080/declarations");
        const data = await response.json();
        setDeclarations(data);

    };

    useEffect(() => {
        search();
    }, []);
    return declarations;
}

export { useDeclarations }