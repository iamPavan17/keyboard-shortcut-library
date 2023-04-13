import { useState, useEffect } from "react";

import { keyboardCombosUpdater } from "./helpers";
import { defaultKeyboardCombos } from "./constants";
import ComponentBlock from "./components/ComponentBlock";
import KeyboardShortcutLegend from "./components/KeyboardShortcutLegend";

function App({ listener }) {
  const [keyboardCombos, setKeyboardCombos] = useState([
    ...defaultKeyboardCombos,
  ]);

  const handleKeyboardCombo = (id, type) => {
    /** This handler does the below,
     * Changes the color based on the keyboard combo.
     * Unbind the keyboard combo.
     * Create a new keyboard combo.
     */
    setKeyboardCombos(
      keyboardCombosUpdater(keyboardCombos, id, type, listener)
    );
  };

  useEffect(() => {
    return () => {
      listener.reset(); // Unregister all available combos on UNMOUNT
    };
  }, [listener]);

  return (
    <section>
      <h2 className="heading">Keyboard Shortcut Library</h2>
      <div className="container">
        {keyboardCombos.map((keyboardCombo) => (
          <ComponentBlock
            key={keyboardCombo.id}
            keyboardComboData={keyboardCombo}
            listener={listener}
            handleKeyboardCombo={handleKeyboardCombo}
          />
        ))}

        <KeyboardShortcutLegend
          keyboardCombos={keyboardCombos}
          handleKeyboardCombo={handleKeyboardCombo}
        />
      </div>
    </section>
  );
}

export default App;
