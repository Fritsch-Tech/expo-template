import { RootNavigatorParamList } from '@customTypes/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@screens/Home';
import { memo } from 'react';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				animation: 'fade',
			}}
		>
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	);
}

export default memo(RootNavigator);
