import GeneralInfo from "./components/GeneralInfo.jsx";
import GeneratedCV from "./components/GeneratedCV.jsx";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("j.doe@email.com");
  const [phone, setPhone] = useState("01234567890");

  return (
    <div className="app-container">
      <section className="sidebar">
        <h1 className="title">QuickCV</h1>
        <GeneralInfo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
        />
      </section>
      <GeneratedCV contact={{ name, email, phone }} />
    </div>
  );
}
