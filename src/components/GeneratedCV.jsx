import "../styles/GeneratedCV.css";

export default function GeneratedCV({ contact }) {
  const { name, email, phone } = contact;

  return (
    <div className="gcv-page">
      <h1 className="gcv-name">{name}</h1>
      <div className="gcv-contact">
        <p>{email}</p>
        {email && phone ? <p>|</p> : null}
        <p>{phone}</p>
      </div>
    </div>
  );
}
