import { Background, HeaderTitle } from "@react-navigation/elements";
import { useLayoutEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Button } from "react-native";
import { format } from 'date-fns';

import ExpenseCard from "../../components/ExpenseCard";
import PressableIcon from "../../components/PressableIcon";

const initialExpenses = [
    {
        title: "Online Shop",
        id: '1',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 500,
    },
    {
        title: "Groceries",
        id: '2',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 1200,
    },
    {
        title: "Electric Bill",
        id: '3',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 800,
    },
    {
        title: "Restaurant",
        id: '4',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 650,
    },
    {
        title: "Petrol",
        id: '5',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 1000,
    },
    {
        title: "Movie Tickets",
        id: '6',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 400,
    },
    {
        title: "Mobile Recharge",
        id: '7',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 299,
    },
    {
        title: "Gym Fee",
        id: '8',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 1500,
    },
    {
        title: "Coffee",
        id: '9',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 150,
    },
    {
        title: "Transport",
        id: '10',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 300,
    },
    {
        title: "Movie",
        id: '11',
        date: format(new Date(), 'dd-MM-yyyy'),
        amount: 220,
    },
];

export default function HomeScreen({ navigation }) {
    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpense = useCallback((expense) => {
        setExpenses((prv) => [expense, ...prv]);
    }, []);

    const updateExpense = useCallback((updatedExpense) => {
        setExpenses((prev) =>
            prev.map((item) =>
                item.id === updatedExpense.id ? updatedExpense : item
            )
        );
    }, []);

    const deleteExpense = useCallback((id) => {
        setExpenses((prev) => prev.filter(item => item.id !== id));
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Your Expenses",
            headerRight: () => <PressableIcon onPress={() => navigation.navigate('ExpenseForm', { add: true, addExpense })} />
        });
    }, [navigation, addExpense]);

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
                    updateExpense,
                    deleteExpense,
                })
            } />
        );
    }

    return (
        <View style={styles.rootContainer}>
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