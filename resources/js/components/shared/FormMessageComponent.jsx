import { InertiaLink } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

const spanStyle = (type) => {
  switch (type) {
    case "ERROR":
      return "border-red-700 bg-red-300";

    default:
      return "border-green-700 bg-green-300";
  }
};

const FormMessageComponent = ({ message, type = "SUCCESS", link={link:"", linkMsg:"Click Here"} }) => {
  const [style,  setStyle] = useState(spanStyle(type));
  useEffect(() => {
    setStyle(spanStyle(type));
  }, [type, message]);
  return (
    <span
      className={`${
        message ? "my-1 px-2 py-1" : "h-0 p-0 m-0 border-0"
      } rounded-sm text-sm w-full border transition-all ${style}`}
    >{message}{link.link && <InertiaLink className="underline" href={link.link}>Click Here</InertiaLink>}</span>
  );
};

export default FormMessageComponent;
