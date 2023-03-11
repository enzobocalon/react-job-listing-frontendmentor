import * as S from './styles';
import Tag from '../Tag';
import { IJob } from '../../types/Job';
import { useContext } from 'react';
import { JobContext } from '../../context/JobsContext';

interface Props {
  job: IJob;
}

export default function Card({ job }: Props) {
	const { setTags } = useContext(JobContext);

	return (
		<S.Container isFeatured={job.featured} tabIndex={0}>
			<img src={job.logo} alt={`${job.company} logo`}/>

			<div className="card-content-container">
				<S.CardContent>
					<S.CardHeader>
						<strong>{job.company}</strong>
						<S.CardFeatures>
							{
								job.new && (
									<div className="feature new">
										<strong>NEW!</strong>
									</div>
								)
							}
							{
								job.featured && (
									<div className="feature featured">
										<strong>FEATURED</strong>
									</div>
								)
							}
						</S.CardFeatures>
					</S.CardHeader>
					<h1>{job.position}</h1>

					<S.CardFooter>
						<span>{job.postedAt}</span>
						<span>{job.contract}</span>
						<span>{job.location}</span>
					</S.CardFooter>

				</S.CardContent>

				<S.CardTags>
					<Tag title={job.role} onClick={() => setTags(job.role)}/>
					<Tag title={job.level} onClick={() => setTags(job.level)}/>
					{
						job.languages?.map(language => (
							<Tag key={Math.random()} title={language} onClick={() => setTags(language)}/>
						))
					}
					{
						job.tools?.map(tools => (
							<Tag key={Math.random()} title={tools} onClick={() => setTags(tools)}/>
						))
					}
				</S.CardTags>
			</div>
		</S.Container>
	);
}
