import React from 'react';
import { Image, View } from 'react-native';

const Filter1 = ({
    face: {
        bounds: {
            size: { width: faceWidth, height: faceHeight },
        },
        LEFT_EYE,
        RIGHT_EYE,
        NOSE_BASE,
    },
}) => {
    const transforming = {
        angleRad: Math.atan((RIGHT_EYE.y - LEFT_EYE.y) / (RIGHT_EYE.x - LEFT_EYE.x))
    }; (angleRad * 180) / Math.PI;
}
<Image
 source={require("../assets/crown-pic1.png")}
 style={{
    width: filterWidth,
    height: filterHeight,
    resizeMode: "contain",
    transform: [{ rotate: `${transformAngle()}deg`}]
 }}
></Image>
