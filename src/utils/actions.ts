const getStatusColor = (status: string) => {
    switch (status) {
        case "NEW":
            return "bg-blue-100  text-blue-600 text-center";

        case "ON-GOING":
            return "bg-amber-100  text-amber-600 text-center";

        case "VALIDATED":
            return "bg-green-100  text-green-600 text-center";

        case "REJECTED":
            return "bg-red-100  text-red-600 text-center";

        default:
            return "";
            break;
    }
}

const getStatusLabel = (status: string) => {
    switch (status) {
        case "NEW":
            return "Nouveau";

        case "ON-GOING":
            return "En Cours";

        case "VALIDATED":
            return "Validé";

        case "REJECTED":
            return "Rejeté";

        default:
            return "";
            break;
    }
}
const STATUS = ["NEW", "ON-GOING", "VALIDATED", "REJECTED"];
export { getStatusColor, getStatusLabel, STATUS }