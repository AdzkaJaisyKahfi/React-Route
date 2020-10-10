import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    Component: Home,
    layout: "/admin",
    props: {
      auth: true
    }
  },
  {
    path: "/contact",
    name: "contact",
    Component: Contact,
    layout: "/admin",
    props: {
      auth: true
    }
  },
  {
    path: "/about",
    name: "About",
    Component: About,
    layout: "/admin",
    props: {
      auth: true
    }
  }
];

export default dashboardRoutes;
