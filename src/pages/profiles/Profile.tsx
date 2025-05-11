import PageFilter from "@/shared/PageFilter";

function Profile() {
    return (
        <>
            <PageFilter
                btnLabel="Nouvel profile"
                btnPath="/private/demandes/nouvel-profile"
                inputPlaceHolder="rechercher un profile"
            />
        </>
    )
}

export default Profile;