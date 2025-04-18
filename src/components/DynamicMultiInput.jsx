function InputFields({
  data,
  index,
  setData,
  stateData,
  fieldNames,
  hasTextBox,
}) {
  function changeHandler(field, value) {
    const updated = {
      title: stateData.title,
      fieldNames: stateData.fieldNames,
      data: [...stateData.data],
    };
    updated.data[index][field] = value;
    setData(updated);
  }

  function deleteHandler() {
    const updated = {
      title: stateData.title,
      fieldNames: stateData.fieldNames,
      data: [...stateData.data],
    };
    updated.data.splice(index, 1);
    setData(updated);
  }

  return (
    <>
      <input
        type="text"
        value={data[fieldNames[0]]}
        placeholder={fieldNames[0]}
        onChange={(e) => changeHandler(fieldNames[0], e.target.value)}
      />
      <input
        type="text"
        value={data[fieldNames[1]]}
        placeholder={fieldNames[1]}
        onChange={(e) => changeHandler(fieldNames[1], e.target.value)}
      />
      {hasTextBox && (
        <textarea
          placeholder={fieldNames[2]}
          maxLength={500}
          value={data[fieldNames[2]]}
          onChange={(e) => changeHandler(fieldNames[2], e.target.value)}
        >
          {data[fieldNames[2]]}
        </textarea>
      )}
      <div className="dates">
        <input
          type="month"
          value={data.start}
          onChange={(e) => changeHandler("start", e.target.value)}
        />
        <input
          type="month"
          value={data.end}
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

export default function DynamicMultiInput({ data, setData, hasTextBox }) {
  return (
    <>
      {data.data.map((d, i) => {
        return (
          <InputFields
            data={d}
            index={i}
            key={i}
            setData={setData}
            stateData={data}
            fieldNames={data.fieldNames}
            hasTextBox={hasTextBox}
          />
        );
      })}
      <button
        onClick={() =>
          setData((prev) => ({
            title: prev.title,
            fieldNames: prev.fieldNames,
            data: [
              ...prev.data,
              {
                [data.fieldNames[0]]: "",
                [data.fieldNames[1]]: "",
                start: "",
                end: "",
              },
            ],
          }))
        }
      >
        Add {data.title}
      </button>
    </>
  );
}
