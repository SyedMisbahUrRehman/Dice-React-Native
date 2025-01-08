import { useState } from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity, Image } from "react-native";
import DiceOne from "./assets/one.png";
import DiceTwo from "./assets/two.png";
import DiceThree from "./assets/three.png";
import DiceFour from "./assets/four.png";
import DiceFive from "./assets/five.png";
import DiceSix from "./assets/six.png";

function DiceScreen() {
  const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];
  
  const [diceImage, setDiceImage] = useState(DiceFive);
  const [rolling, setRolling] = useState(false);

  const handleTossDice = () => {
    setRolling(true);

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6); // Generates 0-5
      setDiceImage(diceImages[randomNumber]);
      setRolling(false);
    }, 1000); 
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleTossDice} disabled={rolling}>
        <Image source={diceImage} style={styles.diceImage} />
      </TouchableOpacity>
      <Button
        title="Roll Dice"
        onPress={handleTossDice}
        color="black"
        disabled={rolling}
        accessibilityLabel="Tap to roll the dice"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  diceImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

});

export default DiceScreen;
