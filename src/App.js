import Card from './components/Card';
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: './img/sneakers1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: './img/sneakers2.jpg'
  },

  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: './img/sneakers3.jpg'
  },

  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: './img/sneakers4.jpg'
  },
  
]

function App() {
  return <div className='wrapper'>
    <div className="overlay" style={{display: 'none'}}>
      <Drawer/>
    </div>
    <Header/>
    <div className="content">
      <div className="contentTop">
      <h1>Все кроссовки</h1>
      <div className="search">
        <img src="img/search.svg" alt="search"></img>
        <input placeholder="Поиск..."></input>
      </div>
      </div>
      <div className="sneakers">
        {arr.map((obj) => (
          <Card 
          title = {obj.title}
          price = {obj.price}
          imageUrl = {obj.imageUrl}

        />
        ))}
      </div>
    </div>
  </div>
}

export default App;
