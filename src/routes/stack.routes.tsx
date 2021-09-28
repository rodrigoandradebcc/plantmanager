import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors';
import { Welcome } from '../screens/Welcome';
import { Confirmation } from '../screens/Confirmation';
import { UserIdentification } from '../screens/UserIdentification';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,                
            },
            headerShown: false
        }}
       
    >
        <stackRoutes.Screen name="Welcome" component={Welcome} />
        <stackRoutes.Screen name="UserIdentification" component={UserIdentification}/>
        <stackRoutes.Screen name="Confirmation" component={Confirmation}/>
    </stackRoutes.Navigator>
)

export default AppRoutes