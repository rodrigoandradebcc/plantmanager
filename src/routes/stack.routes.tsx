import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Confirmation } from '../screens/Confirmation';
import { PlantSelect } from '../screens/PlantSelect';
import { UserIdentification } from '../screens/UserIdentification';
import { Welcome } from '../screens/Welcome';
import colors from '../styles/colors';

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
        <stackRoutes.Screen name="PlantSelect" component={PlantSelect}/>

    </stackRoutes.Navigator>
)

export default AppRoutes