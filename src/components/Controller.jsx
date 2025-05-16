import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controller() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.substract(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <div className="d-grid gap-2 ">
      <button type="button" className="btn btn-warning" onClick={handlePrivacy}>
        Privacy
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleDecrement}
      >
        -1
      </button>

      <div className="d-grid gap-2  row-counter">
        <div className="input-group">
          <textarea
            className="form-control"
            aria-label="With textarea"
            ref={inputElement}
          ></textarea>
        </div>
        <button type="button" className="btn btn-secondary" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSubtract}
        >
          SUBTRACT
        </button>
      </div>
    </div>
  );
}

export default Controller;
