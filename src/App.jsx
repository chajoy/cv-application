import GeneratedCV from "./components/GeneratedCV.jsx";
import InputField from "./components/InputField.jsx";
import { useState } from "react";

function Education({ edu, index, setEducation, education }) {
  function changeHandler(field, value) {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  }

  function deleteHandler() {
    const updated = [...education];
    updated.splice(index, 1);
    setEducation(updated);
  }

  return (
    <>
      <input
        type="text"
        value={edu.qualification}
        placeholder="qualification"
        onChange={(e) => changeHandler("qualification", e.target.value)}
      />
      <input
        type="text"
        value={edu.institution}
        placeholder="institution"
        onChange={(e) => changeHandler("institution", e.target.value)}
      />
      <div className="dates">
        <input
          type="month"
          value={edu.start}
          onChange={(e) => changeHandler("start", e.target.value)}
        />
        <input
          type="month"
          value={edu.end}
          onChange={(e) => changeHandler("end", e.target.value)}
        />
        <button className="delete" onClick={() => deleteHandler()}>
          <img src="trash-fill.svg" alt="delete icon" />
        </button>
      </div>
      <hr />
    </>
  );
}

function EducationHandler({ education, setEducation }) {
  return (
    <>
      {education.map((edu, i) => {
        return (
          <Education
            edu={edu}
            index={i}
            key={i}
            setEducation={setEducation}
            education={education}
          />
        );
      })}
      <button
        onClick={() =>
          setEducation((prev) => [
            ...prev,
            {
              qualification: "",
              institution: "",
              start: "",
              end: "",
            },
          ])
        }
      >
        Add Education
      </button>
    </>
  );
}

export default function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("j.doe@email.com");
  const [phone, setPhone] = useState("01234567890");
  const [aboutMe, setAbout] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum!"
  );

  const [education, setEducation] = useState([
    {
      qualification: "Advanced Droid Engineering",
      institution: "Coruscant Technical Academy",
      start: "2010-08",
      end: "2014-05",
    },
    {
      qualification: "Elvish Linguistics BA",
      institution: "Rivendell Institute of Language and Lore",
      start: "2007-09",
      end: "2010-06",
    },
  ]);

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
        <hr />
        <EducationHandler education={education} setEducation={setEducation} />
      </section>
      <GeneratedCV
        contact={{ name, email, phone }}
        about={aboutMe}
        education={education}
      />
    </div>
  );
}
