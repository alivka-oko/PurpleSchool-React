export interface ICardData {
  id: number;
  title: string;
  rating: number;
  posterUrl: string;
}

const mockData: ICardData[] = [
  { id: 1, title: 'Black Widow', rating: 324, posterUrl: '/blackWidow.jpg' },
  {
    id: 2,
    title: 'The Big Bang Theory',
    rating: 12,
    posterUrl: '/bigbang.jpg',
  },
  {
    id: 3,
    title: 'Avengers: Endgame',
    rating: 8.3,
    posterUrl: '/avengers.jpg',
  },
  { id: 4, title: 'Friends', rating: 123, posterUrl: '/friends.jpg' },
];

export default mockData;
