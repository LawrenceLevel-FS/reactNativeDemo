import { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";

const AddMovieForm = () => {
  const [text, setText] = useState();

  const handleFormText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <SafeAreaView>
      <TextInput value={text} onChange={() => handleFormText} />
    </SafeAreaView>
  );
};

export default AddMovieForm;
