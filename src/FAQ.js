import React, { useState } from "react";
import style from "./faq.module.css";

const FAQ = ({ id, title, desc }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className={style.faq}>
      <div>
        <h3>{title}</h3>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "-" : "+"}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </section>
  );
};

export default FAQ;
