import {Image, View} from 'react-native';
import React from 'react';


export default function DiceComponent({diceImage}) {
   
    console.log(diceImage);
        return (
            <View>
                <Image source={diceImage}
                />
            </View>
        );
    }
