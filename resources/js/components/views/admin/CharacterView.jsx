import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";
import NavAdmCharacter from "../../admin/NavAdmCharacter";

const AdminCharacterView = ({ children, options }) => {
  return (
    <aside className="px-2 flex-1">
      <div className="h-[3.5rem] ">
        <h2 className="font-bold text-lg">Character Admin</h2>
        <NavAdmCharacter options={options} />
      </div>
      <div className="h-[calc(100%-3.5rem)] overflow-y-auto">
        {children}
      </div>
    </aside>
  );
};

AdminCharacterView.layout = (page) => (
  <HomeLayout>
    <AdminLayout children={page} />
  </HomeLayout>
);
export default AdminCharacterView;
