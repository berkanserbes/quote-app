import HomeScreenIU from "./HomeScreen.ui";
import { useGetCategoriesQuery } from "../../redux/services/category.service";
import { Text, View } from "react-native";
import { useState, useEffect } from "react";

const HomeScreenContainer = () => {
  const { data, error, isLoading, refetch } = useGetCategoriesQuery();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  console.log(data);
  return (
    <HomeScreenIU
      categories={data.data}
      isRefreshing={isRefreshing}
      fetchData={fetchData}
    />
  );
};

export default HomeScreenContainer;
