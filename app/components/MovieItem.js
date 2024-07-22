import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { MovieItemStyle } from "../styles/MovieItemStyle";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const MovieItem = ({ movie, deleteMovie, getMovies }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({
    title: movie.title,
    director: movie.director,
    releaseYear: movie.releaseYear,
  });

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

  // update btn
  const updateCard = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/apiv1/movies/${movie._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMovie),
        }
      );
      if (response.ok) {
        setIsEditMode(false);
        console.log("res ok", updatedMovie);
        getMovies();
      } else {
        console.error("Failed to update the movie");
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
        <TouchableOpacity onPress={() => setIsEditMode(true)}>
          <FontAwesome name="pencil-square-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* EDIT SCREEN BELOW */}
      <Modal visible={isEditMode} animationType="slide">
        <View style={MovieItemStyle.modalContent}>
          <TextInput
            style={MovieItemStyle.input}
            placeholder="Title"
            value={updatedMovie.title}
            onChangeText={(text) =>
              setUpdatedMovie({ ...updatedMovie, title: text })
            }
          />
          <TextInput
            style={MovieItemStyle.input}
            placeholder="Director"
            value={updatedMovie.director}
            onChangeText={(text) =>
              setUpdatedMovie({ ...updatedMovie, director: text })
            }
          />
          <TextInput
            style={MovieItemStyle.input}
            placeholder="Release Year"
            value={updatedMovie.releaseYear}
            onChangeText={(text) =>
              setUpdatedMovie({ ...updatedMovie, releaseYear: text })
            }
          />
          <Button title="Update" onPress={updateCard} />
          <Button title="Cancel" onPress={() => setIsEditMode(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default MovieItem;
