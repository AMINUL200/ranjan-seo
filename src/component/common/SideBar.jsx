import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  X,
  ChevronRight,
  Home,
  Briefcase,
  BookOpen,
  Mail,
  Info,
  User,
} from "lucide-react";

const SideBar = ({ toggleMenu, isOpen }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  /* ===============================
     SIDEBAR ROUTES
  =============================== */
  const sidebarLinks = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: <Home className="w-5 h-5" />,
    },
    {
      id: "about",
      label: "About",
      path: "/about",
      icon: <Info className="w-5 h-5" />,
    },
    {
      id: "services",
      label: "Services",
      icon: <Briefcase className="w-5 h-5" />,
      dropdown: [
        { id: "seo", label: "SEO Optimization", path: "/services/seo" },
        { id: "web", label: "Web Development", path: "/services/web-development" },
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
    {
      id: "blog",
      label: "Blog",
      path: "/blog",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "contact",
      label: "Contact",
      path: "/contact",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const isAuthenticated = false;

  /* ===============================
     CLOSE ON ROUTE CHANGE
  =============================== */
  useEffect(() => {
    if (isOpen) toggleMenu();
  }, [location.pathname]);

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNavClick = (path) => {
    navigate(path);
    setOpenDropdowns({});
    toggleMenu();
  };

  const isActivePath = (path) => location.pathname === path;

  /* ===============================
     DROPDOWN ITEM
  =============================== */
  const renderDropdownItem = (item) => {
    const active = isActivePath(item.path);

    return (
      <div
        key={item.id}
        onClick={() => handleNavClick(item.path)}
        className={`px-10 py-3 text-sm cursor-pointer transition-all duration-200
        ${
          active
            ? "bg-[#2563EB] text-white font-semibold"
            : "text-[#475569] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
        }`}
      >
        {item.label}
      </div>
    );
  };

  /* ===============================
     NAV ITEM
  =============================== */
  const renderNavItem = (item) => {
    const hasDropdown = item.dropdown;
    const isOpen = openDropdowns[item.id];
    const active = item.path && isActivePath(item.path);

    return (
      <div key={item.id} className="mb-1">
        {hasDropdown ? (
          <div
            onClick={() => toggleDropdown(item.id)}
            className={`flex items-center justify-between px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              isOpen
                ? "bg-[#EFF6FF] text-[#2563EB]"
                : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#2563EB]"
            }`}
          >
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="font-semibold">{item.label}</span>
            </div>

            <ChevronRight
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        ) : (
          <div
            onClick={() => handleNavClick(item.path)}
            className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg cursor-pointer transition-all duration-200
            ${
              active
                ? "bg-[#2563EB] text-white shadow-md"
                : "text-[#475569] hover:bg-[#F1F5F9] hover:text-[#2563EB]"
            }`}
          >
            {item.icon}
            <span className="font-semibold">{item.label}</span>
          </div>
        )}

        {/* DROPDOWN */}
        {hasDropdown && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="mt-1 border-l-2 border-[#2563EB]/20 ml-6">
              {item.dropdown.map(renderDropdownItem)}
            </div>
          </div>
        )}
      </div>
    );
  };

  /* ===============================
     UI
  =============================== */
  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50
        transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
          <div className="flex items-center space-x-3">
            <svg width="36" height="36" viewBox="0 0 48 48">
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
            <h2 className="text-xl font-bold text-[#0F172A]">MySite</h2>
          </div>

          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-[#F1F5F9] rounded-lg"
          >
            <X className="w-6 h-6 text-[#475569]" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          {sidebarLinks.map(renderNavItem)}
        </nav>

        {/* LOGIN BUTTON */}
        {!isAuthenticated && (
          <div className="border-t border-[#E2E8F0] p-4">
            <button
              onClick={() => handleNavClick("/login")}
              className="w-full bg-[#2563EB] text-white py-3 rounded-lg
              hover:bg-[#1D4ED8] transition-all duration-300
              flex items-center justify-center space-x-2 font-semibold shadow-md"
            >
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default SideBar;