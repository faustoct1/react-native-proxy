# react-native-proxy
React Native performance improver made easy :)

### What's it?
It's a Proxy component to react-native to improve apps performance.  

### When to use?
Use it to improve app or components performance.

### How works?
It creates a proxy around the view component. The component starts loading lazily, instead eager, when app starts or component loads. Combine with libs and components like react-navigation, react-native components, etc.

### How to use?

App.js
````
/* Loading views and proxy */

import React from 'react'
import Views from './Views.js'

export default App = () => (
  <Views />
)
````

Navigating between views using proxy (lazy loading views)
````
//import
import { useNavigation } from '@react-navigation/native'

//get navigation
const navigation = useNavigation()

<TouchableOpacity style={{margin:10,padding:10}} onPress={()=>{ navigation.navigate('Proxy',{component:'Component1',title:'Screen name comes here'}) }}>
  <Text>Navite to component 1</Text>
</TouchableOpacity>
````

