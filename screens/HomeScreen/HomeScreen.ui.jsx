import { View, Text, FlatList, RefreshControl } from "react-native";
import CategoryCard from "../../components/CategoryCard";
import styles from "./HomeScreen.styles";

const HomeScreenIU = ({ categories, fetchData, isRefreshing }) => {
  return (
    <FlatList
      scrollEnabled={true}
      contentContainerStyle={styles.container}
      style={styles.flatList}
      data={categories || []}
      renderItem={({ item }) => (
        <CategoryCard key={item._id} title={item.title} />
      )}
      keyExtractor={(item) => item._id}
      numColumns={2}
      showsVerticalScrollIndicator={true}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />
      }
      ItemSeparatorComponent={() => <View style={styles.categorySeparator} />}
      columnWrapperStyle={styles.categoryContainer}
    />
  );
};

export default HomeScreenIU;
