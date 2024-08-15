import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";

const IssueView = ({options}) => {
  return (<></>)
}

IssueView.layout = (page) => (
    <HomeLayout>
        <AdminLayout children={page} options={page.props.options} title={page.props.title}/>
    </HomeLayout>
)
export default IssueView;