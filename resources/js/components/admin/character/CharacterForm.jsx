import { useState } from "react";
import HomeLayout from "../../../layouts/HomeLayout";
import AdminLayout from "../../../layouts/AdminLayout";
import AdminCharacterView from "../../views/admin/CharacterView";
import MyInputText from "../../input_elements/MyInputText";
import MyInputButton from "../../input_elements/MyInputButton";
import FormMessageComponent from "../../shared/FormMessageComponent";

const CharacterFormComponent = ({
  formInitialValues = { name: "", code: "" },
  options,
}) => {
  const [formValues, setFormValues] = useState({ ...formInitialValues });
  const [serverErrors, setServerErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChangeName = (e) => {
    setFormValues({
      name: e.target.value,
      code: e.target.value.toLowerCase().replace(/ /g, "_"),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerErrors({});
    setLoading(true);
    setSuccessMsg("");
    try {
      await axios.post("/api/characters", formValues);
      setSuccessMsg("Character created successfully");
    } catch (error) {
      setServerErrors(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-y-2 max-w-64" onSubmit={handleSubmit}>
      <h3 className="font-bold">Create</h3>
      <FormMessageComponent message={successMsg} />
      <MyInputText
        name={"character_name"}
        label={"Name:"}
        error={serverErrors.name}
        maxLength={32}
        required={true}
        onChange={handleChangeName}
        value={formValues.name}
      />
      <MyInputText
        label={"Code:"}
        name={"character_code"}
        error={serverErrors.code}
        maxLength={32}
        required={true}
        value={formValues.code}
        disabled={true}
      />
      <MyInputButton loading={loading} />
    </form>
  );
};

CharacterFormComponent.layout = (page) => (
  <HomeLayout>
    <AdminLayout>
      <AdminCharacterView children={page} options={page.props.options} />
    </AdminLayout>
  </HomeLayout>
);
export default CharacterFormComponent;
