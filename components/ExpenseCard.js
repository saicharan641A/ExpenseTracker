import { Text, View, StyleSheet, Pressable } from "react-native";
import { Color } from "../assets/colors/color";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseCard({ id, title, date, amount, onPress }) {
    const navigation = useNavigation();
    return (
        <Pressable onPress={onPress} android_ripple={{ color: "#334155" }}>
            <View style={styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.amtContainer}>
                    <Text style={styles.amount}>$ {amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: Color.card,
        marginBottom: 8,
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 8,

        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    title: {
        color: Color.primary,
        fontWeight: 'bold',
    },
    date: {
        color: Color.secondary,
    },

    amtContainer: {
        backgroundColor: Color.divider,
        width: 70,
        paddingVertical: 6,
        paddingHorizontal: 8,
        alignItems: 'center',
        borderRadius: 4,
    },
    amount: {
        color: Color.primary,
        fontWeight: 'bold',
    }
})