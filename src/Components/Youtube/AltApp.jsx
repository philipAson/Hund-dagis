import React, { useState } from "react";
import Text from "./Text";

function AltApp() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="AltApp">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </div>
  );
};

export default AltApp;

/*
 There is 3 stages in the react lifecycle 
 
 -mounting (component appearing in your screen or starting to exist in your project)
 -updating (component is changing, ex prop or state has changed in the component)
 -unmounting (opposite of mounting)
 */
