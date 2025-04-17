import "../styles/GeneralInfo.css";

export default function GeneralInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
  );
}
