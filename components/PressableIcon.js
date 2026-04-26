import { View, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Color } from "../assets/colors/color";
import { useNavigation } from "@react-navigation/native";

export default function PressableIcon({onPress}) {
    const navigation = useNavigation();

    return(
        <Pressable onPress={onPress}>
            <MaterialIcons name="add" size={24} color={Color.primary} />
        </Pressable>
    );
}