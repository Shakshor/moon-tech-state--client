import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <ProductProvider>
        <h2 className="text-2xl text-center">Welcome</h2>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
