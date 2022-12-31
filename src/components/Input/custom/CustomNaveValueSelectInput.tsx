import React, { useMemo } from 'react';
import { FormControl, MenuItem, Select, TextField, withStyles } from '@material-ui/core';

export type CustomSelectInputProps = {
	title: string;
	name: string;
	onChange: (e: any) => void;
	value: { name: string; id: string };
	propertyCandidates: Array<{ name: string; id: string }>;
};

export const CustomNameValueSelectInput = ({
	title,
	onChange,
	name,
	value,
	propertyCandidates,
}: CustomSelectInputProps) => {
	const candidateComponent = useMemo(
		() =>
			propertyCandidates.map((candidate) => {
				return (
					<MenuItem key={candidate.id} value={candidate.id}>
						{candidate.name}
					</MenuItem>
				);
			}),
		[propertyCandidates]
	);

	return (
		<div className="box" style={{ color: 'red' }}>
			<div className="tit">{title}</div>
			<Select disableUnderline name={name} onChange={onChange} value={value.id || 'None'}>
				<MenuItem value="-1">None</MenuItem>
				{candidateComponent}
			</Select>
		</div>
	);
};
