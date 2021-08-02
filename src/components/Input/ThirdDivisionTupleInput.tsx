import { makeStyles, TextField } from '@material-ui/core';
import { ChangeEvent, useCallback, useState } from 'react';
import Input from './Input';
import { thirdDivisionTupleRegExp } from './Validation';

const useStyle = makeStyles({
	propertyContentContainer: {
		width: '100%',
	},
});

type Props = {
	propertyName: string;
	propertyContent: string;
	onChange: any;
};

const ThirdDivisionTupleInput = ({ propertyName, propertyContent, onChange }: Props) => {
	const classes = useStyle();

	const isVaild = useCallback((str: string) => {
		return thirdDivisionTupleRegExp.test(str);
	}, []);

	const [error, setError] = useState(!isVaild(propertyContent));

	const handleChange = useCallback(
		(e: ChangeEvent<any>) => {
			onChange(e);
			setError(!isVaild(e.target.value));
		},
		[isVaild, onChange]
	);

	const body = (
		<TextField
			error={error}
			name={propertyName}
			onChange={handleChange}
			value={propertyContent}
			type="text"
			className={classes.propertyContentContainer}
			variant="standard"
			label={propertyName}
			placeholder="123, 456, 789"
		/>
	);

	return <Input body={body} />;
};

export default ThirdDivisionTupleInput;
