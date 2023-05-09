import React, { useState } from "react";
import { FaqsData } from "./Data";
import FAQ from "./FAQ";
import style from "./faqs.module.css";

const FAQs = () => {
  const [faqs] = useState(FaqsData);
  return (
    <main className={style.container}>
      <section className={style.faqs}>
        <h1 style={{ textAlign: "center" }}>FAQs (using react.js)</h1>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default FAQs;
