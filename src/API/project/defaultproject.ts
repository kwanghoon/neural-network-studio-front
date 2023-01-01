import { Project } from './types';

export class DefaultProject implements Project {
	projectNo = 1;

	name = 'default project';

	description = 'A dedidated default project';

	lastModify = new Date();
}

export const defaultProjects: Project[] = [new DefaultProject()];
