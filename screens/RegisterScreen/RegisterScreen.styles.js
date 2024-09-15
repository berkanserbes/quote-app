import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#3b65c9",
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  bottomMainContainer: {
    width: "90%",
    rowGap: 50,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3b65c9",
  },
  authContainer: {
    flex: 1,
    alignContent: "start",
    justifyContent: "center",
  },
  inputContainer: { rowGap: 20, alignContent: "center" },
  input: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: "#ACACAC",
    backgroundColor: "#f9f9f9",
  },
  controlContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    fontWeight: "bold",
    color: "#3b65c9",
  },
  authButtonContainer: { flex: 1, marginTop: 40 },
  authButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 8,
    backgroundColor: "#3b65c9",
  },
  authButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  signUpNavContainer: {
    flexDirection: "row",
    columnGap: 5,
    justifyContent: "center",
  },
  signUpText: {
    fontWeight: "bold",
    color: "#3b65c9",
  },
});
