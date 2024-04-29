# Familink_UMB-
Familink group project for CS 410. 

# Familink UMass Boston Student Code Repository


Required Installations for the project 
Node.Js

Setup Project files
npm create-expo-app ./    

Install dependencies 
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

if necessary:
npx expo install --fix to update deprecated or older dependencies 

Setup Entry point in package.json file 
override "main" : "node_modules/expo/AppEntry.js" with "main": "expo-router/entry"

Create a folder named App, using the same "starter code" as App.js then delete the original App.js file 

In the App folder paste, the default App.js code in a new file named "_layout.jsx" file 

Modify project configuration by adding a deep linking scheme in app config (app.json file):
{
    "scheme": "Familink"
}

EXPO app needed for (ios build):
npx expo install expo-dev-client

ES7+ Extension by dsznajder

Use Version 2 of NativeWind (Using Tailwind CSS)
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
npx tailwindcss init 

Run on the app:
npx expo start 
npx expo start -c is for without caching 


# Installing Appwrite
appwrite is free, open-source application that allows users to customize their backend and functions on their web and mobile apps
Quick Start guide: https://appwrite.io/docs/quick-starts/react-native
# Install Command 
npx expo install react-native-appwrite react-native-url-polyfill
Adding Logic using appwrite to add Databases, Storage, Functions 

# Images files
![activity UML ](image.png)

![use case diagram](image-2.png)