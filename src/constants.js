import randomColor from "randomcolor";

const defaultKeyboardCombos = [
  {
    id: 1,
    componentName: "Component A",
    keyboardCombo: "shift a",
    color: randomColor(),
    description: "Turns to some color for Component A",
    isActive: true,
  },
  {
    id: 2,
    componentName: "Component B",
    keyboardCombo: "shift s",
    color: randomColor(),
    description: "Turns to some color for Component B",
    isActive: true,
  },
  {
    id: 3,
    componentName: "Component C",
    keyboardCombo: "shift d",
    color: randomColor(),
    description: "Turns to some color for Component C",
    isActive: true,
  },
];
export { defaultKeyboardCombos };
