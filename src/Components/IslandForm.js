import { useState } from "react";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const bookIsland = () => {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${name}, phone: ${phone}`
    );
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        placeholder="Type Full Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="tel"
        placeholder="Type Phone Number"
        onChange={(event) => setPhone(event.target.value)}
      />
      <button className="book" onClick={bookIsland}>
        Book for today!
      </button>
    </div>
  );
}
