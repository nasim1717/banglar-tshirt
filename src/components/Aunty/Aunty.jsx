import React from "react";
import Cusion from "../Cusion/Cusion";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cusion>Abir</Cusion>
        <Cusion hasFriend={true} ring={ring}>
          Nabir
        </Cusion>
      </section>
    </div>
  );
};

export default Aunty;
