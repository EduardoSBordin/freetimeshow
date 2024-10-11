import "../../styles/Series.css";
import React, { useState } from "react";
import NavbarCategories from "../NavbarCategories";
function Patroa() {
  function openModalSeasons() {
    document.querySelector(".modalSeasons").style.display = "block";
  }

  function openModalS1() {
    document.querySelector(".firstSeasonLinks").style.display = "block";
    document.querySelector(".secondSeasonLinks").style.display = "none";
  }
  function openModalS2() {
    document.querySelector(".firstSeasonLinks").style.display = "none";
    document.querySelector(".secondSeasonLinks").style.display = "block";
  }

  function ep1S1() {
    document.querySelector(".ep1S1").style.display = "block";
    document.querySelector(".ep2S1").style.display = "none";
    document.querySelector(".ep1S2").style.display = "none";
    document.querySelector(".ep2S2").style.display = "none";

    document.querySelector(".modalSeasons").style.display = "none";
  }
  function ep2S1() {
    document.querySelector(".ep1S1").style.display = "none";
    document.querySelector(".ep2S1").style.display = "block";
    document.querySelector(".ep1S2").style.display = "none";
    document.querySelector(".ep2S2").style.display = "none";

    document.querySelector(".modalSeasons").style.display = "none";
  }

  function ep1S2() {
    document.querySelector(".ep1S1").style.display = "none";
    document.querySelector(".ep2S1").style.display = "none";
    document.querySelector(".ep1S2").style.display = "block";
    document.querySelector(".ep2S2").style.display = "none";

    document.querySelector(".modalSeasons").style.display = "none";
  }
  function ep2S2() {
    document.querySelector(".ep1S1").style.display = "none";
    document.querySelector(".ep2S1").style.display = "none";
    document.querySelector(".ep1S2").style.display = "none";
    document.querySelector(".ep2S2").style.display = "block";

    document.querySelector(".modalSeasons").style.display = "none";
  }

  return (
    <section className="main">
      <NavbarCategories />
      <div
        className="divContainer"
        id="divContainer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/c2CjuL5gPHSEBumrlsyZiMLAAMZ.jpg)`,
          backgroundAttachment: "scroll",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <div className="divTxt">
            <h1 id="titleAbout">Chaves</h1>

            <a href="#navSeason" id="btnWatch">
              Assistir
            </a>
          </div>
        </div>
      </div>

      <div className="about">
        <p id="textAbout">
          El Chavo del Ocho (Chaves no Brasil), ou simplesmente El Chavo, foi um
          seriado de televisão mexicano criado, roteirizado, dirigido e
          estrelado por Roberto Gómez Bolaños (conhecido como Chespirito),
          produzido pela Televisa e exibido pelo então Canal 2. O elenco
          principal é composto por Roberto Gómez Bolaños, Carlos Villagrán,
          Ramón Valdés, Florinda Meza, María Antonieta de las Nieves, Edgar
          Vivar, Rubén Aguirre, Angelines Fernández, Horacio Gómez e Raúl
          Padilla.
        </p>

        <div className="infoAbout">
          <p className="yearRelease">Lançamento: 1973</p>
          <p className="typeGenres">Genêro: Comédia, Família, Drama </p>
          {/* <p className="durationTime">Duração: 5 Temporadas</p> */}
        </div>
      </div>

      <div className="navSeason" id="navSeason">
        <div className="divbtnSeasons">
          <button onClick={openModalSeasons} className="btnSeasons">
            Temporadas
          </button>

          <div className="modalSeasons">
            <button className="btnSeasons" onClick={openModalS1}>
              1° Temporada
            </button>
            <button className="btnSeasons" onClick={openModalS2}>
              2° Temporada
            </button>
          </div>
        </div>

        <div className="btnEp">
          <div className="firstSeasonLinks">
            <button className="btsnEp" onClick={ep1S1}>
              EP-1
            </button>
            <button className="btsnEp" onClick={ep2S1}>
              EP-2
            </button>
          </div>

          <div className="secondSeasonLinks">
            <button className="btsnEp" onClick={ep1S2}>
              EP-1-S2
            </button>
            <button className="btsnEp" onClick={ep2S2}>
              EP-2-S2
            </button>
          </div>
        </div>
      </div>

      <div id="videoContent" className="videoContent">
        <iframe
          className="ep1S1"
          id="iframe"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/PExtlFr-VEM?si=qwmzXfAkVGgXrTeN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="ep2S1"
          id="iframe"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/uoTyoWol8kg?si=plfkZP-SJ7EsGdrj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <iframe
          className="ep1S2"
          id="iframe"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/Bbk1mfcOrKg?si=IYyq0XpKIl8TmOn8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="ep2S2"
          id="iframe"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/z_6hQxwd9a0?si=tnlhxvRYl4Oxz15C"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}
export default Patroa;
