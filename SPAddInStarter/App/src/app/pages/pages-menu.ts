import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Administration',
    icon: 'nb-gear',
    children: [
      {
        title: 'Lists & Libraries',
        link: '/pages/lists'
      },
      {
        title: 'Groups',
        link: '/pages/groups'
      }
    ]
  },
  {
    title: 'Request Feature',
    icon: 'nb-lightbulb',
    link: 'https://devwals.com/#contact'
  },
  {
    title: 'Support',
    icon: 'nb-lightbulb',
    link: 'https://devwals.com/#contact'
  }
];
