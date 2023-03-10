import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Router";

function App() {
  return (
    <div className="text-white w-[95%] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
