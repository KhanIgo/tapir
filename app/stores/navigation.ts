import { defineStore } from 'pinia'
import type { FooterNavGroup } from '@/types/navigation'

export const useNavigationStore = defineStore('navigation', () => {
  const mainNav = [
    { name: 'Мужчинам', to: '#' },
    { name: 'Женщинам', to: '#' },
    { name: 'Каталог', to: '#' },
    { name: 'Доставка', to: '#' },
    { name: 'Блог', to: '#' },
    { name: 'О нас', to: '#' },
  ]

  const footerNavs: FooterNavGroup[] = [
    {
      title: 'Каталог',
      items: [
        { name: 'Все бренды', to: '#' },
        { name: 'Nike', to: '#' },
        { name: 'Adidas', to: '#' },
        { name: 'Puma', to: '#' },
        { name: 'New Balance', to: '#' },
      ],
    },
    {
      title: 'Помощь',
      items: [
        { name: 'Доставка', to: '#' },
        { name: 'Заказ и оплата', to: '#' },
        { name: 'Обмен и Возврат', to: '#' },
        { name: 'F. A. Q.', to: '#' },
      ],
    },
    {
      title: 'Информация',
      items: [
        { name: 'Преимущества', to: '#' },
        { name: 'Гарантия и безопасность', to: '#' },
        { name: 'Индивидуальный заказ', to: '#' },
        { name: 'Акции', to: '#' },
      ],
    },
    {
      title: 'Компания',
      items: [
        { name: 'О нас', to: '#' },
        { name: 'Блог', to: '#' },
        { name: 'Отзывы', to: '#' },
        { name: 'Контакты', to: '#' },
      ],
    },
  ]

  return { mainNav, footerNavs }
})
