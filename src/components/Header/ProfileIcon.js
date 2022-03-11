import styles from "./ProfileIcon.module.css";

const ProfileIcon = () => {
  return (
    <img
      className={styles["profile-icon"]}
      src={require("../../assets/images/image-avatar.png")}
      alt="profile-icon"
    ></img>
  );
};

export default ProfileIcon;
