import { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";
import axios from "axios";

const CharacterListComponent = ({ options }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacterData();
  }, []);

  const getCharacterData = async () => {
    try {
      const resData = (await axios.get("/api/characters")).data;
      setData(resData);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div>
      <h3 className="font-bold">List</h3>
      <ul>
        {data.map((character) => {
          return <li key={character.code}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
};

CharacterListComponent.layout = (page) => (
  <HomeLayout>
    <AdminLayout
      children={page}
      options={page.props.options}
      title={page.props.title}
    />
  </HomeLayout>
);

export default CharacterListComponent;
