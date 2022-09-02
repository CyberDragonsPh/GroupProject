import React from "react";
import styled from "styled-components";

export default function MembersList() {
  return (
    <MembersListContainer>
      <h1>Members List</h1>
      <br />
      <hr />
    </MembersListContainer>
  );
}

const MembersListContainer = styled.div`
  margin-top: 3vh;
  width: 100%;
`;
