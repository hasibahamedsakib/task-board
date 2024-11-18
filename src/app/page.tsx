import MyDay from "./components/MyDay/MyDay";
import Sidebar from "./components/Sidebar/Sidebar";
// import SearchBar from "./components/Surchbar/SearchBar";

const HomePage = () => {
  return (
    <div className="relative min-h-screen md:flex ">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="">
          {/* <SearchBar /> */}

          <MyDay />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
