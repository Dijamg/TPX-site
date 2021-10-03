import React from 'react'
import { LoL,  Member } from '../Assets/data'
import { ListGroup } from 'react-bootstrap'

const getOpggUrl = (accountName: string): string => 'https://euw.op.gg/summoner/userName=' + accountName.split(' ').join('+')

const getAchievements = (game: LoL) => {
    if(game.achievements === null){
        return <div className='achievement'>this player has not achieved anything.</div>
    } else {
        return (
            <ul>
                {game.achievements.map( achievement => (
                <li key={achievement} className='achievement'>{achievement}</li>
                ))}
            </ul>
            
        )
    }
}

const LoLinfo =  ({ game, member }: { game: LoL, member: Member}) => {

    return(
        <div>
                <div>
                    <h2>Accounts</h2>
                    <div>
                        <ListGroup>
                            {game.accounts.map( accountName => {
                                return (
                                    <ListGroup.Item className='accountName' key={accountName}>
                                        <img alt='summoner icon' className='summonerIcon' src={game.summonerIcons[game.accounts.indexOf(accountName)]}/>
                                        <span>{accountName}</span><a target="_blank" rel="noopener noreferrer" href={getOpggUrl(accountName)}>OP.GG</a><img alt='rank border' className='rankBorder' src={game.summonerRanks[game.accounts.indexOf(accountName)]}/>
                                    </ListGroup.Item>)
                            })}
                        </ListGroup>
                    </div>
                </div>
                <div className='knownFor'>
                    <hr/>
                    {member.name} is known for following champions <br/>
                    {game.playedChamps.map( currentChamp => (
                        <img alt='champion avatar' key={currentChamp} className ='champIcon' src={currentChamp} width='75' height='75'/>
                    ))}
                </div>
                <div className='achievements'>
                    <hr/>
                    {member.name} has following achievements <br/>{getAchievements(game)}
                </div>
            </div>
    )
}

export default LoLinfo