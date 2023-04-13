import randomColor from "randomcolor";

// A function that returns a random number between 97 to 122 (to map ascii character) - considering only between a-z.
const getRandomArbitrary = () => {
  return Math.random() * (122 - 97) + 97;
};

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
  if (type === "newCombo") {
    // Only toggling the last character in the combo.
    const value = keyboardCombosClone[selectedComboIndex].keyboardCombo;
    listener.unregister_combo(value);
    keyboardCombosClone[selectedComboIndex].keyboardCombo = `${
      value.split(" ")[0]
    } ${String.fromCharCode(getRandomArbitrary())}`;
  }

  return keyboardCombosClone;
};

export { keyboardCombosUpdater };
