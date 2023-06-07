import { v4 as uuidv4 } from 'uuid';
import { SyntheticGrass } from '../models/synthetic-grass.model';

export const SYNTHETIC_MOCK_DATA: SyntheticGrass[]  = [
  {
    id: uuidv4(),
    name: 'nylon',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/nylon.jpg'
  },
  {
    id: uuidv4(),
    name: 'pile density',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/pile-density.jpg'
  },
  {
    id: uuidv4(),
    name: 'colour choice',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/colour-choice.jpg'
  },
  {
    id: uuidv4(),
    name: 'polyethylene',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/polyethylene.jpg'
  },
  {
    id: uuidv4(),
    name: 'home lawn',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/home-lawn.jpg'
  },
  {
    id: uuidv4(),
    name: 'pile height short',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/pile-height-short.jpg'
  },
  {
    id: uuidv4(),
    name: 'pile height medium',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/medium.jpg'
  },
  {
    id: uuidv4(),
    name: 'pile height long',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/long.jpg'
  },
  {
    id: uuidv4(),
    name: 'sports complexes',
    price: 30,
    qty: 1,
    img: '../../../../assets/img/sports-complexes.jpg'
  },
  ];
