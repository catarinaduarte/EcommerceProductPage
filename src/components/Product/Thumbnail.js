import styles from "./Thumbnail.module.css";

const Thumbnail = (props) => {
  return (
    <img
      className={`${styles.thumbnail} ${props.active}`}
      src={props.img}
      onClick={props.onClick}
      alt="thumbnail"
      id={props.id}
    ></img>
  );
};

export default Thumbnail;
