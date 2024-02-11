module.exports = {
	extends: ['universe/native', 'universe/shared/typescript-analysis'],
	plugins: ['@arthurgeron/react-usememo'],
	rules: {
		'require-await': 'warn',
		'react/no-object-type-as-default-prop': 'error',
		'@arthurgeron/react-usememo/require-usememo': [2],
		'@arthurgeron/react-usememo/require-memo': [2],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.d.ts'],
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	],
};
