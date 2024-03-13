import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home/index.jsx";
import AboutUs from "./AboutUs/index.jsx";
import Contact from "./Contact/index.jsx";
import Layout from "./Layout/index.jsx";
import UserInfo from "./UserInfo/index.jsx";
import GitHub, { githubInfoLoader } from "./GitHub/index.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <AboutUs /> },
//       { path: "contact", element: <Contact /> },
//       { path: "user/:userId", element: <UserInfo /> },
//       { loader: {githubInfoLoader}, path: "github", element: <GitHub /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<UserInfo />} />
      <Route loader={githubInfoLoader} path="github" element={<GitHub />} />
    </Route>
  )
);

function ReactRouting() {
  return <RouterProvider router={router} />;
}
export default ReactRouting;
