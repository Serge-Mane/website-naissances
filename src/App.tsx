import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./contexte/ApplicationContextProvider";;
import GlobalApplicationcontextProvider from "./contexte/global/GlobalApplicationContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient()
function App() {
  return (
    <GlobalApplicationcontextProvider>
      <ApplicationContextProvider>
        <QueryClientProvider client={queryClient}>
          <main className="bg-gray-200 min-h-screen ">
            <Outlet />
          </main>
        </QueryClientProvider>
      </ApplicationContextProvider>
    </GlobalApplicationcontextProvider>
  );

}

export default App
