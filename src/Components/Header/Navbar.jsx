import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 h-28 p-2 px-6">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="src/assets/img/Logo.png" alt="Logo" className="w-16  " />
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-5   "
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-white  bg-red-700 hover:bg-red-700 font-medium rounded-xl px-4  text-center hover:text-white font-['Poppins'] w-28 h-10 text-2xl"
                  : "text-white  bg-red-700 hover:bg-red-700 font-medium rounded-xl px-4  text-center hover:text-white font-['Poppins'] w-28 h-10 text-2xl"
              }
            >
              Masuk
            </NavLink>

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white k:bg-gray-800 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active block py-2 px-3 text-red-500 hover:text-red-500 font-['Poppins'] text-2xl"
                      : "block py-2 px-3 text-black hover:text-red-500 font-['Poppins'] text-2xl"
                  }
                >
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sertifikasi"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active block py-2 px-3 text-red-500 hover:text-red-500 font-['Poppins'] text-2xl"
                      : "block py-2 px-3 text-black hover:text-red-500 font-['Poppins'] text-2xl"
                  }
                >
                  Sertifikasi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/edukasi"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active block py-2 px-3 text-red-500 hover:text-red-500 font-['Poppins'] text-2xl"
                      : "block py-2 px-3 text-black hover:text-red-500 font-['Poppins'] text-2xl"
                  }
                >
                  Edukasi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/maps"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active block py-2 px-3 text-red-500 hover:text-red-500 font-['Poppins'] text-2xl"
                      : "block py-2 px-3 text-black hover:text-red-500 font-['Poppins'] text-2xl"
                  }
                >
                  Maps
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/tentangkami"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active block py-2 px-3 text-red-500 hover:text-red-500 font-['Poppins'] text-2xl"
                      : "block py-2 px-3 text-black hover:text-red-500 font-['Poppins'] text-2xl"
                  }
                >
                  Tentang Kami
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
