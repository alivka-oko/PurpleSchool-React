import styles from './SearchArea.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import Title from '../Title/Title';
import { useState } from 'react';

function SearchArea({ searchQuery }: { searchQuery: (query: string) => void }) {
	const [inputValue, setInputValue] = useState('');
	const search = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue.trim()) {
			searchQuery(inputValue);
		}
	};

	const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<form className={styles['search-area']} onSubmit={search}>
			<div className={styles['search-area-title']}>
				<Title>Поиск</Title>
				<Paragraph size='small'>
					Введите название фильма, сериала или мультфильма для поиска и
					добавления в избранное.
				</Paragraph>
			</div>
			<div className={styles['search-area-input']}>
				<Input
					placeholder={'Введите название'}
					icon='search'
					value={inputValue}
					onChange={setInput}
				></Input>
				<Button>Искать</Button>
			</div>
		</form>
	);
}

export default SearchArea;
