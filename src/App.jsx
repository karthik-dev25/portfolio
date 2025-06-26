import HomePage from "./pages/home/HomePage";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Header from "./pages/home/Header";
import ProfileContainer from "./pages/home/ProfileContainer";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children:[
        {
          path:'/',
          element:<ProfileContainer />
        },
        {
          path:'/skills',
          element:<Skills />
        },
        {
          path:'/projects',
          element:<Projects />
        },
        {
          path:'/contact',
          element:<Contact />
        }
      ],
      errorElement: <PageNotFound />,
    }
  ]);
  return (
    <div className="cursor-default">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default App;
