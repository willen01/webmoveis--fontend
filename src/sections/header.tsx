import Link from "next/link";
import React, { useRef } from "react";
import { BiEnvelope, BiPhoneCall, BiUser, BiCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Container from "../components/container";
import { SearchBar } from "../components/search-bar";

//Header da aplicação
const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const handleToggleMenu = () => {
    menuRef.current?.classList.toggle("hidden");
    menuRef.current?.classList.toggle("flex");
  };

  return (
    <header className="bg-white">
      <div className="bg-violet-700 p-3 md:px-5">
        <Container className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-10">
            <a
              href="mailto:minhaloja@gmail.com"
              className="flex items-center text-gray-100 font-semibold"
            >
              <BiEnvelope className="mr-3" />
              email.daloja@email.com
            </a>
            <a
              href="tel:(+5591) 9 8888-8888"
              className="flex items-center text-gray-100 font-semibold"
            >
              <BiPhoneCall className="mr-3" />
              (91) 8888-8888
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-end md:items-center gap-x-10">
            <Link
              href="/login"
              className="flex items-center text-gray-100 font-semibold"
            >
              Login
              <BiUser className="ml-3" />
            </Link>
            <Link
              href="/carrinho"
              className="flex items-center text-gray-100 font-semibold"
            >
              Carrinho
              <BiCart className="ml-3" />
            </Link>
          </div>
        </Container>
      </div>
      <nav className="p-3 md:p-5">
        {/* logo */}
        <Container className="md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="font-bold leading-none text-4xl text-neutral-900"
            >
              WebMoveis
            </Link>
            <button
              type="button"
              className="md:hidden w-7 h-7 flex items-center justify-center border border-solid border-gray-600 opacity-50"
              onClick={handleToggleMenu}
            >
              <FaBars />
            </button>
          </div>
          <div
            ref={menuRef}
            className="hidden md:flex flex-col md:flex-row md:items-center md:justify-between md:flex-1"
          >
            <div className="md:ml-11 flex flex-col md:flex-row md:items-center md:flex-wrap">
              <MenuLink href="/">Inicio</MenuLink>
              <MenuLink href="#">Destaques</MenuLink>
              <MenuLink href="#">Vantagens</MenuLink>
              <MenuLink href="#">Categorias</MenuLink>
            </div>
            <SearchBar onSearch={() => {}} />
          </div>
        </Container>
      </nav>
    </header>
  );
};

type MenuProps = {
  href: string;
  children: React.ReactNode;
};

const MenuLink = ({ children, href }: MenuProps) => {
  return (
    <Link
      href={href}
      className="md:mx-4 text-neutral-900 hover:text-pink-600 hover:underline underline-offset-2"
    >
      {children}
    </Link>
  );
};

export default Header;
