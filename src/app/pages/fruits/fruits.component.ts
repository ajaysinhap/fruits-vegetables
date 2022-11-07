import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  fruits = [
    {
      imgUrl:
        'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'apple',
      description: 'Apple is tasty fruit',
      rating: 4,
      quality: 3,
      accent: 'red'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/820905/pexels-photo-820905.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'orange',
      description: 'Orange is healthy fruit',
      rating: 4,
      quality: 3,
      accent: 'orange'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'mango',
      description: 'Mango is yummy fruit',
      rating: 2,
      quality: 4,
      accent: 'yellow'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'banana',
      description: 'Banana is healthy fruit',
      rating: 3,
      quality: 4,
      accent: 'yellow'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/12796259/pexels-photo-12796259.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'guava',
      description: 'Guava is tasty fruit',
      rating: 4,
      quality: 2,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/260426/pexels-photo-260426.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'watermelon',
      description: 'Watermelon is juicy fruit',
      rating: 2,
      quality: 3,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/6944172/pexels-photo-6944172.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'strawberry',
      description: 'Strawberry is yummy fruit',
      rating: 3,
      quality: 3,
      accent: 'red'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'pomegranate',
      description: 'Pomegranate is tasty fruit',
      rating: 2,
      quality: 4,
      accent: 'red'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/5644988/pexels-photo-5644988.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'grapes',
      description: 'Grapes is juicy fruit',
      rating: 3,
      quality: 4,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/568471/pexels-photo-568471.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'pear',
      description: 'Pear is healthy fruit',
      rating: 3,
      quality: 2,
      accent: 'green'
    },
  ];
  filterString: String = '';

  constructor() {}

  ngOnInit(): void {}
}
