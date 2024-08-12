import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";

const AdminSerieView = ({ children, options }) => {
  return (
    <></>
  );
};

AdminSerieView.layout = (page) => (
  <HomeLayout>
    <AdminLayout children={page} options={page.props.options} title={page.props.title}/>
  </HomeLayout>
);
export default AdminSerieView;
