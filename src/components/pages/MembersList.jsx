import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

export default function MembersList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      editable: false,
    },
    {
      field: "middleName",
      headerName: "Middle Name",
      width: 150,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      type: "number",
      width: 200,
      editable: false,
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 400,
      editable: false,
    },
    {
      field: "edit",
      headerName: "Edit / Delete",
      sortable: false,
      editable: false,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="error"
            // onClick={(event) => {
            //   handleClick(event, cellValues);
            // }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      firstName: "Jon",
      middleName: "Tavern",
      lastName: "Snow",
      email: "johnsnow@email.com",
      address: "143 Kanto Freestyle Road, USA",
    },
    {
      id: 2,
      firstName: "Jon",
      middleName: "Tavern",
      lastName: "Snow",
      email: "johnsnow@email.com",
      address: "143 Kanto Freestyle Road, USA",
    },
    {
      id: 3,
      firstName: "Jon",
      middleName: "Tavern",
      lastName: "Snow",
      email: "johnsnow@email.com",
      address: "143 Kanto Freestyle Road, USA",
    },
    {
      id: 4,
      firstName: "Jon",
      middleName: "Tavern",
      lastName: "Snow",
      email: "johnsnow@email.com",
      address: "143 Kanto Freestyle Road, USA",
    },
  ];

  return (
    <MembersListContainer>
      <h1>Members List</h1>
      <br />
      <Button variant="contained">Add Member</Button>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </MembersListContainer>
  );
}

const MembersListContainer = styled.div`
  margin-top: 3vh;
  width: 100%;
`;
