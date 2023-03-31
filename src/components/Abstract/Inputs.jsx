import { useState } from "react";
import Suggester from "../Schedular/Suggester";
const Inputs = ({ placeholder,showSuggestion }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const changeHanlder = (e) => {
    setValue(e.target.value)
    if(value.length > 2){
      setFocused(false)
    }else{
      setFocused(true)
    }
  }
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-bgprimary border border-borderprimary rounded-lg w-full outline-none text-secondary py-4 px-3 capitalize"
        onFocus={() => setFocused(true)}
        onChange={changeHanlder}
        value={value}
      />
      {focused && showSuggestion && (
        <div className=" absolute top-[60px] left-1 right-0">
          <Suggester />
        </div>
      )}
    </div>
  );
};

export default Inputs;
