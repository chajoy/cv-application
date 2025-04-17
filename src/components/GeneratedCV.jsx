import "../styles/GeneratedCV.css";

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

export default function GeneratedCV({ contact, about }) {
  return (
    <div className="gcv-page">
      <Contact contact={contact} />
      <AboutMe about={about} />
    </div>
  );
}
