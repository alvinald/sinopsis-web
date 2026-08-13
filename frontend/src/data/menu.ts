export interface Menu {
  id: number
  name: string
  price: number
  description: string
  image: string
  category: string
  isActive: boolean
  createdAt: string
}

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Espresso',
    price: 28000,
    description:
      'Concentrated coffee brewed by forcing hot water through finely ground coffee beans. Rich, bold, and full-bodied with a smooth crema on top.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
    category: 'Coffee',
    isActive: true,
    createdAt: '2024-01-10',
  },
  {
    id: 2,
    name: 'Caramel Latte',
    price: 42000,
    description:
      'Silky smooth espresso blended .',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    category: 'Coffee',
    isActive: true,
    createdAt: '2024-01-12',
  },
  {
    id: 3,
    name: 'Matcha Latte',
    price: 45000,
    description:
      'Premium Japanese ceremonial grade matcha whisked with oat milk, naturally sweet with an earthy, umami finish.',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80',
    category: 'Non-Coffee',
    isActive: true,
    createdAt: '2024-01-15',
  },
  {
    id: 4,
    name: 'Croissant',
    price: 32000,
    description:
      'Buttery, flaky layers of hand-laminated pastry dough, baked fresh every morning to golden perfection.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    category: 'Pastry',
    isActive: true,
    createdAt: '2024-01-18',
  },
  {
    id: 5,
    name: 'Avocado Toast',
    price: 55000,
    description:
      'Thick-cut artisan sourdough topped with smashed avocado, cherry tomatoes, microgreens, and a sprinkle of everything bagel seasoning.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
    category: 'Food',
    isActive: true,
    createdAt: '2024-01-20',
  },
  {
    id: 6,
    name: 'Cold Brew',
    price: 38000,
    description:
      'Steeped for 18 hours in cold water, our cold brew delivers a smooth, naturally sweet coffee experience with low acidity.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80',
    category: 'Coffee',
    isActive: true,
    createdAt: '2024-02-01',
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    price: 48000,
    description:
      'Warm, individual chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream and fresh berries.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    category: 'Dessert',
    isActive: true,
    createdAt: '2024-02-05',
  },
  {
    id: 8,
    name: 'Cappuccino',
    price: 35000,
    description:
      'Classic Italian coffee drink with equal parts espresso, steamed milk, and silky milk foam. A perfect balance of strength and creaminess.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
    category: 'Coffee',
    isActive: false,
    createdAt: '2024-02-08',
  },
  {
    id: 9,
    name: 'Strawberry Smoothie',
    price: 40000,
    description:
      'Fresh strawberries blended with Greek yogurt, honey, and a splash of coconut milk. Refreshing and packed with natural goodness.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80',
    category: 'Non-Coffee',
    isActive: true,
    createdAt: '2024-02-10',
  },
  {
    id: 10,
    name: 'Club Sandwich',
    price: 65000,
    description:
      'Triple-stacked layers of toasted bread with grilled chicken, crispy bacon, lettuce, tomato, and our signature aioli sauce.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
    category: 'Food',
    isActive: true,
    createdAt: '2024-02-15',
  },
]

export const categories = ['All', 'Coffee', 'Non-Coffee', 'Food', 'Pastry', 'Dessert']
