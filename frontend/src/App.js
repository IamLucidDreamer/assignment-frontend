import SidebarRight from "./components/layout/sidebarRight";
import Header from "./components/layout/header";
import CollapsableSidebar from "./components/layout/collapsableSidebar";
import { useState } from "react";
import SubHeader from "./components/layout/SubHeader";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F2F6FA" }}>
      <SidebarRight />
      <CollapsableSidebar open={open} setOpen={setOpen} />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-col pt-6 px-6">
          <SubHeader />
        </div>
      </div>
    </div>
  );
}

export default App;
