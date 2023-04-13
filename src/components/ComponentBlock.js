import { useEffect } from "react";

export default function ComponentBlock({
  listener,
  keyboardComboData,
  handleKeyboardCombos,
}) {
  useEffect(() => {
    listener.simple_combo(keyboardComboData.keyboardCombo, function () {
      handleKeyboardCombos(keyboardComboData.id);
    });
  }, [listener, keyboardComboData, handleKeyboardCombos]);

  return (
    <div
      className="component-wrapper"
      style={{ backgroundColor: keyboardComboData.color }}
    >
      {keyboardComboData.componentName}
    </div>
  );
}
