import { HomeStyle } from "../styles/HomeStyle";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Pressable,
  Alert,
} from "react-native";
import movieBgImage from "../images/moviebuffBG.jpg";

const Home = () => {
  return (
    <View style={HomeStyle.container}>
      <StatusBar hidden />
      <ImageBackground
        style={HomeStyle.bgImage}
        source={movieBgImage}
        resizeMode="cover"
      >
        <View style={HomeStyle.bgCover}>
          <Text></Text>
        </View>
        <Text style={HomeStyle.h1}>MovieBuffs2</Text>
        <Text style={HomeStyle.p}>Your one Stop Watch</Text>

        <Pressable
          style={HomeStyle.button}
          onPress={() => Alert.alert("enter here")}
        >
          <Text style={HomeStyle.buttonText}>Click to Enter</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;
