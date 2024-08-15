import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";
import FormMessageComponent from "../../shared/FormMessageComponent";
import MyInputText from "../../input_elements/MyInputText";
import MyInputButton from "../../input_elements/MyInputButton";
import MyInputDate from "../../input_elements/MyInputDate";
import MySelect from "../../input_elements/MySelect";
import MyComboBox from "../../input_elements/MyComboBox";
import MyComboBoxSearch from "../../input_elements/MyComboBoxSearch";

const serieFormInitialValues = {
  editorial_id: "",
  character_id: "",
  serie_id: "",
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

  const handleChangeVals = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleCharcterId = (characterId) => {
    setFormValues({ ...formValues, character_id: characterId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerErrors({});
    setLoading(true);
    setSuccessMsg("");
    try {
      const response = await axios.post("/api/series", formValues);
      setSuccessMsg("Serie created successfully");
      setFormValues({
        ...formInitialValues,
        character_id: response.data.character_id,
      });
    } catch (error) {
      setServerErrors(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-y-2 max-w-lg px-1" onSubmit={handleSubmit}>
      <h3 className="font-bold">Create</h3>
      <FormMessageComponent message={successMsg} />
      <MyComboBoxSearch
        label={"Character Serie:"}
        name={"character-select"}
        setId={handleCharcterId}
        error={serverErrors.character_id}
        apiRoute={"/api/characters"}
      />
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <MySelect
          name="editorial_id"
          value={formValues.editorial_id}
          onChange={handleChangeVals}
          error={serverErrors.editorial_id}
          title="Select Editorial"
          options={editorials}
          valueKey={"id"}
          nameKey={"name"}
        />
        <MySelect
          name="status"
          value={formValues.status}
          onChange={handleChangeVals}
          error={serverErrors.status}
          title="Select Status"
          options={statuses}
        />
      </div>
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <MyInputText
          name={"name"}
          label={"Serie Name:"}
          error={serverErrors.name}
          maxLength={32}
          required={true}
          onChange={handleChangeName}
          value={formValues.name}
        />
        <MyInputText
          label={"Code:"}
          name={"code"}
          error={serverErrors.code}
          maxLength={32}
          required={true}
          value={formValues.code}
          disabled={true}
        />
      </div>
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <MyInputDate
          name={"start_date"}
          value={formValues.start_date}
          label="Start Date:"
          error={serverErrors.start_date}
          onChange={handleChangeVals}
          max={formValues.end_date ? formValues.end_date : undefined}
        />
        <MyInputDate
          name={"end_date"}
          value={formValues.end_date}
          label="End Date:"
          error={serverErrors.end_date}
          onChange={handleChangeVals}
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
