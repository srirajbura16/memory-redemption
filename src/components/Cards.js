import './Cards.css';

const Cards = (props) => {
  const { characters, handleClick } = props;

  return (
    <div className="Cards">
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            img={character.img}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

const Card = (props) => {
  const { name, img, id, handleClick } = props;

  return (
    <div className="card" id={id} onClick={handleClick}>
      <div className="card-img" id={id}>
        <img src={window.location.origin + `/assets/${img}`} id={id} />
      </div>
      <div id={id}>{name}</div>
    </div>
  );
};

export default Cards;
