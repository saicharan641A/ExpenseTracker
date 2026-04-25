import { Background, HeaderTitle } from "@react-navigation/elements";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Button } from "react-native";
import { format } from 'date-fns';
import ExpenseCard from "../../components/ExpenseCard";
import PressableIcon from "../../components/PressableIcon";

export default function HomeScreen({ navigation }) {
    const expenses = [
        {
            title: "Online Shop",
            id: 1,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 500,
        },
        {
            title: "Groceries",
            id: 2,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 1200,
        },
        {
            title: "Electric Bill",
            id: 3,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 800,
        },
        {
            title: "Restaurant",
            id: 4,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 650,
        },
        {
            title: "Petrol",
            id: 5,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 1000,
        },
        {
            title: "Movie Tickets",
            id: 6,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 400,
        },
        {
            title: "Mobile Recharge",
            id: 7,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 299,
        },
        {
            title: "Gym Fee",
            id: 8,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 1500,
        },
        {
            title: "Coffee",
            id: 9,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 150,
        },
        {
            title: "Transport",
            id: 10,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 300,
        },
        {
            title: "Movie",
            id: 11,
            date: format(new Date(), 'dd-MM-yyyy'),
            amount: 220,
        },
    ];

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Your Expenses",
            headerRight: () => <PressableIcon onPress={()=>console.log("Hello!")} />
        })
    })

    function renderItem({ item }) {
        const data = {
            title: item.title,
            date: item.date,
            amount: item.amount,
        }

        return (
        <ExpenseCard {...data} />
        );
    }

    return (
        <View style={styles.rootContainer}>
            <FlatList data={expenses} keyExtractor={item => item.id} renderItem={({ item }) => renderItem({ item })} />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 21,
    },
});