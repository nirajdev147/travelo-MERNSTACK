import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";

const tours = [
  {
    id: "01",
    title: "Ilam Tea Garden",
    city: "Ilam",
    distance: 300,
    address: 'Panitar',
    price: 999,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Niraj Dev",
        rating: 4.6,
      },
      {
        name: "Bikram Poudel",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Octopus Falls",
    city: "Lamjung",
    distance: 400,
    address: 'Somewhere in Lamjung',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Rara Lake",
    city: "Mugu",
    distance: 500,
    address: 'Somewhere',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "White water Rafting in Trishuli river",
    city: "Chitwan",
    distance: 500,
    address: 'Somewhere',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Jungle Safari",
    city: "Chitwan",
    distance: 500,
    address: 'Somewhere',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Swayambhunath Temple",
    city: "Kathmandu",
    distance: 500,
    address: 'In the heart of the Kathmandu City',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Paragliding",
    city: "Kaski",
    distance: 500,
    address: 'Pokhara',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountain",
    city: "Mustang district",
    distance: 500,
    address: 'Somewhere in Mustang',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Maya Devi Temple",
    city: "Lumbini",
    distance: 500,
    address: 'Somewhere in Lumbini',
    price: 999,
    maxGroupSize: 5,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "10",
    title: "A Mountain Village",
    distance: 500,
    address: 'Somewhere in Namche',
    price: 999,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg10,
    featured: false,
  }
];

export default tours;
