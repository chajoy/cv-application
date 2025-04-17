import GeneratedCV from "./components/GeneratedCV.jsx";
import InputField from "./components/InputField.jsx";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("j.doe@email.com");
  const [phone, setPhone] = useState("01234567890");
  const [aboutMe, setAbout] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum!"
  );

  const inputs_generalInfo = [
    {
      key: 0,
      type: "text",
      placeholder: "name",
      setFunction: setName,
      value: name,
    },
    {
      key: 1,
      type: "email",
      placeholder: "email",
      setFunction: setEmail,
      value: email,
    },
    {
      key: 2,
      type: "phone",
      placeholder: "phone",
      setFunction: setPhone,
      value: phone,
    },
  ];

  return (
    <div className="app-container">
      <section className="sidebar">
        <h1 className="title">QuickCV</h1>
        <InputField inputs={inputs_generalInfo} />
        <hr />
        <textarea
          value={aboutMe}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="tell us about yourself"
          maxLength={500}
        />
      </section>
      <GeneratedCV contact={{ name, email, phone }} about={aboutMe} />
    </div>
  );
}
