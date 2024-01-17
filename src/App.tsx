import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useRecoilValue } from "recoil";
import { themeState } from "./atom/theme";

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <div className={`App ${theme ? "light" : "dark"}`}>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
