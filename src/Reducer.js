import { useReducer } from "react";

const Reducer = () => {
  const ensureColorInterval = (color) => {
    return color < 0 ? 0 : color > 255 ? 255 : color;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "incrementR":
        return Object.assign({}, state, {
          R: ensureColorInterval(state.R + 15)
        });
      case "decrementR":
        return Object.assign({}, state, {
          R: ensureColorInterval(state.R - 15)
        });
      case "incrementG":
        return Object.assign({}, state, {
          G: ensureColorInterval(state.G + 15)
        });
      case "decrementG":
        return Object.assign({}, state, {
          G: ensureColorInterval(state.G - 15)
        });
      case "incrementB":
        return Object.assign({}, state, {
          B: ensureColorInterval(state.B + 15)
        });
      case "decrementB":
        return Object.assign({}, state, {
          B: ensureColorInterval(state.B - 15)
        });
      default:
        return state;
    }
  };

  const [{ R, G, B }, dispatch] = useReducer(reducer, { R: 0, G: 0, B: 0 });

  return (
    <div>
      <h1 style={{ color: `rgb(${R},${G},${B})` }}>USE REDUCER</h1>
      <div>
        R{" "}
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: "incrementR" })}
        >
          +
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: "decrementR" })}
        >
          -
        </button>
      </div>
      <div>
        G{" "}
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: "incrementG" })}
        >
          +
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: "decrementG" })}
        >
          -
        </button>
      </div>
      <div>
        B{" "}
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: "incrementB" })}
        >
          +
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: "decrementB" })}
        >
          -
        </button>
      </div>
      <h2> {`rgb(${R},${G},${B})`} </h2>
    </div>
  );
};

export default Reducer;
