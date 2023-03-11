import { useContext } from 'react';
import { JobContext } from '../../context/JobsContext';
import Card from '../Card';
import * as S from './styles';

export default function CardGroup() {
	const {jobs, } = useContext(JobContext);

	return (
		<S.Container>
			{
				jobs.map(job => (
					<Card key={job.id} job={job}/>
				))
			}
		</S.Container>
	);
}
