import "../styles/GeneratedCV.css";

function formatDate(date) {
  const _date = new Date(date);
  return _date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}

function Contact({ contact }) {
  const { name, email, phone } = contact;
  return (
    <>
      <h1 className="name heading">{name}</h1>
      <div className="contact">
        {email && <p>{email}</p>}
        {email && phone ? <p>|</p> : null}
        {phone && <p>{phone}</p>}
      </div>
    </>
  );
}

function AboutMe({ about }) {
  return (
    <>
      <h2 className="heading">About Me</h2>
      <hr />
      <p>{about}</p>
    </>
  );
}

function Education({ education }) {
  return (
    <>
      <h2 className="heading">Education</h2>
      <hr />
      {education.map((edu, i) => {
        return (
          <div className="education" key={i}>
            <p className="inst">{edu.institution}</p>
            <div className="dates">
              <p>{edu.start && formatDate(edu.start)}</p>
              {edu.start && edu.end ? " - " : ""}
              <p>{edu.end && formatDate(edu.end)}</p>
            </div>
            <p className="qual">{edu.qualification}</p>
          </div>
        );
      })}
    </>
  );
}

export default function GeneratedCV({ contact, about, education }) {
  return (
    <div className="gcv-page">
      {contact && <Contact contact={contact} />}
      {about && <AboutMe about={about} />}
      {education.length > 0 && <Education education={education} />}
    </div>
  );
}
