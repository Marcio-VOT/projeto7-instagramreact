import react from "react";
import React from "react";
export default () => {
  const postConteudo = [
    {
      usuarioIMG: "assets/meowed.svg",
      usuario: "meowed",
      conteudoIMG: "assets/gato-telefone.svg",
      curtidoPor: "respondeai",
      likesPost: 101523,
    },
    {
      usuarioIMG: "assets/barked.svg",
      usuario: "barked",
      conteudoIMG: "assets/dog.svg",
      curtidoPor: "respondeai",
      likesPost: 101523,
    },
  ];
  return (
    <div className="posts">
      {postConteudo.map((f) => (
        <Post
          key={f.usuario}
          usuarioIMG={f.usuarioIMG}
          usuario={f.usuario}
          conteudoIMG={f.conteudoIMG}
          curtidoPor={f.curtidoPor}
          likesPost={f.likesPost}
        />
      ))}
    </div>
  );
};

function Post(props) {
  const lista = [props];
  return (
    <div data-test="post" className="post">
      {lista.map((f) => (
        <Topo key={f} topo={f} />
      ))}
      {lista.map((f) => (
        <Fundo key={f} fundo={f} conteudo={f} />
      ))}
    </div>
  );
}
function Topo(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={props.topo.usuarioIMG} />
        {props.topo.usuario}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Fundo(props) {
  const [likes, setLikes] = React.useState(false);
  const [book, setBook] = React.useState(false);
  const [anima, setAnima] = react.useState("animado");

  function likeImagem() {
    setLikes(true);
    setAnima("animado animate");
    setTimeout(() => {
      setAnima("animado");
    }, 800);
  }

  return (
    <React.Fragment>
      <div onDoubleClick={likeImagem} className="conteudo">
        <div className={anima}>
          <ion-icon name="heart"></ion-icon>
        </div>
        <img
          data-test="post-image"
          onDoubleClick={likeImagem}
          src={props.conteudo.conteudoIMG}
        />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={() => setLikes(!likes)}
              name={likes ? "heart" : "heart-outline"}
              style={likes ? { color: "red" } : { color: "" }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              onClick={() => setBook(!book)}
              name={book ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/respondeai.svg" />
          <div className="texto">
            Curtido por <strong>{props.fundo.curtidoPor}</strong> e
            <strong data-test="likes-number">
              {" "}
              outras{" "}
              {likes
                ? (props.fundo.likesPost + 1).toLocaleString("pt-BR")
                : props.fundo.likesPost.toLocaleString("pt-BR")}{" "}
              pessoas
            </strong>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
