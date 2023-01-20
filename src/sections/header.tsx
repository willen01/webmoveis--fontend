import Link from "next/link";
import React from "react";
import { BiEnvelope, BiPhoneCall, BiUser, BiCart } from "react-icons/bi";
import Container from "../components/container";

//Header da aplicação
const Header = () => {
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
      <nav>MENU</nav>
    </header>
  );
};

export default Header;
