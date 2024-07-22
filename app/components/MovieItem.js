import { View, Text, TouchableOpacity } from "react-native";
import { MovieItemStyle } from "../styles/MovieItemStyle";
import { FontAwesome } from "@expo/vector-icons";

const MovieItem = ({ movie, deleteMovie, getMovies }) => {
  // delete btn
  const deleteCard = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/apiv1/movies/${movie._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const data = await response.json();
        deleteMovie(movie._id);
        getMovies();
      } else {
        console.error("Failed to delete the movie");
      }
    } catch (error) {
      console.error("Unexpected Error", error.message);
    }
  };

  return (
    <View style={MovieItemStyle.container}>
      <Text style={MovieItemStyle.h1}>{movie.title}</Text>
      <View>
        <Text>{movie.director}</Text>
        <Text>{movie.releaseYear}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={deleteCard}>
          <FontAwesome name="trash" size={24} color="black" />
        </TouchableOpacity>
        <FontAwesome name="pencil-square-o" size={24} color="black" />
      </View>
    </View>
  );
};

export default MovieItem;
