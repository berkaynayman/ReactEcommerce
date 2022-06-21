import { BrowserRouter, Routes, Route } from "react-router-dom"
import WithSubnavigation from "./Components/Navbar";
import { MainContext } from "./context";
import Login from "./Page/Login";
import { Container } from '@chakra-ui/react'

const USERS = [
  {
    name: "Berkay",
    lastName: "Nayman",
    mail: "berkaynayman4@gmail.com",
    pass: "12345678"
  }
]

const data = {
  USERS
}

function App() {
  return (
    <MainContext.Provider value={data}>
      <Container maxW="8xl">
        <BrowserRouter>
        <WithSubnavigation />
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </MainContext.Provider>
  );
}

export default App;
