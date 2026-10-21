import { useState } from "react";
import "./App.css"; // External CSS import kar rahe hain

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAdd = () => {
    if (!name || !phone) {
      alert("Naam aur phone number dono likhna zaroori hai!");
      return;
    }
    setContacts([...contacts, { name, phone }]);
    setName("");
    setPhone("");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="app-container">
      <h2>📒 Simple Contact App</h2>

      {/* --- ADD CONTACT SECTION --- */}
      <div className="card">
        <h3>Add New Contact</h3>
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="input-field"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="btn-add" onClick={handleAdd}>
          Add Contact
        </button>
      </div>

      {/* --- SEARCH SECTION --- */}
      <div className="card">
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search by name..."
          className="input-field"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* --- SHOW CONTACTS SECTION --- */}
      <div className="card">
        <h3>Contact List</h3>
        {filteredContacts.length === 0 ? (
          <p className="empty-msg">Koi contact nahi mila.</p>
        ) : (
          <ul className="contact-list">
            {filteredContacts.map((contact, index) => (
              <li key={index} className="contact-item">
                <strong>{contact.name}</strong> <br /> {contact.phone}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
