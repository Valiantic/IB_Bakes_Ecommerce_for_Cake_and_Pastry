
import logo from "../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();

  return (

    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
            <img className="h-20" src={logo} alt="Logo" />
        </a>
        <a className="block" href="/">
          <span className="sr-only">Home</span>
          <h1 className="flex hidden md:block font-sans md:font-serif text-2xl">IB <span className="font-style: italic text-rose-600">Bakes</span></h1>
        </a>
      </div>

      <div className="hidden md:block">
        <nav>
          <ul className="flex items-center gap-20 text-2xl">
            <li>
              <a className="text-gray-700 font-sans md:font-serif transition hover:text-rose-500/75" href="#products"> Products </a>
            </li>

            <li>
              <a className="text-gray-700  font-sans md:font-serif transition hover:text-rose-500/75" href="#about"> About </a>
            </li>

            <li>
              <a className="text-gray-700 font-sans md:font-serif transition hover:text-rose-500/75" href="#contacts"> Contacts </a>
            </li>

         
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-rose-600 px-5 py-2.5 text-sm font-medium text-white shadow"
          onClick={() => navigate('/login')}
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-rose-600"
              onClick={() => navigate('/signup')}
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-black-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default Nav;
