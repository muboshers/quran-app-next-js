import React from 'react';
import {UserInfo, UserSidebarStyle, UserSidebarItems} from "@/src/components/user-sidebar/user-sidebar.styles";
import img from "../../assets/initial-user-img.png"
import Image from "next/image";
import {Typography} from "@/src/components";

function UserSidebar() {
    return (
        <UserSidebarStyle>
          <UserSidebarItems>
              <UserInfo>
                  <div>
                      <Typography textSize={"list"} textWeight={"w_500"} tag={"h4"} color={"text"}>Salam,</Typography>
                      <Typography textSize={"h3"} textWeight={"w_600"} tag={"h1"} color={"text"}>Dovudhon</Typography>
                  </div>
                  <Image src={img} alt={"user"} />
              </UserInfo>
          </UserSidebarItems>
        </UserSidebarStyle>
    );
}

export default UserSidebar;