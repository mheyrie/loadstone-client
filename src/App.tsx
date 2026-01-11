import { Toaster } from "react-hot-toast";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <MainRoutes />
    </>
  );
}

export default App;
