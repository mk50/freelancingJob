import { useEffect, useRef, useState } from "react";
import Modal from "../UI/Modal";
import { BiX } from "react-icons/bi";
import classes from "./CameraComponent.module.scss";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import xdCamera from "../../assets/camera.svg";

const CameraComponent = (props) => {
  const filesImagesDefaultValue = localStorage.getItem("filesImages")
    ? JSON.parse(localStorage.getItem("filesImages"))
    : [];

  const [filesImages, setFilesImages] = useState(filesImagesDefaultValue);

  const imagesInputRef = useRef();

  useEffect(() => {
    localStorage.setItem("filesImages", JSON.stringify(filesImages));
  }, [filesImages]);

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...

    setFilesImages((prevState) => prevState.concat(dataUri));
    setTimeout(() => {
      props.onHide();
    }, 600);
  }
  const onUploadImageHandler = (e) => {
    if (window.File && window.FileList && window.FileReader) {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        //Only pics
        if (!file.type.match("image")) continue;
        let picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
          let picFile = event.target;
          setFilesImages((prevState) => {
            return prevState.concat(picFile.result);
          });
        });
        //Read the image
        picReader.readAsDataURL(file);
        setTimeout(() => {
          props.onHide();
        }, 600);
      }
    } else {
      console.log("Your browser does not support File API");
    }
  };
  return (
    <Modal onHide={props.onHide}>
      <span className={classes["camera__close"]} onClick={props.onHide}>
        <BiX />
      </span>
      <div className={classes.camera}>
        <Camera
          onTakePhoto={(dataUri) => {
            handleTakePhoto(dataUri);
          }}
        />
      </div>

      <div className={classes["camera__upload-image"]}>
        <h2 className={classes["camera__upload-image--option"]}>OR</h2>
        <div
          className={classes["camera__upload-image--btn"]}
          //   onClick={() => setShowModal(true)}
        >
          <span className={classes["camera__upload-image--btn--display"]}>
            <span className={classes["camera__upload-image__icon"]}>
              <span>
                <img src={xdCamera} alt="" />
              </span>
            </span>{" "}
            Tap to add image
          </span>
          <input
            ref={imagesInputRef}
            onChange={onUploadImageHandler}
            type="file"
            multiple
            className={classes["camera__upload-image--btn--hide"]}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CameraComponent;
