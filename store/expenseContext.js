import { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'expenses';


export const ExpenseContext = createContext({
    expenses: [],
    addExpense: () => { },
    updateExpense: () => { },
    deleteExpense: () => { },
});

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


export function ExpenseContextProvider({ children }) {
    const [expenses, setExpenses] = useState(initialExpenses);

    useEffect(() => {
        async function loadExpense() {
            try {
                const storedData = await AsyncStorage.getItem(STORAGE_KEY);

                if (storedData) {
                    setExpenses(JSON.parse(storedData));
                }
            } catch (error) {
                console.log("Error loading data: " + error);
            }
        }

        loadExpense();
    }, []);

    useEffect(() => {
        async function saveExpense() {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
            }catch(error) {
                console.log("Error saving data:", error);
            }
        }

        saveExpense();
    }, [expenses])

    function addExpense(expense) {
        setExpenses((prev) => [expense, ...prev]);
    }

    function updateExpense(expense) {
        setExpenses((prev) =>
            prev.map((item) =>
                item.id === expense.id ? expense : item
            )
        );
    }

    function deleteExpense(id) {
        setExpenses((prev) =>
            prev.filter((item) => item.id !== id)
        );
    }

    const value = {
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
    };

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    );
}