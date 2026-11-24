import { useState } from "react"


export default function UserForm({ onAddUser }) {

    const [nomForm, setNom] = useState("");
    const [ageForm, setAge] = useState("")

    const onclickSubmit = (e) => {
        //bloquer le rechargement de la page
        e.preventDefault();
        //lifting up (enfant -> parent)
        onAddUser({ prenom: nomForm, age: Number(ageForm) });
        setNom("");
        setAge("");
    }

    return (
        <div>
            <form onSubmit={onclickSubmit}>
                <label>Prenom:</label>
                <input type="text" value={nomForm} onChange={(e) => setNom(e.target.value)} />
                <label>Age:</label>
                <input type="number" value={ageForm} onChange={(e) => setAge(e.target.value)} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}