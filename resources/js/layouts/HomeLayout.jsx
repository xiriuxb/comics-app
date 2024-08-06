import NavBar from "../components/NavBarComponent";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex justify-around items-center w-full">{children}</main>
    </>
  );
};

export default HomeLayout;
