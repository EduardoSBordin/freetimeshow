import "../../styles/Hamburguer.css";

import NavbarCategories from "../NavbarCategories";

function Hamburguer() {
  return (
    <section className="main">
      <NavbarCategories />
      <div
        className="divContainer"
        id="divContainer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/2C5GntcURQksTc3ZpnEZtTQnJ8I.jpg)`,
          backgroundAttachment: "scroll",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <div className="divTxt">
            <h1 id="titleAbout">Pica-Pau </h1>

            <a href="#iframe" id="btnWatch">
              Assistir
            </a>
          </div>
        </div>
      </div>

      <div className="about">
        <p id="textAbout">
          O Pica-Pau conta a seus sobrinhos sobre a história gloriosa de seus
          antepassados.
        </p>

        <div className="infoAbout">
          <p className="yearRelease">Lançamento: 1957</p>
          <p className="typeGenres">Genêro: Comédia, Animação</p>
          <p className="durationTime">Duração: 1h</p>
        </div>
      </div>

      <div id="videoContent" className="videoContent">
        <iframe
          id="iframe"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/1mjCOBpAxi4?si=xSMX2OHA9EASCc8O"
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
export default Hamburguer;
