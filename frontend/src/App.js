import SidebarRight from "./components/layout/sidebarRight";
import Header from "./components/layout/header";
import CollapsableSidebar from "./components/layout/collapsableSidebar";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#F2F6FA" }}>
      <SidebarRight />
      <CollapsableSidebar open={open} setOpen={setOpen} />
      <div className="flex flex-col w-full">
        <Header />
        <h1 className="text-red-400 text-2xl">Hello world</h1>
      </div>
    </div>
  );
}

export default App;
