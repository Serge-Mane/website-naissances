import { useRef } from "react";
import { Link } from "react-router-dom"

type Props = {
    btnLabel: string;
    btnPath: string;
    inputPlaceHolder: string;
    action?: (value: any) => void;
};

function PageFilter({ btnLabel, inputPlaceHolder, btnPath, action = () => null }: Props) {
    const filterRef = useRef<any>();
    const handleChange = () => {
        const value = filterRef.current.value;
        action(value);
    }
    return (
        <>
            <div className=" bg-white shadow-md rounded-md mb-3 flex justify-between items-center px-3 py-3">
                <input type="text" id="rechercher"
                    className="bg-gray-200 rounded-md px-3 py-2 !w-96"
                    placeholder={inputPlaceHolder}
                    ref={filterRef}
                    onKeyUp={handleChange} />

                <Link to={btnPath} className="bg-green-600 rounded-md text-white px-3 py-2">
                    {btnLabel}
                </Link>
            </div >
        </>
    )
}

export default PageFilter