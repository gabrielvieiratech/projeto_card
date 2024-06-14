import React from "react";
import '../style.css';
import Card from "./Card";
import contacts from "../contacts";

const App = () => {
    return (
        <div>
            <h1 className="heading">Meus Contatos</h1>
            {contacts.map((contacts) => (
                <Card 
                    key={contacts.id}
                    name={contacts.name}
                    src={contacts.ImageUrl}
                    tel={contacts.Phone}
                    email={contacts.Email}
                />
            ))}
        </div>
    )
}

export default App;