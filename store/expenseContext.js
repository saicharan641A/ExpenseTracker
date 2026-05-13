import { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { axiosInstance } from "../services/http";
import { AuthContext } from "./authContext";

const STORAGE_KEY = 'expenses';


export const ExpenseContext = createContext({
    expenses: [],
    isLoading: false,
    addExpense: () => { },
    updateExpense: () => { },
    deleteExpense: () => { },
});



export function ExpenseContextProvider({ children }) {
    const [expenses, setExpenses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const authCtx = useContext(AuthContext);

    useEffect(() => {
        async function fetchExpense() {
            if (!authCtx.userId) return;
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(`/users/${authCtx.userId}/expenses.json`);

                const loadExpenses = [];
                if (response.data) {
                    for (const key in response.data) {
                        loadExpenses.push({
                            id: key,
                            ...response.data[key],
                        });
                    }
                }

                setExpenses(loadExpenses);

                await AsyncStorage.setItem(
                    STORAGE_KEY, JSON.stringify(loadExpenses)
                );
            } catch (error) {
                console.log("Firebase failed, loading local data");

                try {
                    const storedData = await AsyncStorage.getItem(STORAGE_KEY);

                    if (storedData) {
                        setExpenses(JSON.parse(storedData));
                    }
                } catch (storageError) {
                    console.log("Storage Error:", storageError);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchExpense();
    }, [authCtx.userId]);


    async function addExpense(expense) {
        try {
            const response = await axiosInstance.post(`/users/${authCtx.userId}/expenses.json`, expense);

            const id = response.data.name;

            const newExpense = {
                ...expense,
                id,
            };

            setExpenses((prv) => [newExpense, ...prv]);
        } catch (e) {
            console.log(e);
        }
    }

    async function updateExpense(expense) {
        try {
            const { id, ...expenseData } = expense;

            await axiosInstance.put(
                `/users/${authCtx.userId}/expenses/${id}.json`,
                expenseData
            );

            setExpenses((prev) =>
                prev.map((item) =>
                    item.id === expense.id ? expense : item
                )
            );
        } catch (e) {
            console.log(e);
        }
    }

    async function deleteExpense(id) {
        try {
            await axiosInstance.delete(
                `/users/${authCtx.userId}/expenses/${id}.json`
            );

            setExpenses((prev) =>
                prev.filter((item) => item.id !== id)
            );
        } catch (e) {
            console.log(e);
        }
    }

    const value = {
        expenses,
        isLoading,
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