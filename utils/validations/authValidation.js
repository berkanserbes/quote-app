import Toast from "react-native-toast-message";

export const validateEmail = (email) => {
  if (!email) {
    Toast.show({
      type: "error",
      text1: "Email is required!",
      text1Style: {
        fontSize: 15,
        fontWeight: "500",
      },
      position: "bottom",
    });
    return false;
  }
  return true;
};

export const validatePassword = (password) => {
  if (!password) {
    Toast.show({
      type: "error",
      text1: "Password is required!",
      text1Style: {
        fontSize: 15,
        fontWeight: "500",
      },
      position: "bottom",
    });
    return false;
  }
  return true;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    Toast.show({
      type: "error",
      text1: "Password do not match!",
      text1Style: {
        fontSize: 15,
        fontWeight: "500",
      },
      position: "bottom",
    });
    return false;
  }
  return true;
};
