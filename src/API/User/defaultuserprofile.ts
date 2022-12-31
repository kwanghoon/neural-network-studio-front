import { UserProfile } from './types';
import { DefaultUserProfileImage } from './defaultuserprofileimage';

export class DefaultUserProfile implements UserProfile {
	name = 'default name';

	profileImage = new DefaultUserProfileImage();

	description = 'default description';

	createTime = new Date();

	updateTime = new Date();

	email = 'default email';

	webSite = 'default website';
}
