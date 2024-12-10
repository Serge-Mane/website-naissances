
function DeclarationEdit() {
    return (
        <article className=" bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
            <h1 className="mb-2 text-xl font-bold">Déclarer une naissance</h1>
            <form action="">
                <h3 className="border-b border-gray-900">Informations sur l'enfant</h3>

                <div className="form-field">
                    <label htmlFor="child-gender">Civilité</label>
                    <select id="child-gender">
                        <option value="">Sélectionner</option>
                        <option value="MR">Monsieur</option>
                        <option value="MS">Madame</option>
                        <option value="MRS">Mademoiselle</option>
                    </select>
                    <p className="text-red-600"></p>
                </div>

                <div className="form-field">
                    <label htmlFor="child-firstname">Prénom</label>
                    <input
                        type="text"
                        id="child-firstname"
                        placeholder="Prénom de l'enfant"
                    />
                    <p className="text-red-600"></p>
                </div>

                <div className="form-field">
                    <label htmlFor="child-lastName">Nom</label>
                    <input
                        type="text"
                        id="child-lastName"
                        placeholder="Nom de l'enfant"
                    />
                    <p className="text-red-600"></p>
                </div>

                <div className="form-field">
                    <label htmlFor="child-brithDate">
                        Date et heure de naissance
                    </label>
                    <div className="flex justify-between items-center gap-2">
                        <input
                            type="date"
                            id="child-brithDate"
                            placeholder="Date de naissance"
                        />
                        <input
                            type="time"
                            id="child-brithDate"
                            placeholder="Heure de naissance"

                        />
                    </div>
                    <p className="text-red-600"></p>
                </div>
                <button type="submit">Enregistrer</button>
            </form>
        </article>
    )
}

export default DeclarationEdit