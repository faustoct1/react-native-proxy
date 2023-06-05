import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
const Stack = createNativeStackNavigator();

//replace the components for your components
import Component1 from './Component1.js'
import Component2 from './Component2.js'
import Component3 from './Component3.js'

const options = (route) => {
  const title = route.params && route.params.title ? route.params.title : null
  return {
    title: title ? title : route && route.params && route.params.title ? route.params.title : (route.title ? route.title : null),
    headerBackTitle: ' ',
    headerTitleContainerStyle:{
      width:'60%',
      alignItems:'center'

    },
    headerStyle: {
      shadowColor : 'transparent',
      borderBottomWidth:0,
      shadowOpacity: 0,
      shadowOffset: {
        height: 0,
      },
      shadowRadius: 0,
      elevation: 0,
      backgroundColor: '#000'
    },
    headerTintColor: '#fff',
  }
}


let Current = null

const Proxy = (props) => {
  const navigation = useNavigation()
  const [loading,setLoading] = useState(true)
  const {params} = props.route
  const {component} = params
  useEffect(()=>{
    if(component==='Component1'){
      Current = require('./Component1').default
    } else if(component==='Settings'){
      Current = require('./Component2').default
    } else if(component==='Component3'){
      Current = require('./Component3').default
    } 
    setLoading(false)
  },[])

  if(loading) return null

  return <Current {...props} />
}

export default Views = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Proxy" component={Proxy} options={({ route }) => options(route)}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/**
<TouchableOpacity style={{margin:10,padding:10}} onPress={()=>{ props.navigation.navigate('Proxy',{component:'Component1',title:'Screen name comes here'}) }}>
  <Text>Navite to component</Text>
</TouchableOpacity>
*/
