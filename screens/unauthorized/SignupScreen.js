import { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from "react-native";

import { createUser } from "../../services/auth";

export default function SignupScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignup() {

        try {

            await createUser(email, password);

            Alert.alert(
                "Success",
                "Account created successfully"
            );

            navigation.replace("Login");

        } catch (error) {

            Alert.alert(
                "Signup Failed",
                "Could not create account"
            );
        }
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Email"
                placeholderTextColor="#64748B"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                placeholderTextColor="#64748B"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignup}
            >
                <Text style={styles.buttonText}>
                    Create Account
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.link}>
                    Already have an account? Login
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        color: '#F1F5F9',
    },

    button: {
        backgroundColor: '#38BDF8',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },

    buttonText: {
        fontWeight: 'bold',
    },

    link: {
        marginTop: 20,
        textAlign: 'center',
        color: '#38BDF8',
    },
});