import SpinnerComponent from "../shared/SpinnerComponent";

const MyInputButton = ({ title = "Save", loading, disabled = false }) => {
  return (
    <button
      className="py-2 rounded-lg bg-tomato hover:border disabled:bg-tomato/40"
      type="submit"
      disabled={disabled}
    >
      {loading && <SpinnerComponent />}
      {!loading && <span>{title}</span>}
    </button>
  );
};

export default MyInputButton;
