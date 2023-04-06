import React, { useContext } from "react";
import Cusion from "../Cusion/Cusion";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>grandpa money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <section className="flex">
        <Cusion>Nabil</Cusion>
        <Cusion>Nabila</Cusion>
      </section>
    </div>
  );
};

export default Uncle;
