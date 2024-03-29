import { useCallback, useMemo, useState } from 'react';

export default function useToggle(
	initialValue: boolean,
): [boolean, () => void] {
	const [value, setValue] = useState(initialValue);
	const toggle = useCallback(() => setValue(v => !v), []);
	return useMemo(() => [value, toggle], [toggle, value]);
}
