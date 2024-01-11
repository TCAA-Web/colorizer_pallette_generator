import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { GeneratePalletePage } from "./pages/GeneratePalletePage";
import { ColorContextProvider } from "./context/ColorContext";
import { MyPallettesPages } from "./pages/MyPallettesPage";

function App() {
  return (
    <>
      <ColorContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<GeneratePalletePage />} />
              <Route path="pallettes" element={<MyPallettesPages />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContextProvider>
    </>
  );
}

export default App;
