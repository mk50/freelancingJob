import { useRef, useState } from "react";
import AssignTag from "./AssignTag/AssignTag";
import classes from "./AssignTo.module.scss";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

const AssignTo = (props) => {
  const [isValidProps] = useState(!!Object.keys(props).length);

  const [assigns, setAssigns] = useState(isValidProps ? props.assigns : []);
  const [counterId, setCounterId] = useState(
    isValidProps ? props.assigns.length + 1 : 1
  );
  const assignInputRef = useRef();

  const addAssignHandler = (e) => {
    if (e.which === 13) {
      setAssigns((prevState) => {
        return prevState.concat({
          id: counterId,
          text: assignInputRef.current.value,
        });
      });
      setCounterId((prevState) => prevState + 1);
      setTimeout(() => {
        assignInputRef.current.value = "";
      }, 200);
    }
  };

  const removeAssignHandler = (id) => {
    const updatedAssigns = [...assigns].filter((assign) => assign.id !== id);
    setAssigns(updatedAssigns);
  };

  return (
    <div className={classes.assign}>
      <div className={classes["assign__wrapper"]}>
        <div className={classes["assign__tags"]}>
          <AssignTag type="primary">CCI Sudip Kumar</AssignTag>
          {assigns &&
            assigns.length > 0 &&
            assigns.map((assign, index) => {
              return (
                <div
                  key={index}
                  className={classes["assign__removeable"]}
                  onClick={removeAssignHandler.bind(null, assign.id)}
                >
                  <span className={classes["assign__close"]}>
                    <FiX />
                  </span>
                  <AssignTag type="primary" key={index}>
                    {assign.text}
                  </AssignTag>
                </div>
              );
            })}
          {/* <AssignTag>CCI Sudip Kumar</AssignTag> */}
        </div>
        <input
          ref={assignInputRef}
          type="text"
          onKeyDown={addAssignHandler}
          className={classes["assign__input"]}
          placeholder="Tap to assign responsibility"
        />
      </div>
    </div>
  );
};

export default AssignTo;
