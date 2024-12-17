import PageFilter from "@/shared/PageFilter"

function Requests() {
    return (
        <>
            <PageFilter
                btnLabel="Nouvelle demande"
                btnPath="/private/demandes/nouvelle-demande"
                inputPlaceHolder="rechercher une demande"
            />
        </>
    )
}

export default Requests