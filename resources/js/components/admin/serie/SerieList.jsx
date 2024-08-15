import { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import HomeLayout from "../../../layouts/HomeLayout";
import MySelect from "../../input_elements/MySelect";
import axios from "axios";
import { list } from "postcss";
import { InertiaLink } from "@inertiajs/inertia-react";

const SerieListComponent = ({ options, title, editorials }) => {
  const [editorial, setEditorial] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getSeriesByEditorial();
  }, [editorial]);

  const getSeriesByEditorial = async () => {
    try {
      const dataApi = await axios.get(
        `/api/series?editorial_id=${parseInt(editorial)}`
      );
      console.log(dataApi.data);
      setData(dataApi.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>List</h3>
      <MySelect
        options={editorials}
        valueKey={"id"}
        nameKey={"name"}
        title={"--EDITORIAL--"}
        value={editorial}
        onChange={(e) => setEditorial(e.target.value)}
      />
      <ul className="flex flex-col gap-2 pt-2">
        {data.map((serie) => {
          return <SerieInfo serie={serie} />;
        })}
      </ul>
    </div>
  );
};

SerieListComponent.layout = (page) => (
  <HomeLayout>
    <AdminLayout
      children={page}
      options={page.props.options}
      title={page.props.title}
    />
  </HomeLayout>
);
export default SerieListComponent;

const SerieInfo = ({ serie }) => {
  return (
    <div className="flex p-2 rounded-md border border-orange-700">
      <div className="flex-1">
        <h4 className="font-bold text-lg">{serie.name}</h4>
        <span>
          <b>Status:</b> {serie.status} <b>Issues:</b> {serie.issues_count}
        </span>
      </div>
      <span className="flex gap-2 items-center">
        <InertiaLink className="p-2 rounded-md border border-orange-500" href={`/admin/serie/${serie.id}`}>
          View
        </InertiaLink>
        <InertiaLink
          className="p-2 rounded-md border border-orange-500 bg-tomato"
          href={`/admin/issue/create?serie_id=${serie.id}`}
        >
          Add Issue
        </InertiaLink>
      </span>
    </div>
  );
};
