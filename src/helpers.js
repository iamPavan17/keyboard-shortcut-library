import randomColor from "randomcolor";

const keyboardCombosUpdater = (keyboardCombos, id, type, listener) => {
  const keyboardCombosClone = [...keyboardCombos];
  const selectedComboIndex = keyboardCombos.findIndex(
    (combo) => combo.id === id
  );
  if (type === "colorChange") {
    keyboardCombosClone[selectedComboIndex].color = randomColor();
  }
  if (type === "bindToggle") {
    keyboardCombosClone[selectedComboIndex].isActive =
      !keyboardCombosClone[selectedComboIndex].isActive;
    listener.unregister_combo(
      keyboardCombosClone[selectedComboIndex].keyboardCombo
    );
  }

  return keyboardCombosClone;
};

export { keyboardCombosUpdater };
