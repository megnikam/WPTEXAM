import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [msg, setmsg] = useState("");
  const [list, setlist] = useState([]);

  const handlemsg = (e) => {
    setmsg(e.taget.value);
  };

  const adduser = async () => {
    const url = "http://localhost:4000/addmsg";
    const data = {
      msg: msg,
    };

    await axios.post(url.data);
    const newlist = [msg, ...list];
    setlist(newlist);

    setmsg("");
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-3">MyChatApp</h1>
      <div>
        <input
          className="form-control form-control-lg p-3 mb-1"
          type="text"
          name=""
          id=""
          placeholder="lets chat here"
          onChange={handlemsg}
        />
      </div>
      <div>
        <input
          className="btn  "
          type="button"
          value="send"
          onChange={adduser}
        />
      </div>

      {list.map((item, index) => {
        <div key={"index"}>{item.msg}</div>;
      })}
    </div>
  );
}
