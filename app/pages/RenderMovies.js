import { SafeAreaView, Text, View, Pressable, FlatList } from "react-native";
import { useState, useEffect } from "react";
// importing components
import MovieItem from "../components/MovieItem";
import AddMovieForm from "../components/AddMovieForm";
import { Entypo } from "@expo/vector-icons";
import { RenderMoviesStyle } from "../styles/RenderMoviesStyle";

const RenderMovies = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  // calling API
  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:3001/apiv1/movies");
      const data = await response.json();
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderItem = ({ item }) => {
    return <MovieItem movie={item} />;
  };

  return (
    <SafeAreaView style={RenderMoviesStyle.container}>
      <Pressable
        style={RenderMoviesStyle.homeBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Entypo
          style={RenderMoviesStyle.homeTextAndIcon}
          name="home"
          size={24}
          color="black"
        />
        <Text style={RenderMoviesStyle.homeTextAndIcon}>Home</Text>
      </Pressable>
      <Text style={RenderMoviesStyle.movieTitleScreen}>All Movies</Text>
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
