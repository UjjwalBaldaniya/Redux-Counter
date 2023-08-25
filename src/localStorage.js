export const loadState = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};
