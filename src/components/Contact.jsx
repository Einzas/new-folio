import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Contact = () => {
  return (
    <article className="grid gap-5 place-content-center overflow-hidden justify-center sm:max-w-[700px] sm:m-auto min-h-screen mx-5">
      <h1 className="text-blue-400 text-3xl text-center">Contact me</h1>
      <section className="flex justify-center gap-4">
        <a
          href="https://github.com/Einzas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white expand duration-300 text-7xl hover:text-blue-500"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/einzas/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white expand duration-300 text-7xl hover:text-blue-500"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
        {/* mail */}
        <a
          href="mailto:jeimyjara@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white expand duration-300 text-7xl hover:text-blue-500"
        >
          <i className="bx bx-mail-send"></i>
        </a>
      </section>
      <section className="expand duration-300">
        <Link className="w-24 " to="/">
          Go back
        </Link>
      </section>
    </article>
  );
};

export default Contact;
