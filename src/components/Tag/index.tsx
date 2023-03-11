import * as S from './styles';

import remove from '../../assets/images/icon-remove.svg';

interface IProps {
  canBeRemoved?: boolean;
  title: string;
  onClick?: () => void;
}

export default function Tag({canBeRemoved, title, onClick}: IProps) {
	return (
		<S.Container canBeRemoved={canBeRemoved} onClick={onClick} tabIndex={0}>
			<div className="tag-container">
				<strong>{title}</strong>
			</div>
			{canBeRemoved && (
				<div className="tag-remove">
					<img src={remove} alt="Remove tag"/>
				</div>
			)}
		</S.Container>
	);
}
