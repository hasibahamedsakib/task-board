import MyDay from "./components/MyDay/MyDay";
import Sidebar from "./components/Sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className="relative min-h-screen md:flex ">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="">
          <MyDay />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
