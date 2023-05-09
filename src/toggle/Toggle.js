import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && (
        <div
          style={{ backgroundColor: "pink", margin: "1rem", padding: "1rem" }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus animi delectus esse maiores atque quo illum, sunt
            tenetur, eaque natus sed mollitia ducimus praesentium excepturi
            quam, reprehenderit odit iusto saepe.
          </p>
        </div>
      )}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default Toggle;
