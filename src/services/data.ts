export const getCategories = () => {
  return {
    categories: [
      {
        id: 0,
        title: 'frisdrank',
        items: [
          {
            id: 0,
            name: 'cola',
            price: 2
          },
          {
            id: 1,
            name: 'cola-zero',
            price: 2
          },
          {
            id: 2,
            name: 'fanta',
            price: 2
          },
          {
            id: 3,
            name: 'ice-tea',
            price: 2.2
          },
        ]
      },
      {
        id: 1,
        title: 'bieren',
        items: [
          {
            id: 4,
            name: 'stella',
            price: 2
          },
          {
            id: 5,
            name: 'stella 0.0',
            price: 2
          },
          {
            id: 6,
            name: 'hoegaarden',
            price: 2
          },
          {
            id: 7,
            name: 'lindemans',
            price: 3
          },
        ]
      },
      {
        id: 2,
        title: 'zware bieren',
        items: [
          {
            id: 8,
            name: 'duvel',
            price: 4
          },
          {
            id: 9,
            name: 'karmeliet',
            price: 4
          },
          {
            id: 10,
            name: 'hakendover XIII',
            price: 3.5
          },
          {
            id: 11,
            name: 'leffe blond',
            price: 4
          },
          {
            id: 12,
            name: 'leffe bruin',
            price: 4
          },
        ]
      },
      {
        id: 3,
        title: 'wijnen/bubbels',
        items: [
          {
            id: 13,
            name: 'witte wijn',
            price: 4
          },
          {
            id: 14,
            name: 'rode wijn',
            price: 4
          },
          {
            id: 15,
            name: 'cava',
            price: 4
          },
        ]
      },
      {
        id: 4,
        title: 'snacks',
        items: [
          {
            id: 16,
            name: 'portie gemengd (koud)',
            price: 8
          },
          {
            id: 17,
            name: 'portie gemengd (warm)',
            price: 8
          },
          {
            id: 18,
            name: 'zout chips',
            price: 2
          },
          {
            id: 19,
            name: 'paprika chips',
            price: 2
          }
        ]
      },
    ]
  }
}

export const getTables = () => {
  return {
    tables: [
      {
        id: 1,
        number: '11',
        orders: [
          {
            id: 1,
            amount: 3,
          }
        ]
      }
    ]
  }
}