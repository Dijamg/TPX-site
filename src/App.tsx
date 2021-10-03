import React, {useState, useEffect} from 'react'
import MerchStore from './Components/MerchStore'
import TPXsite from './Components/TPXsite'
import { Member, LoL, Runeterra, TFT, Operators, Product, Category } from './Assets/data'
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

  //Bundle all states containing members and their information for shortening code.
  const operators: Operators = {
    members: members,
    gameInfos: gameInfos,
    products: products,
    categories: categories
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

  
  return(    
        <div>
        <Router>
          <Route exact path="/" render={() => <TPXsite operators={operators}/>}/>
          <Route exact path="/merch" render={() => <MerchStore operators={ operators} />} />
        </Router>
        </div>
  )

}

export default App