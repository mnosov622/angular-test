import { Component } from '@angular/core';
import { PizzaCardComponent } from '../components/pizza-card/pizza-card.component';
import { CommonModule } from '@angular/common';

interface Pizza {
  title: string;
  description: string;
  pizzaImage: string;
}

@Component({
  selector: 'app-pizzas-list',
  standalone: true,
  imports: [PizzaCardComponent, CommonModule],
  templateUrl: './pizzas-list.component.html',
  styleUrl: './pizzas-list.component.css',
})
export class PizzasListComponent {
  pizzas: Pizza[] = [
    {
      title: 'Мясная Делюкс',
      description:
        'Пепперони, лук, бекон, томантная паста, колбаски, перец, грибы, соус чили, ананасы',
      pizzaImage: 'pizza1',
    },
    {
      title: 'Морская Премиум',
      description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
      pizzaImage: 'pizza2',
    },
    {
      title: 'Бекон и Сосиски',
      description: 'Бекон, сыр, сосиски, ананас, томатная паста',
      pizzaImage: 'pizza3',
    },
    {
      title: 'Куриная Делюкс',
      description:
        'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
      pizzaImage: 'pizza4',
    },
    {
      title: 'Барбекю Премиум',
      description:
        'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
      pizzaImage: 'pizza5',
    },
    {
      title: 'Пепперони Дабл',
      description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
      pizzaImage: 'pizza6',
    },
    {
      title: 'Куриное трио',
      description:
        'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
      pizzaImage: 'pizza7',
    },
    {
      title: 'Сырная',
      description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
      pizzaImage: 'pizza8',
    },
  ];
}
