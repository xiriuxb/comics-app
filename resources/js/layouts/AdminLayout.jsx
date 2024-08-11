import AdminBarComponent from "../components/admin/AdminBarComponent";

export default function AdminLayout({ children }) {
  return (
    <section className="flex flex-col w-full max-w-screen-xl h-full overflow-hidden">
      <h1 className="font-bold text-xl h-10">Admin</h1>
      <div className="flex flex-1 flex-row h-[calc(100%-2.5rem)]">
        <AdminBarComponent />
        {children}
      </div>
    </section>
  );
}
