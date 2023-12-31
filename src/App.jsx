import './App.css'
import Button22 from './components/Button'
import MyUserList ,{ SingleUser,ITEMS } from './components/UserList'

import listem from './data/veri'

function App() {
  const userName = "Başak Aleyna Koç"
  const users = ["Başak", "üretken akademi ile 5. hafta", "˖⁺‧₊˚ ♡ ˚₊‧⁺˖"]
  const mapUser = users.map((user, i) => <li key={i} >{user}</li>)
  const isActive = false
  

  const styles = {
    h4style: { backgroundColor: "light blue", fonstSize:"60px",color:"white"}
    
  }

  const products = [

    { id: 1, name: "meyveler", inStock: false },
    { id: 2, name: "sebzeler", inStock: true},
    { id: 3, name: "kahvaltılık", inStock: false },
    { id: 4, name: "italyan makarnalar", inStock: true},
    { id: 5, name: "italyan makarnalar",inStock:false},
    
  ]

  



  return (

    
    <>
      {listem}
      



      <h3 style={{ backgroundColor: `${isActive?"green":"pink"} `}}>
        Merhaba {userName}

      </h3>

      <p>üretken akademi: {users.length} {2023} </p>
      <img src="https://picsum.photos/400/300" alt="" />
      <hr />
      <div className="bg-color">yeni alan</div>
      <h4 style={styles.h4style}>benim hakkımda</h4>
      <ul>
        {users.map((user, İndex) => <li key={İndex}>{user}</li>)}

      </ul>
      <hr />
      <h5>Yeni kullanıcılar</h5>
      <ul style={{backgroundColor:"pink",listStyle:"none",margin:0,padding:0}} >
        {mapUser}
      </ul>
      <hr />
      <h2>Ürünler</h2>
      <ul>
        {
          products
            .filter(item => item.inStock==false)
            .map(item =>
              <li key={item.id}>{item.name.toUpperCase()}</li>)
          
        }
      </ul>
      <hr />
      <h5> Yeni Resim </h5>
      <ImgThumbnail />
      <MyUserList />
      <SingleUser />
      {/** 10 tane single user çağrılnası */}
      {[...Array(10)].map((item, index) => <SingleUser key={index}/>)}





      <h2>ITEMS</h2>
      {ITEMS.map((item, index) => <span key={index}>{item}</span>)}
      <hr />
      <Button22/>





    </>
  )
}

function ImgThumbnail() {
  return (
    <img src="https://picsum.photos/400/400" alt="" 
      style={{
        padding: "4px", margin: 0, borderRadius: "8px",
      border:"1px solid #ccc"}}
      />
  )
}

export default App
