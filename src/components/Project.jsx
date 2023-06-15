import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <article className="sm:max-w-[700px] sm:m-auto mx-5 min-h-screen overflow-hidden pt-5">
      <h1 className="text-3xl underline text-blue-400">My Projects</h1>

      <a
        href="https://einzas-ecommerce.netlify.app"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/ecommerce.png" alt="ecommerce" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Ecommerce</h2>
          <p>
            Experience a fully functional online store that offers seamless user
            interactions. Create a personalized account and effortlessly log in
            from any device to access a wide range of features. Easily add
            products to your cart, customize quantities, and simulate the
            purchase process. Enjoy the convenience of editing your cart and
            accessing a comprehensive purchase history. Our platform ensures
            that your account details and product preferences are securely
            stored and readily available.
          </p>
        </article>
      </a>

      <a
        href="https://pokedex-einzas.netlify.app"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/pokedex.png" alt="pokedex" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Pokedex</h2>
          <p>
            The Pokedex is a digital encyclopedia created to catalog and provide
            information regarding the various species of Pokemon. The name
            Pokedex is a portmanteau of the words “Pokemon” and “index”. The
            Pokedex is one of the most important items for all Pokemon Trainers.
            It contains information on more than 800 Pokemon. The Pokedex is an
            electronic device designed to catalogue and provide information
            regarding the various species of Pokemon featured in the Pokemon
            video game, anime and manga series. The name Pokedex is a
            portmanteau of the words “Pokemon” and “index”.
          </p>
        </article>
      </a>

      <a
        href="https://creative-salmiakki-f91827.netlify.app"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/rick.png" alt="rick" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">
            Rick and Morty App
          </h2>
          <p>
            The Rick and Morty API is a RESTful and GraphQL API based on the
            television show Rick and Morty. You will have access to about
            hundreds of characters, images, locations and episodes. The Rick and
            Morty API is filled with canonical information as seen on the TV
            show. This includes character, location and episode pages which all
            render dynamic information. The Rick and Morty API is an open source
            project created by the fans of Rick and Morty. The Rick and Morty
            API allows you to access information on the television show Rick and
            Morty. You can access character information, location information,
            and episode information.
          </p>
        </article>
      </a>

      <a
        href="https://beautiful-profiterole-41461a.netlify.app"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/weather.png" alt="Weather" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Weather App</h2>
          <p>
            The Weather App is a simple application that allows you to check the
            weather in any city in the world.
          </p>
        </article>
      </a>

      <a
        href="https://aquamarine-lily-5a52ac.netlify.app"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/phrase.png" alt="Phrases" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Phrases App</h2>
          <p>
            This application provides the capability to generate a random
            space-themed phrase.
          </p>
        </article>
      </a>

      <h2 className="text-2xl my-8 text-center text-blue-400">Angular</h2>

      <a
        href="http://tests-einza.epizy.com/peliculasapp/#/home"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/pelicula.png" alt="Movies" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Movies App</h2>
          <p>
            This application provides the capability to search for movies and
            series.
          </p>
        </article>
      </a>

      <a
        href="http://tests-einza.epizy.com/mapasapp/"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/mapas.png" alt="Maps" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Maps App</h2>
          <p>
            This application provides the capability to search for places on the
            map.
          </p>
        </article>
      </a>

      <a
        href="http://tests-einza.epizy.com/youtubeapp/"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/youtube.png" alt="Youtube" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Youtube App</h2>
          <p>
            This application provides the capability to search for videos on
            Youtube.
          </p>
        </article>
      </a>

      <h2 className="text-2xl my-8 text-center text-blue-400">
        Colab C# Unity
      </h2>

      <a
        href="https://play.google.com/store/apps/details?id=com.Orsicen.Ultifight&hl=es_EC&gl=US"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-2 items-center"
      >
        <div className="pl-3">
          <img src="/images/juego.png" alt="Juego" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Ultifight</h2>
          <p>
            UltiFight: Embark on the thrilling challenge of becoming the
            ultimate eliminator of foes. Indulge in an exhilarating display of
            mental agility, showcasing your lightning-fast reflexes in an
            adrenaline-pumping experience. Take command of a warrior character
            and revel in the joy of mastering this action-packed game.
          </p>
        </article>
      </a>

      <h2 className="text-2xl my-8 text-center text-blue-400">
        Marketing Digital Works
      </h2>

      <a
        href="https://arasha.com.ec"
        target="_blank"
        className="expand duration-300 border-l-2 mt-10 gap-2 border-l-blue-400 grid sm:grid-cols-1 items-center"
      >
        <div className="pl-3">
          <img src="/images/ARASHA.jpg" alt="Arasha" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">Arasha</h2>
          <p>
            Experience the enchantment of unparalleled landscapes that will
            accompany you during each of your magical walks at the Arasha Resort
            Spa. Immerse yourself in the rich biodiversity of flora and fauna,
            where you can indulge in the delicate intricacies of our Mother
            Nature and deepen your understanding of her exquisite sensitivity.
          </p>
        </article>
      </a>

      <a
        href="https://www.utelvt.edu.ec/site/"
        target="_blank"
        className="expand duration-300 border-l-2 my-10 gap-2 border-l-blue-400 grid sm:grid-cols-1 items-center"
      >
        <div className="pl-3">
          <img src="/images/UNI.png" alt="UTELVT" />
        </div>
        <article className="pl-3 sm:pl-0 grid">
          <h2 className="text-2xl underline text-blue-400">
            UTELVT - Universidad Técnica Luis Vargas Torres
          </h2>
          <p>
            The Technical University Luis Vargas Torres is a public university
            located in the city of Esmeraldas, Ecuador. It was created on
            October 10, 1970. It is the second oldest university in the
            province, after the Central University of Ecuador, and the third
            oldest in the country, after the Central University of Ecuador and
            the National Polytechnic School.
          </p>
        </article>
      </a>
      <Link className="w-24 expand" to="/">
        Go back
      </Link>
      <div className="my-10"></div>
    </article>
  );
};

export default Project;
