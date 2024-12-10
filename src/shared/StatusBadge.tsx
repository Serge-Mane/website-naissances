import { getStatusColor, getStatusLabel } from "@/utils"

function StatusBadge({ status }: any) {
    return (
        <span className={`p-2 text-center ${getStatusColor(status)}`}>
            {getStatusLabel(status)}
        </span>
    )
}

export default StatusBadge