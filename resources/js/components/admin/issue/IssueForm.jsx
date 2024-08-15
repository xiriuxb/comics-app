import { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "@inertiajs/inertia-react";
import FormMessageComponent from "../../shared/FormMessageComponent";
import MyInputNumber from "../../input_elements/MyInputNumber";
import HomeLayout from "../../../layouts/HomeLayout";
import AdminLayout from "../../../layouts/AdminLayout";
import MyInputButton from "../../input_elements/MyInputButton";
import MyInputText from "../../input_elements/MyInputText";
import MyInputDate from "../../input_elements/MyInputDate";
import MyComboBoxSearch from "../../input_elements/MyComboBoxSearch";
import MySelect from "../../input_elements/MySelect";

const issueFormInitialVal = {
  number: null,
  title: "",
  release_date: "",
  description: "",
  page_count: null,
  cover_image_url: "",
  isbn: "",
  lang: "",
  serie_id: "",
  type: "main"
};

const getQueryParam = (uriString, key) => {
  const queryParams = new URLSearchParams(uriString);
  return queryParams.get(key);
};
const AdminIssueForm = ({ options, title, editorials, issue_types }) => {
  const { url } = usePage();
  const [formValues, setFormValues] = useState({ ...issueFormInitialVal });
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverErrors, setServerErrors] = useState({});
  const [serieData, setSerieData] = useState(null);

  useEffect(() => {
    const serieId = getQueryParam(url.split("?")[1], "serie_id");
    if (serieId) {
      getSerieData(serieId);
    }
  }, [url]);

  const getSerieData = async (serieId) => {
    try {
      const resData = await axios.get(`/api/series/${serieId}`);
      setSerieData(resData.data);
      setFormValues({...formValues, serie_id:serieId});
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setSuccessMsg("Issue created");
      console.log(formValues);
    } catch (error) {
      setServerErrors(error.responde.data.errors);
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  const handleChangeVals = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSerieId = (serieId) => {
    setFormValues({ ...formValues, serie_id: serieId });
  };

  return (
    <form className="flex flex-col gap-y-2 max-w-lg px-1" onSubmit={handleSubmit}>
      <h3 className="font-bold">Create</h3>
      <FormMessageComponent message={successMsg} />
      <div className="flex flex-col gap-1 w-full md:flex-row">
        <label className="w-full">
          Editorial:
          <MySelect
            name="editorial_id"
            value={serieData ? serieData.editorial_id : formValues.editorial_id}
            onChange={handleChangeVals}
            error={serverErrors.editorial_id}
            title="Select Editorial"
            options={editorials}
            valueKey={"id"}
            nameKey={"name"}
          />
        </label>
        {!serieData && (
          <MyComboBoxSearch
            label={"Character Search:"}
            name={"character-select"}
            setId={handleSerieId}
            error={serverErrors.character_id}
            apiRoute={"/api/characters"}
          />
        )}
        {serieData && (
          <MyInputText
            label="Character Name:"
            type="text"
            value={serieData.character.name}
            disabled
          />
        )}
      </div>
      {!serieData && (
        <MyComboBoxSearch
          label={"Serie:"}
          name={"serie-select"}
          setId={handleSerieId}
          error={serverErrors.serie_id}
          apiRoute={"/api/series"}
        />
      )}
      {serieData && (
        <MyInputText
          label="Serie Name:"
          type="text"
          value={serieData.name}
          disabled
        />
      )}
      <div className="flex gap-2">
        <MyInputNumber
          name={"number"}
          label={"#"}
          onChange={handleChangeVals}
          value={formValues.number}
          required={true}
          error={serverErrors.number}
        />
        <label>
          Issue Type:
          <MySelect
            name="type"
            options={issue_types}
            title="Issue Type"
            value={formValues.type}
            onChange={handleChangeVals}
          />
        </label>
          <MyInputNumber
            name={"page_count"}
            label={"Pages:"}
            onChange={handleChangeVals}
            value={formValues.page_count}
            required={true}
            error={serverErrors.page_count}
          />
      </div>
      <MyInputText
        name={"title"}
        label={"Title:"}
        onChange={handleChangeVals}
        error={serverErrors.title}
        maxLength={256}
        value={formValues.title}
      />
      <MyInputDate
        name={"release_date"}
        value={formValues.release_date}
        onChange={handleChangeVals}
        error={serverErrors.release_date}
        label="Release Date:"
      />
      <MyInputButton loading={loading} disabled={loading}/>
    </form>
  );
};

AdminIssueForm.layout = (page) => (
  <HomeLayout>
    <AdminLayout
      children={page}
      options={page.props.options}
      title={page.props.title}
    />
  </HomeLayout>
);
export default AdminIssueForm;
