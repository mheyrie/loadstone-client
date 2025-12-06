import { Toaster } from "react-hot-toast";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Toaster />
      <MainRoutes />
    </>
  );
}

export default App;
