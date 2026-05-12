import { useState, useContext } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Alert,
} from "react-native";

import { login } from "../../services/auth";
import { AuthContext } from "../../store/authContext";

export default function LoginScreen({ navigation }) {

    const authCtx = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {

        try {

            const data = await login(email, password);

            authCtx.authenticate(data.idToken);
        } catch (error) {

            Alert.alert(
                "Authentication Failed",
                "Invalid email or password"
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
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("SignUp")}
            >
                <Text style={styles.link}>
                    Don't have an account? Signup
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