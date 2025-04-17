import "../styles/InputField.css";

export default function InputField({ inputs }) {
  return (
    <div className="inputField">
      {inputs.map((input) => (
        <input
          key={input.key}
          id={input.placeholder}
          type={input.type}
          placeholder={input.placeholder}
          onChange={(e) => input.setFunction(e.target.value)}
          value={input.value}
        />
      ))}
    </div>
  );
}
