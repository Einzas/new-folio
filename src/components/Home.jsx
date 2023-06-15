import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const texts = ["Web Developer", "Frontend Developer", "Backend Developer"];
  const [secondText, setSecondText] = useState(texts[0]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggleMusic = () => {
    const audioElement = document.getElementById("background-music");
    if (isMusicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const writeText = (text, index, callback) => {
      if (index < text.length) {
        setSecondText((prevText) => prevText + text.charAt(index));
        timeoutId = setTimeout(() => {
          writeText(text, index + 1, callback);
        }, 100);
      } else {
        setTimeout(callback, 1500);
      }
    };

    const changeText = () => {
      currentIndex = (currentIndex + 1) % texts.length;
      const nextText = texts[currentIndex];

      setSecondText("");
      clearTimeout(timeoutId);

      setTimeout(() => {
        writeText(nextText, 0, () => {
          setSecondText(nextText);
          timeoutId = setTimeout(changeText, 3000);
        });
      }, 1000);
    };

    timeoutId = setTimeout(changeText, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <article className="flex mx-10 relative items-center sm:max-w-[700px] sm:mx-auto justify-between place-content-center min-h-screen">
      <header className="absolute top-10 gap-2 flex">
        <span className="text first-text">I'm a</span>
        <span className="text second-text">{secondText}</span>
      </header>
      <nav>
        <ul className="grid gap-8 sm:text-2xl text-center">
          <li className="expand  hover:bg-blue-500 py-2 px-3 transition-colors duration-300">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="expand duration-300">
            <Link
              className="hover:bg-blue-500 py-2 px-3 transition-colors duration-300"
              to={"/projects"}
            >
              Projects
            </Link>
          </li>
          <li className="expand duration-300">
            <Link
              className="hover:bg-blue-500 py-2 px-3 transition-colors duration-300"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pingu max-w-[200px]">
        <img src="/images/logo.png" onClick={toggleMusic} alt="einzas" />
        <audio id="background-music" src="/songs/val.mp3" loop />
      </div>
    </article>
  );
};

export default Home;
