function Drawer() {
    return (
        <div className="drawer">
        <h2>Корзина</h2>
        <div className="cart">
          <div className="cartItem">
          <img src="img/sneakers1.jpg" alt="sneakers" width={70} height={70}></img>
          <div className="cartItemInfo" >
            <span>Мужские Кроссовки Nike Blazer Mid Suede</span>
            <div className="cartPrice">
              <span><b>1205 руб</b></span>
              <img className="removeButton" src='img/remove.svg' alt="remove"></img>
            </div>
          </div>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li><span>Итого:</span><div className="dashed"></div><span>21 498 руб. </span></li>
            <li><span>Налог 5%:</span><div className="dashed"></div><span>1074 руб. </span></li>
          </ul>
          <button className="buttonOrder"><span>Оформить заказ </span><img src="img/arrow.svg"></img></button>
        </div>
        
        
      </div>
    )
}

export default Drawer;