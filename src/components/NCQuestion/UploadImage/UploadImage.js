import { Fragment, useEffect, useState } from "react";
import xdCamera from "../../../assets/camera.svg";
import { BiX } from "react-icons/bi";
import classes from "./UploadImage.module.scss";
import CameraComponent from "../../CameraComponent/CameraComponent";

const UploadImage = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [filesImages, setFilesImages] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("filesImages")) {
      setFilesImages(JSON.parse(localStorage.getItem("filesImages")));
    }
  }, [showModal]);

  const removeImageHandler = (id, e) => {
    const tempFilesImages = [...filesImages];
    tempFilesImages.splice(id, 1);
    setFilesImages(tempFilesImages);
    localStorage.setItem("filesImages", JSON.stringify(tempFilesImages));
  };

  const onHideModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      {showModal && <CameraComponent onHide={onHideModal} />}
      <div
        className={`${classes["upload-image"]} ${
          classes[
            `upload-image--${
              props.className === "secondary"
                ? "secondary"
                : props.className === "primary"
                ? "primary"
                : "tertiary"
            }`
          ]
        }`}
      >
        <ul className={`${classes["upload-image__thumbnails"]} list-unstyled`}>
          {filesImages.length > 0 &&
            filesImages.map((file, index) => {
              return (
                <li
                  className={classes["upload-image__item"]}
                  key={index}
                  onClick={removeImageHandler.bind(null, index)}
                >
                  <img
                    src={file}
                    className={`${classes["upload-image__img"]} img-fluid`}
                    alt="img1"
                  />
                  <span className={classes["upload-image__close"]}>
                    <BiX />
                  </span>
                </li>
              );
            })}
        </ul>
        <div
          className={classes["upload-image__btn"]}
          onClick={() => setShowModal(true)}
        >
          <span className={classes["upload-image__btn--display"]}>
            <span className={classes["upload-image__icon"]}>
              <span>
                <img src={xdCamera} alt="" />
              </span>
            </span>{" "}
            Tap to add/capture image
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default UploadImage;
