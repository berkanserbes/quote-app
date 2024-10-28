import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerTitle: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 30,
    rowGap: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  infoContainer: {
    flex: 1,
    //backgroundColor: "#ffffff",
    marginTop: 30,
    rowGap: 10,
  },
  infoBorderContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  infoStartBorder: {
    marginBottom: 2, // değiştirilecek
    backgroundColor: "#ffffff",
    borderColor: "#000",
    padding: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  infoMidBorder: {
    marginBottom: 2, // değiştirilecek
    backgroundColor: "#ffffff",
    borderColor: "#000",
    padding: 10,
  },
  infoEndBorder: {
    backgroundColor: "#ffffff",
    borderColor: "#000",
    padding: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
