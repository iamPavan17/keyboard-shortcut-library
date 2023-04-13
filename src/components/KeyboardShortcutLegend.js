import React from "react";

export default function KeyboardShortcutLegend({
  keyboardCombos,
  handleKeyboardCombo,
}) {
  return (
    <div className="component-wrapper keyboard-legend">
      {keyboardCombos.map((item) => (
        <div key={item.id} className="keyboard-combo-list">
          <p className={!item.isActive && "unbind-text"}>
            {item.keyboardCombo.split(" ").join("-")}({item.description})
          </p>
          <button onClick={() => handleKeyboardCombo(item.id, "bindToggle")}>
            {item.isActive ? "un" : ""} bind
          </button>
          <button>reset</button>
        </div>
      ))}
    </div>
  );
}
