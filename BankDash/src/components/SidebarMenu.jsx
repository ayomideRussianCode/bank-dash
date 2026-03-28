import React from "react";

const sidebarMenuList = [
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
  {
    img: "/dashboard-icon.svg",
    text: "Dashboard",
  },
];

const SidebarMenu = () => {
  return (
    <div className="hidden bg-[#ffffff] md:flex lg:flex flex-col justify-center w-1/6 m-6">
      <div>
        <img src="/Logo.png" alt="BankDash Logo" />
      </div>
      {sidebarMenuList.map((sidebarMenu, i) => (
        <div className="" key={i}>
          <div className="flex my-4 items-center">
            <div>
              <img className="w-4 h-4" src={sidebarMenu.img} alt="" />
            </div>
            <div className="mx-6 text-[#b1b1b1]">
              <p>{sidebarMenu.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
