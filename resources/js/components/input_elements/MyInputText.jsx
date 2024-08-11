const MyInputText = ({label, name, value, onChange, maxLength, required, error, disabled=false}) => {
  return (
    <div className="flex flex-col">
      <label className="flex flex-col" htmlFor={name}>
        {label}
        <input
          className="p-1 border border-black rounded-md"
          type="text"
          name={name}
          id={name}
          value={value}
          required={required}
          maxLength={maxLength}
          onChange={onChange}
          disabled={disabled}
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

export default MyInputText;