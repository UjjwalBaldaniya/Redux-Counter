const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num
  };
};

const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num
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
