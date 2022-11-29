/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'

//  screens
import ChatList from '@screens/ChatList'

// Providers
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <NativeBaseProvider>
      <ChatList />
    </NativeBaseProvider>
  )
}

export default App
