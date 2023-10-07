const Step = ({ style, title, index, last }) => {
  return (
    <div className={`Step-${style}`}>
      <div className={`info${last ? "-last" : ""} `}>
        <div className="circle">
          <span className="num">
            {style === "prev" ? <p>&#10003;</p> : index + 1}
          </span>
        </div>
        <p className="title">{title}</p>
      </div>
    </div>
  );
};
export default Step;
