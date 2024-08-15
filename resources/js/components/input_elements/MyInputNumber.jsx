const MyInputNumber = ({label, name, value, onChange, required, error, disabled=false}) => {
  return (
    <div className="flex flex-col w-16">
      <label className="flex flex-col" htmlFor={name}>
        {label}
        <input
          className="p-1 border border-black rounded-md"
          type="number"
          name={name}
          id={name}
          value={value}
          required={required}
          max={"999"}
          maxLength={"4"}
          onChange={onChange}
          disabled={disabled}
          step={1}
        />
      </label>
      {error && (
        <span className="text-xs w-full rounded-md px-1 bg-red-300 border border-red-700">
          {error}
        </span>
      )}
    </div>
  );
};

export default MyInputNumber;