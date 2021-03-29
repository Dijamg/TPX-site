import React from 'react'
import LoLinfo from './LoLinfo'
import { LoL, TFT, Runeterra, Member } from '../Assets/data'


const GameInfo = ({ game, member }: { game: LoL|TFT|Runeterra, member: Member}) => {

     if('isLoL' in game){
        return(
            <LoLinfo game = {game} member = {member}/>
        )
    } else {
        return <p>Informaiton about this game has not been yet implemented</p>
    }
}

export default GameInfo