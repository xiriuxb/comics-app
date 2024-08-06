import { InertiaLink } from "@inertiajs/inertia-react";
import HomeLayout from "../layouts/HomeLayout";

const Listado = ({ listado }) => {
  return (
    <div className="px-2 w-full max-w-screen-xl">
      <h1 className="text-3xl">Comics App</h1>
      <div className="listado-comics">
        <div className="editorial">
          <h3>Marvel</h3>
          {listado.map((superh) => {
            return (
              superh.editorial == "Marvel" && (
                <InertiaLink href={"/comics/" + superh.path} key={superh.id}>
                  {superh.nombre}
                </InertiaLink>
              )
            );
          })}
        </div>
        <div>
          <h3>DC</h3>
          {listado.map((superh) => {
            return (
              superh.editorial == "DC" && (
                <InertiaLink href={"/comics/" + superh.path} key={superh.id}>
                  {superh.nombre}
                </InertiaLink>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

Listado.layout = (page) => <HomeLayout children={page} />;
export default Listado;
