import { View, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Color } from "../assets/colors/color";
//<MaterialIcons name="add" size={24} color="black" />

export default function PressableIcon({onPress}) {
    return(
        <Pressable onPress={onPress}>
            <MaterialIcons name="add" size={24} color={Color.primary} />
        </Pressable>
    );
}