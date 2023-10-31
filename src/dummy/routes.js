import Home from "../component/pages/home/Home";
import About from "../component/pages/about/About";
import Services from "../component/pages/service/Service";
import Partners from "../component/pages/partners/Partners";
import Careers from "../component/pages/careers/Careers";
import Contact from "../component/pages/contact/Contact";

const routes = [
  {
    path: "/",
    identifier: "home",
    components: <Home />,
    isPrivate: false,
  },
  {
    path: "about",
    identifier: "about",
    components: <About />,
    isPrivate: false,
  },
  {
    path: "services",
    identifier: "services",
    components: <Services />,
    isPrivate: false,
  },
  {
    path: "partners",
    identifier: "partners",
    components: <Partners />,
    isPrivate: false,
  },
  {
    path: "careers",
    identifier: "careers",
    components: <Careers />,
    isPrivate: false,
  },
  {
    path: "contact",
    identifier: "contact",
    components: <Contact />,
    isPrivate: false,
  },
];

export default routes;
