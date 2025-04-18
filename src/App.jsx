import DynamicMultiInput from "./components/DynamicMultiInput.jsx";
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

  const [education, setEducation] = useState({
    title: "Education",
    fieldNames: ["qualification", "institution"],
    data: [
      {
        qualification: "BSc International Business",
        institution: "Aurora International University",
        start: "2012-09",
        end: "2016-06",
      },
      {
        qualification: "MA Global Management",
        institution: "Horizon Global Business Academy",
        start: "2017-09",
        end: "2019-06",
      },
    ],
  });

  const [experience, setExperience] = useState({
    title: "Experience",
    fieldNames: ["role", "company", "description"],
    data: [
      {
        role: "Marketing Coordinator",
        company: "Lunar Marketing Solutions",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum!",
        start: "2020-07",
        end: "2022-11",
      },
      {
        role: "Content Manager",
        company: "Innovative Media Ltd.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fugiat non quaerat distinctio voluptatum neque optio ratione ducimus saepe rerum, assumenda quas mollitia est quasi nobis tenetur harum aut ipsum!.",
        start: "2022-12",
        end: "2023-03",
      },
    ],
  });

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
        <h3>About Me</h3>
        <textarea
          value={aboutMe}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="tell us about yourself"
          maxLength={500}
        />
        <hr />
        <DynamicMultiInput
          data={education}
          setData={setEducation}
          hasTextBox={false}
        />

        <DynamicMultiInput
          data={experience}
          setData={setExperience}
          hasTextBox={true}
        />
      </section>
      <GeneratedCV
        contact={{ name, email, phone }}
        about={aboutMe}
        education={education}
        experience={experience}
      />
    </div>
  );
}
