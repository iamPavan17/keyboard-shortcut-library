import { useEffect } from "react";

export default function ComponentBlock({
  listener,
  keyboardComboData,
  handleKeyboardCombo,
}) {
  useEffect(() => {
    if (keyboardComboData.isActive)
      listener.simple_combo(keyboardComboData.keyboardCombo, function () {
        handleKeyboardCombo(keyboardComboData.id, "colorChange");
      });
  }, [listener, keyboardComboData, handleKeyboardCombo]);

  return (
    <div
      className="component-wrapper"
      style={{ backgroundColor: keyboardComboData.color }}
    >
      {keyboardComboData.componentName}
    </div>
  );
}
