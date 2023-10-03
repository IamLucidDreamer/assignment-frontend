import SidebarRight from "./components/layout/sidebarRight";
import Header from "./components/layout/header";
import CollapsableSidebar from "./components/layout/collapsableSidebar";
import { useState } from "react";
import SubHeader from "./components/layout/SubHeader";
import LeftSidebar from "./components/layout/LeftSidebar";
import MainCards from "./components/layout/MainCards";

function App() {
  const [open, setOpen] = useState(true);

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
