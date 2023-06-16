import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";

function Bloglist() {
  const nav = useNavigate();
  const data = useContext(Context);
  const { state, setstate } = data;
  return (
    <div>
      {" "}
      <h1 className="m-5">Bloglist</h1> <br />
      {state == "" ? (
        <h1 className="container rounded-1 bg-danger-subtle w-25 p-5 m-auto">
          Nothing to see here....
        </h1>
      ) : (
        state.map((a, o) => (
          <div>
            <button
              className="bg-success-subtle container rounded-3 w-25 m-auto mt-2 border-0 p-3"
              onClick={() => {
                nav(`/blogs/${a.id}`);
              }}
            >
              {a.title}
            </button>{" "}
            <button
              onClick={() => setstate((c) => (c = c.filter((d, e) => e != o)))}
              className="border-0 rounded-3 bg-danger-subtle p-3"
            >
              delete
            </button>
          </div>
        ))
      )}
      <Link to="/createblog">
        <button className="border-0 rounded-3 bg-dark-subtle p-3 shadow m-5">Create Post</button>
      </Link>
    </div>
  );
}

export default Bloglist;
