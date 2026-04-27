import { useLayoutEffect, useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Color } from "../../assets/colors/color";
import { ExpenseContext } from "../../store/expenseContext";


export default function ExpenseFormScreen({ navigation, route }) {
  const { addExpense, updateExpense, deleteExpense } = useContext(ExpenseContext);
  const params = route.params;
  const add = params.add;

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (!add && params) {
      setTitle(params.title || "");
      setAmount(params.amount?.toString() || "");
      setDate(params.date || "");
    }
  }, [add, params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: (add ? 'Add ' : 'Edit ') + "Expense",
    });
  }, []);

  //Auto format date (DD-MM-YYYY)
  const handleDateChange = (text) => {
    let cleaned = text.replace(/\D/g, "");

    if (cleaned.length > 2 && cleaned.length <= 4) {
      cleaned = cleaned.slice(0, 2) + "-" + cleaned.slice(2);
    } else if (cleaned.length > 4) {
      cleaned =
        cleaned.slice(0, 2) +
        "-" +
        cleaned.slice(2, 4) +
        "-" +
        cleaned.slice(4, 8);
    }

    setDate(cleaned);
  };

  //Basic validation
  const handleSave = () => {
    if (!title || !amount || !date) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!dateRegex.test(date)) {
      Alert.alert("Error", "Enter date in DD-MM-YYYY format");
      return;
    }

    const newExpense = {
      id: add ? Date.now().toString() : params.id,
      title,
      date,
      amount: Number(amount),
    }

    if (add) {
      addExpense(newExpense);
    } else {
      updateExpense(newExpense);
    }
    navigation.goBack();
  };

  //handle Delete
  const handleDelete = () => {
    Alert.alert(
      "Delete Expense",
      "Are you sure you want to delete this?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteExpense(params.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="Expense Title"
          placeholderTextColor="#94A3B8"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
      </View>

      {/* Date */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date</Text>
        <TextInput
          placeholder="DD-MM-YYYY"
          placeholderTextColor="#94A3B8"
          value={date}
          onChangeText={handleDateChange}
          keyboardType="numeric"
          maxLength={10}
          style={styles.input}
        />
      </View>

      {/* Amount */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          placeholder="Spent Amount"
          placeholderTextColor="#94A3B8"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Expense</Text>
      </TouchableOpacity>

      {/* Delete Button */}
      {!add && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
        >
          <Text style={styles.deleteText}>Delete Expense</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    padding: 20,
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    color: Color.secondary,
    marginBottom: 6,
    fontSize: 14,
  },

  input: {
    backgroundColor: Color.card,
    padding: 14,
    borderRadius: 12,
    color: "#F1F5F9",
    fontSize: 16,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#38BDF8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
    fontSize: 16,
  },
  deleteButton: {
    marginTop: 15,
    backgroundColor: "#EF4444",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});