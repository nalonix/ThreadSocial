import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function signup() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Function to handle the sign-up logic
    const handleSignUp = () => {
        // Here you would typically call your sign-up API
        console.log('Signing up with:', { email, password });
        // Reset fields after sign-up
        setEmail('');
        setPassword('');
    };

    
  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        className="flex-1 justify-center px-6 bg-black"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >

        <Text className="text-3xl font-bold text-center text-white mb-8">Create an account</Text>
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
          className="bg-zinc-800 text-white rounded-lg px-4 py-3 mb-4 border border-zinc-600"
          placeholder="Password"
          placeholderTextColor="#a3a3a3"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity className="bg-white rounded-lg py-3 mb-4" onPress={handleSignUp}>
          <Text className="text-black text-center font-semibold text-lg">Sign Up</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-2">
          <Text className="text-gray-400">Already have an account? </Text>
          <Link href="/login" asChild>
            <Text className="text-blue-400 font-semibold">Login</Text>
          </Link>
        </View>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  )
}
