/**
 * c'est pour formater le date 
 */
const formatDate = (value: string) => {
    const date = new Date(value.split(" ")[0]);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

}
export { formatDate };
