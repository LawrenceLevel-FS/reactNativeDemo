import { View, Text } from "react-native";
import { MovieItemStyle } from "../styles/MovieItemStyle";

const MovieItem = ({ movie }) => {
  return (
    <View style={MovieItemStyle.container}>
      <Text style={MovieItemStyle.h1}>{movie.title}</Text>
      <View>
        <Text>{movie.director}</Text>
        <Text>{movie.releaseYear}</Text>
      </View>
    </View>
  );
};

export default MovieItem;
