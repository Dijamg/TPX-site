export type Member = {
    id: number,
    name: string,
    imgUrl: string,
    description: string,
}

export type LoL = {
    id: number,
    playerId: number,
    name: string,
    gameIconUrl: string,
    accounts: string[],
    summonerIcons: string[],
    summonerRanks: string[],
    playedChamps: string[],
    achievements: string[]|null
}

export type Runeterra = {
    id: number,
    playerId: number,
    name: string,
    gameIconUrl: string,
    accounts: string[],
}

export type TFT = {
    id: number,
    playerId: number,
    name: string,
    gameIconUrl: string,
    accounts: string[],
}

export type Operators = {
    members: Member[],
    gameInfos: (LoL|Runeterra|TFT)[]
}




