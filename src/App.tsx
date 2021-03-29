import React, {useState, useEffect} from 'react'
import MerchStore from './Components/MerchStore'
import TPXsite from './Components/TPXsite'
import { Member, LoL, Runeterra, TFT, Operators } from './Assets/data'
import MemberService from './Services/Member'
import GameInfoService from './Services/GameInfo'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


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
        <Router>
          <Route exact path="/" render={() => <TPXsite operators={operators}/>}/>
          <Route exact path="/merch" render={() => <MerchStore/>} />
        </Router>
        </div>
  )

}

export default App