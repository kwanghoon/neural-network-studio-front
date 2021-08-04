import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { createElement, memo } from 'react';
import { NodeProps } from 'react-flow-renderer';
import { BlockState } from '../../../../block';
import LayerNodeTable from './LayerNodeTable';
import useTargetCandidates from '../useTargetCandidates';
import style from '../target.module.css';

const useLayerStyle = makeStyles({
	wrapper: {
		padding: 10,
		borderRadius: 3,
		width: 150,
		fontSize: 12,
		color: '#222',
		textAlign: 'center',
		borderWidth: '1px',
		borderStyle: 'solid',
		background: '#fff',
		'&:focus': {
			boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.08)',
		},
	},
});

const LayerNode = (props: NodeProps) => {
	const { data } = props;
	const { targetCandidates } = useTargetCandidates();
	const { type } = data as BlockState;
	const classes = useLayerStyle();
	const node = createElement(LayerNodeTable[type], props);
	console.log(style.targetCandidate);
	return (
		<>
			<div
				tabIndex={0}
				role="button"
				className={`${classes.wrapper} ${targetCandidates?.has(type) && style.targetCandidate}`}
			>
				{node}
			</div>
		</>
	);
};

export default memo(LayerNode);
