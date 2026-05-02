import { View, Text, StyleSheet } from "react-native";
import { Color } from "../assets/colors/color";

export default function ExpenseSummary({totalAmount}) {
    return (
        <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Total Expenses</Text>
            <Text style={styles.summaryAmount}>₹ {totalAmount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    summaryContainer: {
        backgroundColor: Color.card,
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    summaryText: {
        color: Color.secondary,
        fontSize: 16,
    },

    summaryAmount: {
        color: "#38BDF8",
        fontSize: 18,
        fontWeight: "bold",
    },
});