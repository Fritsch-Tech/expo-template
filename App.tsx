import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '@screens/RootNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

// eslint-disable-next-line @arthurgeron/react-usememo/require-memo
export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		setAppIsReady(true);
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<NavigationContainer onReady={onLayoutRootView}>
			<RootNavigator />
		</NavigationContainer>
	);
}
