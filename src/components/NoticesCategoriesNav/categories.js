import { nanoid } from 'nanoid';

const publicCategories = [
  {
    id: nanoid(),
    to: '/notices/sell',
    text: 'sell',
    category: 'sell',
  },
  {
    id: nanoid(),
    to: '/notices/lost-found',
    text: 'lost/found',
    category: 'lost-found',
  },
  {
    id: nanoid(),
    to: '/notices/for-free',
    text: 'in good hands',
    category: 'for-free',
  },
];

const privateCategories = [
  {
    id: nanoid(),
    to: '/notices/favorite',
    text: 'favorite ads',
  },
  {
    id: nanoid(),
    to: '/notices/own',
    text: 'my ads',
    category: 'my-pet',
  },
];

const categories = { publicCategories, privateCategories };

export default categories;
