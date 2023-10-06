import React from "react";
import { MisdemeanourKind, JustTalk } from "./types/misdemeanours.types";

type Reason = MisdemeanourKind | JustTalk;

type Props = {
  value: Reason;
  onChange: (value: Reason) => void;
};

const ReasonDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="reason">Reason:</label>
      <select
        id="reason"
        value={value}
        onChange={(e) => onChange(e.target.value as Reason)}
      >
        <option value="ALL 🤪 🗣 🥗 😈"> ALL Misdemeanours 🤪 </option>
        <option value="rudeness 🤪"> Mild Public Rudeness 🤪 </option>
        <option value="lift 🗣"> Speaking in a Lift 🗣 </option>
        <option value="vegetables 🥗"> Not Eating Your Vegetables 🥗 </option>
        <option value="united 😈"> Supporting Manchester United 😈 </option>
      </select>
    </div>
  );
};

export default ReasonDropdown;
