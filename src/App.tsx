import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Frontpage } from "./pages/Frontpage";
import { ColorContextProvider } from "./context/ColorContext";
import { Userpage } from "./pages/Userpage";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ColorContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Frontpage />} />
              <Route path="pallettes" element={<Userpage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContextProvider>
    </>
  );
}

export default App;
