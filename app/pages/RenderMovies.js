import { SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
// importing components
import MovieItem from "../components/MovieItem";
import AddMovieForm from "../components/AddMovieForm";

const RenderMovies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  // calling API
  const getMovies = async () => {
    const response = await fetch("http://localhost:3001/apiv1/movies");
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderItem = ({ item }) => {
    return <MovieItem movie={item} />;
  };

  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>[ Home ]</Text>
      </Pressable>
      <Text>All Movies</Text>
      <View>
        <AddMovieForm />
      </View>
      <SafeAreaView>
        <FlatList
          data={movies.movies}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default RenderMovies;
