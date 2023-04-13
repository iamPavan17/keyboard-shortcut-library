import { useState, useEffect } from "react";
import randomColor from "randomcolor";

import ComponentBlock from "./components/ComponentBlock";
import KeyboardShortcutLegend from "./components/KeyboardShortcutLegend";

function App({ listener }) {
  const [keyboardCombos, setKeyboardCombos] = useState([
    {
      id: 1,
      componentName: "Component A",
      keyboardCombo: "shift a",
      color: randomColor(),
      description: "Turns to some color for Component A",
    },
    {
      id: 2,
      componentName: "Component B",
      keyboardCombo: "shift s",
      color: randomColor(),
      description: "Turns to some color for Component B",
    },
    {
      id: 3,
      componentName: "Component C",
      keyboardCombo: "shift d",
      color: randomColor(),
      description: "Turns to some color for Component C",
    },
  ]);

  const handleKeyboardCombos = (id) => {
    const keyboardCombosClone = [...keyboardCombos];
    const selectedComboIndex = keyboardCombos.findIndex(
      (combo) => combo.id === id
    );
    keyboardCombosClone[selectedComboIndex].color = randomColor();
    setKeyboardCombos(keyboardCombosClone);
  };

  useEffect(() => {
    return () => {
      listener.reset(); // Unregister all available combos
    };
  }, [listener]);

  return (
    <div className="container">
      {keyboardCombos.map((keyboardCombo) => (
        <ComponentBlock
          key={keyboardCombo.id}
          keyboardComboData={keyboardCombo}
          listener={listener}
          handleKeyboardCombos={handleKeyboardCombos}
        />
      ))}

      <KeyboardShortcutLegend shortcutCombos={keyboardCombos} />
    </div>
  );
}

export default App;
