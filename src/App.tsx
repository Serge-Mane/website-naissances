import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./contexte/ApplicationContextProvider";;
import GlobalApplicationcontextProvider from "./contexte/global/GlobalApplicationContextProvider";

function App() {
  return (
    <GlobalApplicationcontextProvider>
      <ApplicationContextProvider>
        <main className="bg-gray-200 min-h-screen ">
          <Outlet />
        </main>
      </ApplicationContextProvider>
    </GlobalApplicationcontextProvider>
  );

}

export default App
