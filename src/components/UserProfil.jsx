export default function UserProfil({ prenom, age, isOnline, onChangeStatus, onDelete }) {
    return (
        <div style={{
            border: "3px solid grey",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px",
            width: "300px"
        }}
        >
            <h2  style={{color:"black"}}>Prenom : {prenom}</h2>
            <p>Age : {age}ans</p>
            <p>Statut : {isOnline ? "🟢En Ligne" : "🔴Hors Ligne"}</p>
            <button style={{
                padding: "10px",
                marginTop: "2px",
                borderRadius: "5px",
                border: "1px solid grey",
                backgroundColor: isOnline ? "#dc2626" : "#16a34a"
            }}
                onClick={onChangeStatus}
            >
                {isOnline ? "Deconnecter" : "Connecter"}</button>
                <p><button style={{
                padding: "10px",
                marginTop: "2px",
                borderRadius: "5px",
                border: "1px solid grey",
                backgroundColor: "gray"
            }}
            onClick={onDelete}
            >Supprimer</button>
            </p>
        </div>
    )
}

