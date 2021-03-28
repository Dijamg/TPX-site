import React, {useState, useEffect} from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Tournaments from './Components/Tournaments'
import Members from './Components/Members'
import About from './Components/About'
import { Member, LoL, Runeterra, TFT, Operators } from './Assets/data'
import MemberService from './Services/Member'
import GameInfoService from './Services/GameInfo'


const App = () => {
  const [members, setMembers] = useState<Member[]>([])
  const [gameInfos, setGameInfos] = useState<(LoL|Runeterra|TFT)[]>([])

  //Bundle all states containing members and their information for shortening code.
  const operators: Operators = {
    members: members,
    gameInfos: gameInfos
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

  
  return(    
        <div>
        <Navbar/>
        <div className="page-containers">
          <Home/>
          <Members operators={operators}/>
          <Tournaments/>
          <About/>
        </div>
        </div>
  )

}

export default App