import NavBar from "../components/NavBarComponent";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex justify-around w-full h-[calc(100vh-2.5rem)] max-h-[calc(100vh-2.5rem)] overflow-hidden">{children}</main>
    </>
  );
};

export default HomeLayout;
