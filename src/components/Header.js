function Header() {
    return (
        <header>
    <div className="headerLeft">
      <img src="/img/logo.png" className="logo"></img>
      <div className="headerInfo">
      <h3>React Sneakers</h3>
      <p>Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul className="headerRight">
      <li>
        <img src="img/cart.svg"/>
        <span>1205 руб</span>
      </li>
      <li>
      <img src="img/heart.svg" />
      <span>Закладки</span>
      </li>
      <li>
      <img src="img/user.svg" />
      <span>Профиль</span>
      </li>
    </ul>
  </header>
    )
}

export default Header;