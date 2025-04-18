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

function Experience({ data }) {
  return (
    <>
      <h2 className="heading">{data.title}</h2>
      <hr />
      {data.data.map((d, i) => {
        return (
          <div className="experience" key={i}>
            <p className="inst">{d[data.fieldNames[1]]}</p>
            <div className="dates">
              <p>{d.start && formatDate(d.start)}</p>
              {d.start && d.end ? " - " : ""}
              <p>{d.end && formatDate(d.end)}</p>
            </div>
            <p className="qual">{d[data.fieldNames[0]]}</p>
            {d.description && <p className="description">{d.description}</p>}
          </div>
        );
      })}
    </>
  );
}

export default function GeneratedCV({ contact, about, education, experience }) {
  return (
    <div className="gcv-page">
      {contact && <Contact contact={contact} />}
      {about && <AboutMe about={about} />}
      {education.data.length > 0 && <Experience data={education} />}
      {experience.data.length > 0 && <Experience data={experience} />}
    </div>
  );
}
