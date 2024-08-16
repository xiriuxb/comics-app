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
        className="p-1 border-b-2 border-orange-600 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 bg-white/50 disabled:bg-white/20"
        type="text"
        id={name}
        name={name}
        list={`${name}-option`}
        onChange={handleChange}
        autoComplete="off"
        role="combobox"
        placeholder="Search..."
        disabled={disabled}
      ></input>
      <datalist id={`${name}-option`} role="listbox">
        {options.map((opt) => {
          return <option style={{color:"red"}} key={opt[valKey]} value={opt[nameKey]}>{opt[nameKey]}</option>;
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
