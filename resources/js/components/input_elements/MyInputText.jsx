const MyInputText = ({label, name, value, onChange, maxLength, required=false, error, disabled=false}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="flex flex-col" htmlFor={name}>
        {label}
        <input
          className="p-1 border-b-2 disabled:cursor-not-allowed border-orange-600 disabled:border-orange-400 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 bg-white/50 disabled:bg-white/20"
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