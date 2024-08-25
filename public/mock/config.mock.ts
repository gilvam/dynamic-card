export const mockCards = [
  {
    name: 'Users',
    gridTemplateArea: ['A B C'],
    cards: [
      {
        id: 'A',
        component: 'card-simple',
        inputs: { title: 'Card 1' },
        style: { color: '#16796F', height: '260px' }
      },
      {
        id: 'B',
        component: 'card-double',
        inputs: { title: 'Card 2' },
        style: { color: '#6CB0A8', height: '260px' }
      },
      {
        id: 'C',
        component: '???????????????????????????????????????????????',
        inputs: { title: 'Card 3' },
        style: { color: '#97D49B', height: '260px' }
      },
    ]
  },

  {
    name: 'Details',
    gridTemplateArea: ['A B'],
    cards: [
      {
        id: 'A',
        component: 'card-simple',
        inputs: { title: 'Card 1' },
        style: { color: '#CCB8D7', height: '100px' }
      },
      {
        id: 'B',
        component: 'card-double',
        inputs: { title: 'Card 2' },
        style: { color: '#C1C2AD', height: '100px' }
      }
    ]
  },
  {
    name: 'Oriented',
    gridTemplateArea: ['A'],
    cards: [
      {
        id: 'A',
        component: 'card-double',
        inputs: { title: 'Card 1', titleSecond: 'Second title' },
        style: { color: '#FFD898', height: '200px' }
      },
    ]
  },
  {
    name: 'Previously',
    gridTemplateArea: [
      'A B E',
      'C D E'
    ],
    cards: [
      {
        id: 'A',
        component: 'card-chart-circle',
        inputs: { title: 'Card 1' },
        style: { color: '#0067B3', height: '' }
      },
      {
        id: 'B',
        component: 'card-simple',
        inputs: { title: 'Card 2' },
        style: { color: '#68BBE3', height: '' }
      },
      {
        id: 'C',
        component: 'card-chart',
        inputs: { title: 'Card 3' },
        style: { color: '#41729F', height: '' }
      },
      {
        id: 'D',
        component: 'card-simple',
        inputs: { title: 'Card 4' },
        style: { color: '#076389', height: '' }
      },
      {
        id: 'E',
        component: 'card-table',
        inputs: { title: 'Card 5', description: 'description' },
        style: { color: '#189AB4', height: '632px' }
      },
    ]
  }
];
