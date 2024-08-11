import SpinnerComponent from "../shared/SpinnerComponent";

const MyInputButton = ({ title = "Save", loading }) => {
  return (
    <button className="py-2 rounded-lg bg-tomato hover:border" type="submit">
      {loading && <SpinnerComponent />}
      {!loading && <span>{title}</span>}
    </button>
  );
};

export default MyInputButton;