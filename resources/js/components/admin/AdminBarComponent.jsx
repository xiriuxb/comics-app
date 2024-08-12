import { InertiaLink } from "@inertiajs/inertia-react";

const ADMIN_BASE_ROUTE = '/admin'

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
    path: `${ADMIN_BASE_ROUTE}/character`
  },
  {
    title: "serie",
   path: `${ADMIN_BASE_ROUTE}/serie`
  },
  {
    title: "issue",
    path: `${ADMIN_BASE_ROUTE}/issue`
  },
];
