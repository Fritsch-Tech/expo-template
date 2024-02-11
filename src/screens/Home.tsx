import Text from '@components/Text';
import { RootNavigatonChildProps } from '@customTypes/navigation';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = RootNavigatonChildProps<'Home'>;

function Home({ route }: Props) {
	return (
		<View style={styles.container}>
			<Text>{route.name} Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default memo(Home);
