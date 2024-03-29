import React, {useState, useEffect} from 'react'
import MerchStoreCategory from './Components/MerchStoreCategory'
import ProductInfoPage from './Components/ProductInfoPage'
import TPXsite from './Components/TPXsite'
import Footer from './Components/Footer'
import { Member, LoL, Runeterra, TFT, Operators, Product, Category, SingleProduct } from './Assets/data'
import MemberService from './Services/Member'
import ProductService from './Services/Product'
import CategoryService from './Services/Category'
import GameInfoService from './Services/GameInfo'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


const App = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [gameInfos, setGameInfos] = useState<(LoL|Runeterra|TFT)[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [itemsInCart, setItemsInCart] = useState<number>(0);
  
  //List which holds items in shopping cart. This will be passed into other components where hovering over shopping cart is possible.
  const [shoppingCart, setShoppingCard] = useState<SingleProduct[]>([])

  //Bundle all states containing members and their information for shortening code.
  const operators: Operators = {
    members: members,
    gameInfos: gameInfos,
    products: products,
    categories: categories,
    shoppingCart: shoppingCart,
    setShoppingCart: setShoppingCard,
    itemsInCart: itemsInCart,
    setItemsInCart: setItemsInCart
}

  useEffect(() => {
    MemberService
        .getAll()
        .then(initialMembers => {
          setMembers(initialMembers)
        })
    }, [])

  useEffect(() => {
      GameInfoService
          .getAll()
          .then(initialGameInfos => {
            setGameInfos(initialGameInfos)
          })
      }, [])

  useEffect(() => {
    ProductService
        .getAll()
        .then(initialProducts => {
          setProducts(initialProducts)
        })
    }, [])
    
  useEffect(() => {
    CategoryService
        .getAll()
        .then(initialCategories => {
          setCategories(initialCategories)
        })
    }, [])

  const getProductById = (id: number):Product|undefined => products.find(product => product.id == id)


  return(    
        <div>
        <Router>
          <Route exact path="/" render={() => <TPXsite operators={operators}/>}/>
          <Route exact path="/merch" render={() => <MerchStoreCategory operators={ operators} categoryName="Hoodies" />} />
          <Route exact path="/merch/Hoodies" render={() => <MerchStoreCategory operators={ operators} categoryName="Hoodies" />} />
          <Route exact path="/merch/Headwear" render={() => <MerchStoreCategory operators={ operators} categoryName="Headwear" />} />
          <Route exact path="/merch/T-Shirts" render={() => <MerchStoreCategory operators={ operators} categoryName="T-Shirts" />} />
          <Route exact path="/merch/Accessories" render={() => <MerchStoreCategory operators={ operators} categoryName="Accessories" />} />

          <Route exact path="/merch/:category/:id" render={ ({ match }) => {
            const product = getProductById(match.params.id)
             if(product !== undefined) {return <ProductInfoPage operators={ operators} product={product}/>}
          }
          } />

        <Footer/>
        </Router>
        </div>
  )

}

export default App