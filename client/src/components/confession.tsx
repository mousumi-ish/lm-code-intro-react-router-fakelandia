//const Confession: React.FC = () => <>Confession!</>;
import React, { useState } from "react";

export interface interfaceConfesTextProps {
  confesText: string;

  onChangeConfesText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Confession: React.FC = () => {
  const [confesTextComponent, setconfesTextComponent] =
    useState(" confes & relax ");

  return (
    <>
      <h3> Confession </h3>

      <form>
        <input
          type="submit"
          value={confesTextComponent}
          onChange={(event) => setconfesTextComponent(event.target.value)}
        ></input>
      </form>
    </>
  );
};

export default Confession;
