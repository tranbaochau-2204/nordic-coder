export default [
  {
    img: require('../images/pro6.jpg'),
    name: 'Minimal decor furniture',
    category: 'Funiture',
    price: '100.000 VND',
    rating: 3.5
  },
  {
    img: require('../images/pro7.jpg'),
    name: 'Minimal decor furniture 2',
    category: 'Funiture',
    price: '100.000 VND',
    rating: 4.5
  },
  {
    img: require('../images/pro8.jpg'),
    name: 'Minimal decor furniture 3',
    category: 'Funiture',
    price: '100.000 VND',
    rating: 4
  }
]

/*
  4.5
  const floor = Math.floor(rating); => 4
  const remainder = (rating * 10) % 10; => 5
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= floor) {
      stars.push(<GoldenStar/>);
    } else if (remainder > 0) {
      stars.push(<HalfStar/>)
    } else {
      stars.push(<GreyStar/>)
    }
  }
*/