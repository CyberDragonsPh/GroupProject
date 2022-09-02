import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled from "styled-components";

import Header from "./components/Header";
import MembersList from "./components/pages/MembersList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppBody>
          <Routes>
            <Route path="/" element={<MembersList />} />
          </Routes>
        </AppBody>
      </div>
    </BrowserRouter>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
