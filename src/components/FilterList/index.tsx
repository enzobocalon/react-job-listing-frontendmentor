import { useContext } from 'react';
import { JobContext } from '../../context/JobsContext';
import Tag from '../Tag';
import * as S from './styles';

export default function FilterList() {
	const {selectedTags, setTags, clearTags} = useContext(JobContext);

	function handleRemoveTag(tag: string) {
		setTags(tag);
	}

	return (
		<>
			{
				selectedTags.length > 0 && (
					<S.Container>
						<div className="tag-group">
							{
								selectedTags.map(tag => (
									<Tag key={Math.random()} title={tag} canBeRemoved onClick={() => handleRemoveTag(tag)}/>
								))
							}
						</div>

						<button onClick={clearTags}>Clear</button>
					</S.Container>
				)
			}
		</>
	);
}
