import AdminBarComponent from "../components/admin/AdminBarComponent";
import NavAdmCharacter from "../components/admin/NavAdmCharacter";

export default function AdminLayout({ children, title = 'Admin', options}) {
  return (
    <section className="flex flex-col w-full max-w-screen-xl h-full overflow-hidden">
      <h1 className="font-bold text-xl h-10">Admin</h1>
      <div className="flex flex-1 flex-row h-[calc(100%-2.5rem)]">
        <AdminBarComponent />
        <aside className="px-2 flex-1">
          <div className="h-[3.5rem] ">
            <h2 className="font-bold text-lg">{title}</h2>
            <NavAdmCharacter options={options} />
          </div>
          <div className="h-[calc(100%-3.5rem)] overflow-y-auto">
            {children}
          </div>
        </aside>
      </div>
    </section>
  );
}
