const Modals = (props) => {
  const { id, name, explanation, image } = props;
  return (
    <div className="modals" key={id}>
      <div>
        <img src={image} alt="" />
      </div>
      <span>{name}</span>
      <p>{explanation}</p>
    </div>
  );
};

export default Modals;
