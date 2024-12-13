import { createBrowserRouter } from "react-router-dom";
import HomePage from './components/Homepage';
import ErrorPage from './components/ErrorPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Helloworld from "./components/Projects/Helloworld";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "AboutMe",
        element: <AboutMe/>,
      },
      {
        path: "Projects",
        element: <Projects/>,
      },
      {
        path: "Resume",
        element: <Resume/>,
      },
      {
        path: "Helloworld",
        element: <Helloworld/>
      }
])