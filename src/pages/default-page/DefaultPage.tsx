import { useEffect } from "react"
import { redirect } from "react-router-dom"

function DefaultPage() {
    const goto = () => {
        return redirect("/private/declarations");
    }
    useEffect(() => {
        goto();
    }, []);
}

export default DefaultPage