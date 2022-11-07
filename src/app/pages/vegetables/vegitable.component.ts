import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegitable',
  templateUrl: './vegitable.component.html',
  styleUrls: ['./vegitable.component.scss'],
})
export class VegitableComponent implements OnInit {
  vegetables = [
    {
      imgUrl:
        'https://media.istockphoto.com/id/1410147960/photo/purple-and-green-thai-aubergines.jpg?b=1&s=612x612&w=0&k=20&c=FMq3jN2Q8jFM7LfSHNkXyBfxqNTWPzSEgySiqvq8PqU=',
      name: 'brinjal',
      description: 'Brinjal helps in weight loss',
      rating: 2,
      quality: 3,
      accent: 'purple'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'Carrot',
      description: 'Carrot is healthy vegetable',
      rating: 4,
      quality: 3,
      accent: 'orange'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/1374651/pexels-photo-1374651.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'capsicum',
      description: 'Capsicum is healthy vegetable',
      rating: 3,
      quality: 4,
      accent: 'yellow'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'cabbage',
      description: 'Cabbage is healthy vegetable',
      rating: 3,
      quality: 4,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'broccoli',
      description: 'Broccoli is healthy vegetable',
      rating: 3,
      quality: 3,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/5490795/pexels-photo-5490795.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'pumpkin',
      description: 'Pumpkin is healthy vegetable',
      rating: 2,
      quality: 3,
      accent: 'orange'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'cucumber',
      description: 'Cucumber is healthy vegetable',
      rating: 4,
      quality: 3,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'cauliflower',
      description: 'Cauliflower is healthy vegetable',
      rating: 4,
      quality: 3,
      accent: 'green'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/4110466/pexels-photo-4110466.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'sweet potato',
      description: 'Sweet Potato is tasty vegetable',
      rating: 4,
      quality: 2,
      accent: 'red'
    },
    {
      imgUrl:
        'https://images.pexels.com/photos/603030/pexels-photo-603030.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'corn',
      description: 'Corn is healthy vegetable',
      rating: 3,
      quality: 4,
      accent: 'yellow'
    },
  ];
  filterString: String = '';
  constructor() {}

  ngOnInit(): void {}
}
