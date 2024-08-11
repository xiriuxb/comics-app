import { InertiaLink } from "@inertiajs/inertia-react";

const NavAdmCharacter = ({ options }) => {
  return (
    <nav className="capitalize rounded-md bg-tomato">
      <ul className="flex flex-row">
        {options.map((el) => {
          return (
            <li className="hover:bg-slate-800/20" key={el}>
              <InertiaLink className="px-2 py-1" href={`/admin/character/${el}`}>{el}</InertiaLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavAdmCharacter;
