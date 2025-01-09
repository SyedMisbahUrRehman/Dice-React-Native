import {Image, View} from 'react-native';
import React from 'react';


export default function DiceComponent({diceImage,customStyle}) {
   console.log(customStyle);
        return (
            <View>
                <Image source={diceImage}
                style={customStyle}
                />
            </View>
        );
    }
