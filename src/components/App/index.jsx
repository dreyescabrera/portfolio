import React from "react";
import { ProfileImage } from "../ProfileImage/";
import { SidebarMenu } from "../SidebarMenu/";
import { Hero } from "../Hero";

function App() {
  return (
    <React.Fragment>
      <SidebarMenu>
        <ProfileImage shape="circle" />
      </SidebarMenu>
      <div className="md:pl-60 lg:pl-72">
        <Hero></Hero>
      </div>
    </React.Fragment>
  );
}

export { App };
