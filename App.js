import PessoaAddTela from "./telas/PessoaAddTela";
import PessoaListTela from "./telas/PessoaListTela";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PessoaAdd">
        <Stack.Screen 
          name="PessoaAdd"
          component={PessoaAddTela}
        />
        <Stack.Screen 
          name="PessoaList"
          component={PessoaListTela}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}