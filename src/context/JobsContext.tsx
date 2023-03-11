import { createContext, useState, useMemo, useCallback } from 'react';
import { IJob } from '../types/Job';
import jobsData from '../data/jobs.json';

interface IJobContext {
  jobs: IJob[];
  selectedTags: string[];
  setTags: (tag: string) => void;
  clearTags: () => void;
}

type ProviderProps = {
  children: React.ReactNode
}

export const JobContext = createContext({} as IJobContext);

const JobProvider = ({children}: ProviderProps) => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const jobs = useMemo(() => {
		const filteredJobs = jobsData.filter(item => {
			const hasTag = (tag: string) => item.languages.includes(tag) ||
      item.tools.includes(tag) ||
      item.level === tag ||
      item.role === tag;
			return selectedTags.every(hasTag);
		});
		return filteredJobs || jobsData;
	}, [selectedTags]);

	const setTags = useCallback((tag: string) => {
		if (selectedTags.includes(tag)) {
			setSelectedTags(prevState => prevState.filter(tags => tags !== tag));
			return;
		}

		setSelectedTags(prevState => [...prevState, tag]);
	}, [selectedTags]);

	const clearTags = useCallback(() => {
		setSelectedTags([]);
	}, []);

	return (
		<JobContext.Provider
			value={{
				jobs,
				selectedTags,
				setTags,
				clearTags
			}}
		>
			{children}
		</JobContext.Provider>
	);
};

export default JobProvider;
