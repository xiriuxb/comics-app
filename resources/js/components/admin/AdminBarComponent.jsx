import { InertiaLink } from "@inertiajs/inertia-react";

export default function AdminBarComponent() {
  return (
    <nav className="w-36 bg-tomato rounded-lg">
      <ul className="w-full flex flex-col">
        {adminNavLinks.map((navLink) => {
          return (
            <InertiaLink
              className="capitalize w-full p-2 hover:bg-slate-200/50"
              key={navLink.title}
              href={navLink.path}
            >
              {navLink.title}
            </InertiaLink>
          );
        })}
      </ul>
    </nav>
  );
}

const adminNavLinks = [
  {
    title: "character",
    path: "/admin/character",
  },
  {
    title:'issue',
    path:'/admin/issue'
  }
];
