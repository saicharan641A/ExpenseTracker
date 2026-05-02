import { Background, HeaderTitle } from "@react-navigation/elements";
import { useLayoutEffect, useState, useCallback, useContext } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Button } from "react-native";
import { format } from 'date-fns';
import { ExpenseContext } from "../../store/expenseContext";

import ExpenseCard from "../../components/ExpenseCard";
import PressableIcon from "../../components/PressableIcon";
import ExpenseSummary from "../../components/ExpenseSummary";


export default function HomeScreen({ navigation }) {
    const { expenses } = useContext(ExpenseContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Your Expenses",
            headerRight: () => <PressableIcon onPress={() => navigation.navigate('ExpenseForm', { add: true })} />
        });
    }, [navigation]);

    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split("-");
        return new Date(year, month - 1, day);
    }

    const sortedExpenses = [...expenses].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date);
    });

    function renderItem({ item }) {
        const data = {
            id: item.id,
            title: item.title,
            date: item.date,
            amount: item.amount,
        }

        return (
            <ExpenseCard {...data} onPress={() =>
                navigation.navigate("ExpenseForm", {
                    add: false,
                    ...item,
                })
            } />
        );
    }

    const totalAmount = expenses.reduce((sum, item) => {
        return sum + item.amount;
    }, 0);

    return (
        <View style={styles.rootContainer}>
            <ExpenseSummary totalAmount={totalAmount} />
            <FlatList data={sortedExpenses} keyExtractor={item => item.id.toString()} renderItem={({ item }) => renderItem({ item })} />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 21,
    },
});