import React from "react";
import styled from "styled-components";

// Icons
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderRight>
        <ChatIcon />
        <LogoutIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 3vh;
  align-items: center;
  justify-content: end;
  background-color: blue;
  color: white;
`;

const HeaderRight = styled.div`
  display: flex;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
