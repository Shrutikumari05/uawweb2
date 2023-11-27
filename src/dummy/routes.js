import Home from "../component/pages/home/Home";
import About from "../component/pages/about/About";
import Services from "../component/pages/service/Service";
import Partners from "../component/pages/partners/Partners";
import Careers from "../component/pages/careers/Careers";
import Contact from "../component/pages/contact/Contact";
import Companycomponent from "../component/companyComponent/Companycomponent";
import Companycomponent2 from "../component/companyComponent/Companycomponent2";
import Companycomponent3 from "../component/companyComponent/Companycomponent3";
import Companycomponent4 from "../component/companyComponent/Companycomponent4";

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
  {
    path: "product1",
    identifier: "product1",
    components: <Companycomponent />,
    isPrivate: false,
  },

  {
    path: "product2",
    identifier: "product2",
    components: <Companycomponent2 />,
    isPrivate: false,
  },
  {
    path: "product3",
    identifier: "product3",
    components: <Companycomponent3 />,
    isPrivate: false,
  },
  {
    path: "product4",
    identifier: "product4",
    components: <Companycomponent4 />,
    isPrivate: false,
  },
];

export default routes;
