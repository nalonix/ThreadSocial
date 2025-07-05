import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { supabase } from '@/lib/supabase';

export default function login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    // Function to handle the login logic
    async function signInWithEmail() {
    console.log('Signing in with email:', email)
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    console.log('Sign in response:', { email, error })
    if (error) Alert.alert(error.message)
    setLoading(false)
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
        <TouchableOpacity className="bg-white rounded-lg py-3 mb-4" onPress={signInWithEmail}>
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
