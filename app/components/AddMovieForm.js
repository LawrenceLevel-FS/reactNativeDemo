import { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { AddMovieFormStyle } from "../styles/AddMovieFromStyle";

const AddMovieForm = () => {
  const [form, setForm] = useState({
    title: "",
    director: "",
    releaseYear: "",
  });
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleFormText = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // add movie function
  const handleAddMovie = async () => {
    setLoading(true);
    try {
      await fetch("http://localhost:3001/apiv1/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: form }),
      }).then((res) => res.json().then((data) => console.log(data)));
    } catch (error) {
      setError(error.message || "Unexpected Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={AddMovieFormStyle.container}>
      <Text style={AddMovieFormStyle.formText}>Title:</Text>
      <TextInput
        style={AddMovieFormStyle.textBox}
        value={form.title}
        onChangeText={(value) => handleFormText("title", value)}
      />
      <Text style={AddMovieFormStyle.formText}>Director:</Text>
      <TextInput
        style={AddMovieFormStyle.textBox}
        value={form.director}
        onChangeText={(value) => handleFormText("director", value)}
      />
      <Text style={AddMovieFormStyle.formText}>Release Year:</Text>
      <TextInput
        style={AddMovieFormStyle.textBox}
        value={form.releaseYear}
        onChangeText={(value) => handleFormText("releaseYear", value)}
      />
      <Pressable style={AddMovieFormStyle.addMovieBtn} onPress={handleAddMovie}>
        <Text>Add Movie</Text>
      </Pressable>
    </View>
  );
};

export default AddMovieForm;
