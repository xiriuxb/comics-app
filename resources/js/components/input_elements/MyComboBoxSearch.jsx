import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import MyComboBox from "./MyComboBox";

const MyComboBoxSearch = ({
  apiRoute,
  label,
  error,
  name,
  setId,
  nameKey = "name",
  valKey = "id",
}) => {
  const [apiData, setApiData] = useState([]);
  const [showTerm, setShowTerm] = useState('');

  useEffect(() => {
      if (showTerm.length > 1) {
        console.log(showTerm)
      debouncedFetchData(showTerm);
    }
  }, [showTerm]);

  const fetchData = async (term) => {
    try {
      if (term.length > 1) {
        const data = await axios.get(`${apiRoute}`, {
          params: { s: term },
        });
        setApiData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedFetchData = useCallback(
    debounce((nextValue) => fetchData(nextValue), 600),
    []
  );

  const handleChange = (e) =>{
    setShowTerm(e.target.value);
  }

  return (
    <MyComboBox
      setId={setId}
      label={label}
      error={error}
      name={name}
      options={apiData}
      onChange={handleChange}
      nameKey={nameKey}
      valKey={valKey}
    />
  );
};

export default MyComboBoxSearch;
