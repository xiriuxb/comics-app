import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const NavAdmCharacter = ({ options }) => {
  const { url } = usePage();
  return (
    <nav className="capitalize rounded-md bg-tomato">
      <ul className="flex flex-row">
        {options.map((el) => {
          return (
            <li className="hover:bg-slate-800/20" key={el}>
              <InertiaLink
                className="px-2 py-1"
                href={`/${url.split("/")[1]}/${url.split("/")[2]}/${el}`}
              >
                {el}
              </InertiaLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavAdmCharacter;
