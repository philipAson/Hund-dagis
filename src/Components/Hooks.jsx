import React, { useEffect, useState } from "react";

const TestButton = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // körs första gången komponenten renderas. passar sig till API anrop

    // ALLTSÅ SETDATA
    console.log("useEffect []")

  }, []);

  useEffect(() => {
    // körs första gången komponenten renderas
    // körs varje gång count uppdateras
    console.log("useEffect []" + count)

  }, [count]);


  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>TRÖCK!!</button>
    </div>
  );
};

const Hooks = () => {
  return <TestButton />;
};

export default Hooks;
