import React, { useState, useEffect, useRef } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, User } from "lucide-react";

const Navbar = ({ toggleMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const dropdownRefs = useRef({});
  const navigate = useNavigate();

  /* ===============================
     SCROLL EFFECT
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     NAVIGATION ROUTES
  =============================== */
  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    {
      id: "services",
      label: "Services",
      dropdown: [
        { id: "seo", label: "SEO Optimization", path: "/services/seo" },
        {
          id: "web",
          label: "Web Development",
          path: "/services/web-development",
        },
        {
          id: "marketing",
          label: "Digital Marketing",
          path: "/services/digital-marketing",
        },
        {
          id: "content",
          label: "Content Marketing",
          path: "/services/content-marketing",
        },
      ],
    },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  /* ===============================
     DROPDOWN TOGGLE
  =============================== */
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  /* ===============================
     CLOSE OUTSIDE CLICK
  =============================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      let outside = true;

      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(e.target)) outside = false;
      });

      if (outside) setOpenDropdowns({});
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setOpenDropdowns({});
  };

  /* ===============================
     DROPDOWN ITEM
  =============================== */
  const renderDropdownItem = (item) => (
    <RouterLink
      key={item.id}
      to={item.path}
      onClick={() => setOpenDropdowns({})}
      className="block px-5 py-2 text-sm text-[#475569]
      hover:bg-[#EFF6FF] hover:text-[#2563EB]
      transition-all duration-200"
    >
      {item.label}
    </RouterLink>
  );

  /* ===============================
     NAV ITEM
  =============================== */
  const renderNavItem = (item) => {
    const hasDropdown = item.dropdown;
    const isOpen = openDropdowns[item.id];

    return (
      <div
        key={item.id}
        className="relative"
        ref={(el) => (dropdownRefs.current[item.id] = el)}
      >
        {hasDropdown ? (
          <div
            onClick={() => toggleDropdown(item.id)}
            className={`flex items-center space-x-1 cursor-pointer
            text-[#475569] font-semibold px-2 py-1
            hover:text-[#2563EB] transition-all duration-200 ${
              isOpen ? "text-[#2563EB]" : ""
            }`}
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        ) : (
          <div
            onClick={() => handleNavClick(item.path)}
            className="cursor-pointer text-[#475569] font-semibold
            hover:text-[#2563EB] px-2 py-1 transition-all duration-200"
          >
            {item.label}
          </div>
        )}

        {hasDropdown && isOpen && (
          <div
            className="absolute top-full left-0 mt-3 w-64
            bg-white border border-[#E2E8F0]
            rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {item.dropdown.map(renderDropdownItem)}
          </div>
        )}
      </div>
    );
  };

  /* ===============================
     AUTH STATE (DUMMY)
  =============================== */
  const isAuthenticated = false;

  /* ===============================
     UI
  =============================== */
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="px-8 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <svg width="40" height="40" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#2563EB"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M16 24L24 14L32 24L24 34L16 24Z"
              fill="#2563EB"
            />
          </svg>

          <h1 className="ml-2 text-xl font-semibold text-[#0F172A]">
            MySite
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map(renderNavItem)}

          {/* LOGIN BUTTON */}
          {!isAuthenticated && (
            <RouterLink
              to="/login"
              className="ml-4 bg-[#2563EB] text-white px-6 py-2 rounded-lg
              hover:bg-[#1D4ED8] active:bg-[#1E40AF]
              transition-all duration-300 flex items-center space-x-2
              shadow-md hover:shadow-lg"
            >
              <User className="w-4 h-4" />
              <span>Get Started</span>
            </RouterLink>
          )}
        </nav>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#0F172A]"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;