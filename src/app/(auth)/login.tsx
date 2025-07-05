import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Function to handle the login logic
    const handleLogin = () => {
        // Here you would typically call your login API
        console.log('Logging in with:', { email, password });
        // Reset fields after login
        setEmail('');
        setPassword('');
    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        className="flex-1 justify-center px-6 bg-black"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text className="text-3xl font-bold text-center text-white mb-8">Welcome Back</Text>
        <TextInput
          className="bg-zinc-800 text-white rounded-lg px-4 py-3 mb-4 border border-zinc-600"
          placeholder="Email"
          placeholderTextColor="#a3a3a3"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="bg-zinc-800 text-white rounded-lg px-4 py-3 mb-6 border border-zinc-600"
          placeholder="Password"
          placeholderTextColor="#a3a3a3"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity className="bg-white rounded-lg py-3 mb-4" onPress={handleLogin}>
          <Text className="text-black text-center font-semibold text-lg">Login</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-2">
          <Text className="text-gray-400">Don't have an account? </Text>
          <Link href="/signup" asChild>
            <Text className="text-blue-400 font-semibold">Create one</Text>
          </Link>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
