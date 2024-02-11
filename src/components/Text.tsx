import { ComponentProps, useMemo, PropsWithChildren, memo } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

type Props = ComponentProps<typeof RNText>;

function Text({ children, style, ...props }: PropsWithChildren<Props>) {
	return (
		<RNText style={useMemo(() => [styles.text, style], [])} {...props}>
			{children}
		</RNText>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'black',
		fontFamily: 'Inter-Regular',
	},
});

export default memo(Text);
