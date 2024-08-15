const MyComboBox = ({
  name,
  label,
  options,
  valKey = "id",
  nameKey = "name",
  onChange,
  value,
  setId,
  error,
  disabled=false
}) => {
  const handleChange = (e) => {
    onChange(e);
    const p = options.find((opt) => opt.name == e.target.value);
    if (p && p.id) {
      setId(p.id);
    }
  };
  
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className="p-1 rounded-md border border-black"
        type="text"
        id={name}
        name={name}
        list={`${name}-option`}
        onChange={handleChange}
        autoComplete="false"
        disabled={disabled}
      ></input>
      <datalist id={`${name}-option`}>
        {options.map((opt) => {
          return <option key={opt[valKey]} value={opt[nameKey]}>{opt[nameKey]}</option>;
        })}
      </datalist>
      {error && (
        <span className="text-xs w-full rounded-md px-1 bg-red-300 border border-red-700">
          {error}
        </span>
      )}
    </div>
  );
};

export default MyComboBox;
