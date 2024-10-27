import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RegisterScreenUI from "./RegisterScreen.ui";
import { useRegisterMutation } from "../../redux/services/auth.service";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validations/authValidation";

const RegisterScreenContainer = () => {
  const navigation = useNavigation();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    if (
      !validateEmail(formData.email) ||
      !validatePassword(formData.password) ||
      !validateConfirmPassword(formData.password, formData.confirmPassword)
    )
      return;

    try {
      const result = await register(formData).unwrap();
      console.log(result);
      if (!result.isSuccess) {
        alert("Error", result.message);
        return;
      }

      alert("Registration Successful");
      navigation.navigate("Login");
    } catch (error) {
      console.log("catch: ", error);
      alert(error.data.message);
    } finally {
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <RegisterScreenUI
      formData={formData}
      handleChange={handleChange}
      handleRegister={handleRegister}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
};

export default RegisterScreenContainer;
