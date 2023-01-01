import React, { useEffect, useState } from 'react';
import Card from './card/card';
import usePageNation from '../../utils/pagenation/usePageNation';
import { GetProjectListParams, Project } from '../../../API/project/types';
import useProjectList from '../../../hooks/useProjectList';
import { defaultProjects } from '../../../API/project/defaultproject';

const CardGrid = ({ projects, onUpdateProjectLists }: { projects: Project[]; onUpdateProjectLists: any }) => {
	return (
		<>
			{defaultProjects.map((project) => (
				<Card
					onUpdateProjectLists={onUpdateProjectLists}
					key={`${project.name} - ${project.projectNo}`}
					title={project.name}
					description={project.description}
					lastUpdate={project.lastModify}
					id={project.projectNo}
				/>
			))}
		</>
	);
};

export default CardGrid;
