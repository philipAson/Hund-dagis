import React, { useEffect, useState } from "react";

const TestButton = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // körs första gången komponenten renderas. passar sig till API anrop
    console.log("useEffect []")

  }, [setData(true)]);

  useEffect(() => {
    // körs första gången komponenten renderas
    // körs varje gång data uppdateras
    console.log("useEffect [data]")

  }, [data]);


  return (
    <div>
      {data}
      <button onClick={() => setData(true)}>TRÖCK!!</button>
    </div>
  );
};

const Hooks = () => {
  return <TestButton />;
};

export default Hooks;
