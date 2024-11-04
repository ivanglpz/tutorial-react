import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ADD_ITEM, REMOVE_ITEM, Selector } from "./redux/actions";
import { useState } from "react";

function App() {
  const state = useSelector((e: Selector) => e?.items);

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e?.target?.value);
        }}
      />
      <ul>
        {state?.map((e) => {
          return (
            <li key={e?.index}>
              <p>index:{e?.index}</p>
              <p>value:{e?.value}</p>
              <button onClick={() => dispatch(REMOVE_ITEM(e.index))}>
                borrar
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          dispatch(ADD_ITEM(text));
        }}
      >
        agregar
      </button>
      {/* {count > 5 ? <p>mayor a 5</p> : <p>no es mayor aun</p>} */}
      {/* test --- {numbers} */}
      {/* <p>{count > 5 ? "esto es mayor a 5" : "no es mayor a 5"}</p> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
