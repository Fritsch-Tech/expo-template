import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		interface RootParamList extends RootNavigatorParamList {}
	}
}

export type RootNavigatorParamList = {
	Home: undefined;
};

export type RootNavigatonChildProps<T extends keyof RootNavigatorParamList> =
	NativeStackScreenProps<RootNavigatorParamList, T>;
