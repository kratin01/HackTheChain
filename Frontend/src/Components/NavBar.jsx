import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//React Icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  // const user=Login();
  const user = localStorage.getItem("accessToken");
  //Toggle Menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); //basically if isMenuOpen is true, set it to false and vice versa
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Nav Items

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Contact", path: "/contact" },
  ];

  return (
    <header className=" w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={` py-4 lg:px-24 px-4 ${
          isSticky ? " sticky top-0 right-0 left-0 bg-blue-200" : ""
        }`}
      >
        <div className=" flex justify-between items-center gap-8 text-base">
          {/* Insert Logo */}
          <Link
            to="/"
            className=" text-2xl font-bold text-[#5863C4] flex items-center"
          >
            <FaBlog className=" inline-block" /> logo
          </Link>

          {/* Nav Items */}
          <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className=" block text-base text-black uppercase cursor-pointer hover:text-[#5863C4]"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for lg devices */}

          <div className=" space-x-12 hidden lg:flex items-center ">
            <button>
              <FaBarsStaggered className="w-5 hover:text-blue-700 " />
            </button>
            <button>
              {user ? (
                <Link
                  to="/profile"
                  className="bg-[#5863C4] text-white px-4 py-2 rounded-md"
                >
                  Profile
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#5863C4] text-white px-4 py-2 rounded-md"
                >
                  Login
                </Link>
              )}
              `
              {user ? (
                <Link
                  to="/logout"
                  className="px-4 underline text-blue-700 hover:text-black"
                >
                  Logout
                </Link>
              ) : (
                ""
              )}
            </button>
          </div>

          {/* Button for md and sm devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className=" h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className=" h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* navItems for md and sm devices */}

        <div
          className={` space-y-4 px-4 mt-12 py-7 bg-blue-700 ${
            isMenuOpen ? " block fixed top-0 right-0 left-0" : " hidden"
          } `}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className=" block text-base text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
