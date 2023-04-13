import React from "react";

export default function KeyboardShortcutLegend({ shortcutCombos }) {
  return (
    <div className="component-wrapper keyboard-legend">
      {shortcutCombos.map((item) => (
        <p key={item.id} className="list-text">
          {item.keyboardCombo} - {item.description}
        </p>
      ))}
    </div>
  );
}
