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