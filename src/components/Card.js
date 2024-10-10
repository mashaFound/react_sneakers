function Card(props) {
  console.log(props.tittle)
    return (
        <div className="card">
      <div className="favourite">
        <img src="img/heart_unliked.svg" alt="unliked"></img>
      </div>
      <img src= {props.imageUrl} width={133} height={112} alt="sneakers"/>
      <h5>{props.title}</h5>
      <div className="cardBottom">
        <div className="price">
          <span className="priceText">Цена:</span>
          <b>{props.price} руб</b>
        </div>
        <button>
        <img src="img/button_plus.svg" alt="add"></img>
      </button>
      </div>
      
    </div>
    )
}

export default Card;