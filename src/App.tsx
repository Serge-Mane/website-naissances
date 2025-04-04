import { Outlet } from "react-router-dom";
import ApplicationContextProvider from "./contexte/ApplicationContextProvider";;
import GlobalApplicationcontextProvider from "./contexte/global/GlobalApplicationcontext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    }
  },
})
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
