import { View, Text } from "react-native";
import styles from "./CategoryCard.styles";

const CategoryCardUI = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryCardUI;
