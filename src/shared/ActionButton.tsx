import { getStatusLabel, STATUS } from "@/utils";
import React from "react";

type Props = {
    id: string;
    classes: string;
    children?: React.ReactElement;
    action: (data: { id: string, status: string }) => void;
}

function ActionsButton({ id, classes, action }: Props) {
    return (
        <div className={`${classes}`} >
            <select onChange={(event: any) => {
                const status = event.target.value;
                action({ id: id, status });

            }}>
                <option>Selectionner</option>
                {STATUS.map((item: string) => (
                    <option value={item}>{getStatusLabel(item)}</option>
                )
                )}
            </select>

        </div>
    )
}

export default ActionsButton