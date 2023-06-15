import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/pdf/CV.pdf";
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <>
      <article className="grid place-content-center overflow-hidden justify-center sm:max-w-[700px] sm:m-auto min-h-screen mx-5">
        <h1 className="text-xl sm:text-4xl text-center">About me</h1>
        <section className="flex justify-between pt-5">
          <div className="pingu max-w-[150px]">
            <img src="/images/pingu.png" alt="einzas" />
          </div>
          <article>
            <p>
              Hi, my name is Jeimy Ariel Jara Bautista, and I am a full-stack
              web developer.
            </p>
          </article>
        </section>
        <section className="m-auto">
          <button
            className="bg-blue-500 py-2 px-3"
            onClick={handleDownloadResume}
          >
            Check my resume
          </button>
        </section>
      </article>
      <article className="grid place-content-center overflow-hidden justify-center sm:max-w-[700px] sm:m-auto min-h-screen mx-5">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Formations
        </h1>
        <a
          href="https://academlo.com"
          target="_blank"
          rel="noreferrer noopener"
          className="grid gap-2 grid-cols-[auto_1fr] items-center place-content-between pt-10 expand duration-300"
        >
          <div className="ml-5 w-20">
            <img className="w-full" src="/images/academlo.png" alt="einzas" />
          </div>
          <article>
            <p className="font-bold text-xl">Academlo</p>
            <p>Academy of Computer Science and Informatics</p>
            <p>Full-stack web development</p>
          </article>
        </a>
        <a
          href="https://www.udemy.com"
          target="_blank"
          rel="noreferrer noopener"
          className="grid gap-2 grid-cols-[auto_1fr] items-center place-content-between pt-10 expand duration-300"
        >
          <div className="w-24">
            <img
              className="w-full bg-blue-500 py-2 "
              src="/images/udemy.png"
              alt="einzas"
            />
          </div>
          <article>
            <p className="font-bold text-xl">Udemy</p>
            <p>Online learning and teaching marketplace</p>
            <p>Web development</p>
          </article>
        </a>
        <a
          href="https://www.neetwork.com"
          target="_blank"
          rel="noreferrer noopener"
          className="grid gap-2 grid-cols-[auto_1fr] items-center place-content-between pt-10 expand duration-300"
        >
          <div className="w-24">
            <img
              className="w-full bg-blue-500 py-2 "
              src="/images/neetwork.png"
              alt="einzas"
            />
          </div>
          <article>
            <p className="font-bold text-xl">Neetwork Business School</p>
            <p>Online learning and teaching marketplace</p>
            <p>Digital marketing</p>
          </article>
        </a>
      </article>
      <article className="grid place-content-center overflow-hidden justify-center sm:max-w-[700px] sm:m-auto min-h-screen mx-5">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">Skills</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 pt-10">
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/html.png" alt="einzas" />
            <p className="font-bold">HTML</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/css.png" alt="einzas" />
            <p className="font-bold">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/js.png" alt="einzas" />
            <p className="font-bold">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/react.png" alt="einzas" />
            <p className="font-bold">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/angular.png" alt="einzas" />
            <p className="font-bold">Angular</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/node.png" alt="einzas" />
            <p className="font-bold">Node</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/java.png" alt="einzas" />
            <p className="font-bold">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/cpp.png" alt="einzas" />
            <p className="font-bold">C++</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20" src="/images/csharp.png" alt="einzas" />
            <p className="font-bold">C#</p>
          </div>
        </section>
      </article>
      <article className="grid place-content-center overflow-hidden justify-center sm:max-w-[700px] sm:m-auto min-h-screen mx-5">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Certificates
        </h1>
        <section className="grid  gap-10 pt-10">
          <article className="text-xl text-center grid place-content-center text-blue-400">
            <p>Front-end development with React</p>
            <span className="text-sm text-white">Academlo Bootcamp</span>
            <a
              href="https://certificates.academlo.com/en/verify/53800875053567"
              target="_blank"
              rel="noopener noreferrer"
              className="underline expand"
            >
              View Certificate <i className="bx bx-search underline"></i>
            </a>
          </article>

          <article className="text-xl text-center grid place-content-center text-blue-400">
            <p>Foundations in HTML, CSS and Javascript</p>
            <span className="text-sm text-white">Academlo Bootcamp</span>
            <a
              href="https://certificates.academlo.com/en/verify/29525648926441"
              target="_blank"
              rel="noopener noreferrer"
              className="underline expand"
            >
              View Certificate <i className="bx bx-search underline"></i>
            </a>
          </article>

          <article className="text-xl text-center grid place-content-center text-blue-400">
            <p>Angular: De cero a experto (Legacy)</p>
            <span className="text-sm text-white">Udemy</span>
            <a
              href="https://www.udemy.com/certificate/UC-d5df210f-78c6-4c89-a489-00e1e662499d/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline expand"
            >
              View Certificate <i className="bx bx-search underline"></i>
            </a>
          </article>

          <article className="text-xl text-center grid place-content-center text-blue-400">
            <p>Máster en Programación de Videojuegos con Unity® 2021 y C#</p>
            <span className="text-sm text-white">Udemy</span>
            <a
              href="https://www.udemy.com/certificate/UC-4c4ae662-84fc-4617-b202-2014c07c06ea/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline expand"
            >
              View Certificate <i className="bx bx-search underline"></i>
            </a>
          </article>

          <article className="text-xl text-center grid place-content-center text-blue-400">
            <p>Máster en Marketing Digital y Analítica Web</p>
            <span className="text-sm text-white">Neetwork Business School</span>
            <a
              href="https://www.credential.net/d0511c08-e299-4a06-b4f2-28c2d291c510#gs.0rjmrb"
              target="_blank"
              rel="noopener noreferrer"
              className="underline expand"
            >
              View Certificate <i className="bx bx-search underline"></i>
            </a>
          </article>
        </section>

        <Link className="my-20  w-24 expand " to="/">
          Go back
        </Link>
      </article>
    </>
  );
};

export default About;
