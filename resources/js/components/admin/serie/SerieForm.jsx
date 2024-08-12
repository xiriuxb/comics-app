import { useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";
import FormMessageComponent from "../../shared/FormMessageComponent";
import MyInputText from "../../input_elements/MyInputText";
import MyInputButton from "../../input_elements/MyInputButton";
import MyInputDate from "../../input_elements/MyInputDate";
import axios from "axios";
import MySelect from "../../input_elements/MySelect";

const serieFormInitialValues = {
  editorial_id: "",
  code: "",
  name: "",
  start_date: null,
  end_date: null,
  status: "",
  description: null,
};

const AdminSerieForm = ({
  options,
  formInitialValues = serieFormInitialValues,
  editorials,
  statuses,
}) => {
  const [formValues, setFormValues] = useState({ ...formInitialValues });
  const [serverErrors, setServerErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChangeName = (e) => {
    setFormValues({
      ...formValues,
      name: e.target.value,
      code: e.target.value.toLowerCase().replace(/ /g, "_"),
    });
  };

  const handleEditorialSelect = (e) => {
    setFormValues({ ...formValues, editorial_id: e.target.value });
  };

  const handleStatusSelect = (e) => {
    setFormValues({ ...formValues, status: e.target.value });
  };

  const handleStartDate = (e) => {
    setFormValues({ ...formValues, start_date: e.target.value });
  };

  const handleEndDate = (e) => {
    setFormValues({ ...formValues, end_date: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerErrors({});
    setLoading(true);
    setSuccessMsg("");
    try {
      await axios.post("/api/series", formValues);
      setSuccessMsg("Character created successfully");
      setFormValues(formInitialValues);
    } catch (error) {
      setServerErrors(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-y-2 max-w-lg" onSubmit={handleSubmit}>
      <h3 className="font-bold">Create</h3>
      <FormMessageComponent message={successMsg} />
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <MySelect
          name="serie_editorial"
          value={formValues.editorial_id}
          onChange={handleEditorialSelect}
          error={serverErrors.editorial_id}
          title="Select Editorial"
          options={editorials}
          valueKey={"id"}
          nameKey={"name"}
        />
        <MySelect
          name="serie_status"
          value={formValues.status}
          onChange={handleStatusSelect}
          error={serverErrors.status}
          title="Select Status"
          options={statuses}
        />
      </div>
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <MyInputText
          name={"serie_name"}
          label={"Name:"}
          error={serverErrors.name}
          maxLength={32}
          required={true}
          onChange={handleChangeName}
          value={formValues.name}
        />
        <MyInputText
          label={"Code:"}
          name={"serie_code"}
          error={serverErrors.code}
          maxLength={32}
          required={true}
          value={formValues.code}
          disabled={true}
        />
      </div>
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <MyInputDate
          name={"serie_start"}
          value={formValues.start_date}
          label="Start Date:"
          error={serverErrors.start_date}
          onChange={handleStartDate}
          max={formValues.end_date ? formValues.end_date : undefined}
        />
        <MyInputDate
          name={"serie_end"}
          value={formValues.end_date}
          label="End Date:"
          error={serverErrors.end_date}
          onChange={handleEndDate}
          min={formValues.start_date ? formValues.start_date : undefined}
        />
      </div>
      <MyInputButton loading={loading} />
    </form>
  );
};

AdminSerieForm.layout = (page) => (
  <HomeLayout>
    <AdminLayout
      children={page}
      options={page.props.options}
      title={page.props.title}
    />
  </HomeLayout>
);

export default AdminSerieForm;
