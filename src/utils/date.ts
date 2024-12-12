const monthOfYears = ["Jan.", "Fev.", "Mar.", "Avr.", "Mai.", "Jui.", "Juil.", "Aou.", "Sept.", "Oct.", "Nov.", "Dec."]

const formatDay = (day: number) => {
    return `0${day}`.slice(-2)
}
/**
 * c'est pour formater le date 
 */
const formatDate = (value: string) => {
    const date = new Date(value.split(" ")[0]);
    return `${formatDay(date.getDate())} ${monthOfYears[date.getMonth()]} ${date.getFullYear()}`

}
export { formatDate };
