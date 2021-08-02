import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../../module';
import StandardModal from '../../../components/utils/modal/StandardModal';
import { PROJECT_ERROR_HANDLE_URI } from '../util';

const useGetProjectConfigResult = () => {
	const result = useSelector((state: RootState) => state.projectApi.getProjectConfigResult);

	const handleError = useCallback(() => {
		window.location.replace(PROJECT_ERROR_HANDLE_URI);
	}, []);

	return {
		...result,
		errorModal: <StandardModal head="error" body={result.error} onClose={handleError} />,
	};
};

export default useGetProjectConfigResult;
