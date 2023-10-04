import SidebarRight from "./components/layout/sidebarRight";
import Header from "./components/layout/header";
import CollapsableSidebar from "./components/layout/collapsableSidebar";
import { useEffect, useState } from "react";
import SubHeader from "./components/layout/SubHeader";
import LeftSidebar from "./components/layout/LeftSidebar";
import MainCards from "./components/layout/MainCards";
import serverV1 from "./api/server";
import { useDispatch } from "react-redux";
import { updateData } from "./store/actions/dataActions";

function App() {
  const [open, setOpen] = useState(true);

  const disptach = useDispatch();

  useEffect(() => {
    serverV1
      .get("/data")
      .then((res) => {
        disptach(updateData(res?.data?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F2F6FA" }}>
      <SidebarRight />
      <CollapsableSidebar open={open} setOpen={setOpen} />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex items-start justify-between pt-6 px-6">
          <div className="flex flex-col w-full pr-4">
            <SubHeader />
            <MainCards />
          </div>
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
