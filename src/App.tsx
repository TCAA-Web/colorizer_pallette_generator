import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { FrontPage } from "./pages/FrontPage/FrontPage";
import { ColorContextProvider } from "./context/ColorContext";
import { UserPage } from "./pages/UserPage/UserPage";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ColorContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<FrontPage />} />
              <Route path="pallettes" element={<UserPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContextProvider>
    </>
  );
}

export default App;
