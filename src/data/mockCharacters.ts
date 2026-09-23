import { Character } from '../types';

export const INITIAL_CHARACTERS: Character[] = [
  {
    id: '4c7e0252-698b-41c6-ac92-4f932e609380',
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    wand: {
      wood: 'vine',
      core: 'dragon heartstring',
      length: 10.75
    },
    actor: 'Emma Watson',
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/hermione.jpeg'
  },
  {
    id: 'af300e1a-2963-4818-88a1-17500dc36e59',
    name: 'Draco Malfoy',
    gender: 'male',
    house: 'Slytherin',
    wand: {
      wood: 'hawthorn',
      core: 'unicorn tail-hair',
      length: 10
    },
    actor: 'Tom Felton',
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/draco.jpg'
  },
  {
    id: '9e3f7c96-987d-4fe9-b497-fde8d47d73d7',
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11
    },
    actor: 'Daniel Radcliffe',
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/harry.jpg'
  },
  {
    id: 'c3b1f9a5-b87b-48bf-b00d-95b093ea6390',
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor',
    wand: {
      wood: 'willow',
      core: 'unicorn tail-hair',
      length: 14
    },
    actor: 'Rupert Grint',
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/ron.jpg'
  },
  {
    id: 'ca3827f0-375a-4891-aaa5-f5e8a5bad225',
    name: 'Minerva McGonagall',
    gender: 'female',
    house: 'Gryffindor',
    wand: {
      wood: 'fir',
      core: 'dragon heartstring',
      length: 9.5
    },
    actor: 'Dame Maggie Smith',
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/mcgonagall.jpg'
  },
  {
    id: '36fc7e64-1529-4923-a0fa-7c6418428680',
    name: 'Severus Snape',
    gender: 'male',
    house: 'Slytherin',
    wand: {
      wood: '',
      core: '',
      length: null
    },
    actor: 'Alan Rickman',
    alive: false,
    image: 'https://ik.imagekit.io/hpapi/snape.jpg'
  },
  {
    id: '861c4cde-2f0f-4796-8d8f-9492e74b2573',
    name: 'Cedric Diggory',
    gender: 'male',
    house: 'Hufflepuff',
    wand: {
      wood: 'ash',
      core: 'unicorn hair',
      length: 12.25
    },
    actor: 'Robert Pattinson',
    alive: false,
    image: 'https://ik.imagekit.io/hpapi/cedric.png'
  },
  {
    id: '1cd6dc64-01a9-43d5-aca1-1ffda607d8be',
    name: 'Luna Lovegood',
    gender: 'female',
    house: 'Ravenclaw',
    wand: {
      wood: '',
      core: '',
      length: null
    },
    actor: 'Evanna Lynch',
    alive: true,
    image: 'https://ik.imagekit.io/hpapi/luna.jpg'
  }
];
