const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const login = () => {
  return {
    type: "LOG_IN",
  };
};

const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export { increment, decrement, login, logout };
