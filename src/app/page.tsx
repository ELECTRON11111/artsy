"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import HomeContent from "@/components/HomeContent/HomeContent";

export default function Home() {
  const [showSidebar, changeShowSidebar] = useState(false);

  return (
    <main className="relative">
      <Navbar showSidebarHandler = {() => changeShowSidebar((prevState) => !prevState)}/>
      {showSidebar? <Sidebar showSidebarHandler = {() => changeShowSidebar((prevState) => !prevState)} />: ""}

      {/* <!-- Content --> */}
      <HomeContent />
    </main>
  );
}
