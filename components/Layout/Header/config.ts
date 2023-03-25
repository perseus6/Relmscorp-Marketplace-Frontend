interface Menu {
  id: number;
  title: string;
  link: string;
}

const MenuItems: Menu[] = [
  {
    id: 1,
    title: 'Create Collection',
    link: '/create-collection',
  },
  {
    id: 2,
    title: 'Collections',
    link: '/collections',
  },
];

export default MenuItems;
