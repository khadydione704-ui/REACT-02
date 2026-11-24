
import UserProfil from "./components/UserProfil";
import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {

  const [usersList, setUser] = useState([
    { id: 1, prenom: "Fatima Ba", age: 30, isOnline: true },
    { id: 2, prenom: "Adama Diallo", age: 29, isOnline: false },
    { id: 3, prenom: "Mouhamed Gueye", age: 20, isOnline: true },
    { id: 4, prenom: "Ramatoulaye Sy", age: 24, isOnline: false },
    { id: 5, prenom: "Moussa Faye", age: 35, isOnline: true }
  ]);

  // Etat du mode clair / sombre
  const [darkMode, setDarkMode] = useState(false);

  // Changer le statut de l'utilisateur
  const changeStatus = (idUser) => {
    const usersListM = usersList.map((u) =>
      u.id === idUser ? { ...u, isOnline: !u.isOnline } : u
    );
    setUser(usersListM);
  };

  // Ajouter un utilisateur
  const addUser = (newUser) => {
    let u = {
      id: usersList.length > 0
        ? Math.max(...usersList.map(user => user.id)) + 1
        : 1,
      prenom: newUser.prenom,
      age: newUser.age,
      isOnline: true
    };
    setUser([...usersList, u]);
  };

  // Supprimer un utilisateur
  function supprimerUser(id) {
    setUser(usersList.filter((user) => user.id !== id));
  }

  // Changer le thème
  const changerTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{
      padding: "10px",
      minHeight: "100vh",
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode ? "white" : "black"
    }}>

      <button onClick={changerTheme}>
        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
      </button>

      <h2 style={{ color: "black" }}>Ajouter un utilisateur</h2>
      <UserForm onAddUser={addUser} />
      <h2 style={{ color: "black" }}>Liste des utilisateurs</h2>

      <div style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
      }}>

        {usersList.map((u) => (
          <UserProfil
            key={u.id}
            prenom={u.prenom}
            age={u.age}
            isOnline={u.isOnline}
            onChangeStatus={() => changeStatus(u.id)}
            onDelete={() => supprimerUser(u.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
