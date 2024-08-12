const MyInputDate = ({
  label = "date:",
  value,
  onChange,
  name,
  error,
  min = "1900-01-01",
  max = "2040-12-31"
}) => {
  return (
    <div className="flex flex-col w-full">
      <label className="capitalize flex flex-col">
        {label}
        <input
          className="rounded-md p-1"
          type="date"
          id={name}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
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

export default MyInputDate;
