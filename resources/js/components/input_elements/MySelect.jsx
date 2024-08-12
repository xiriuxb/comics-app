const MySelect = ({
  value,
  onChange,
  title,
  name,
  error,
  options,
  valueKey,
  nameKey,
}) => {

  if (typeof options != "object") {
    return <></>;
  }
  console.log(options)

  return (
    <div className="w-full">
      <select
        className="w-full p-1 rounded-md border border-black"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        title={title}
      >
        <option value={""} disabled>
          {title}
        </option>
        {
          options.map((option) => {
            if(typeof option == 'object') {
              return (
                <option key={option[valueKey]} value={option[valueKey] + ""}>
                  {option[nameKey]}
                </option>
              );
            }
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
      </select>
      {error && (
        <span className="text-xs w-full rounded-md px-1 bg-red-300 border border-red-700">
          {error}
        </span>
      )}
    </div>
  );
};

export default MySelect;
