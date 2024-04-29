import { StyleSheet, Text, View } from 'react-native'
import { Stack, Redirect } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
            name="log-in"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="sign-up"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="scanner"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="family-tree"
            options={{
              headerShown: false
            }}
          />
      </Stack>

      <StatusBar backgroundColor='#161622' style="light" />
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})