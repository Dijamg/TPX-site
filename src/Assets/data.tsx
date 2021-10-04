export type Member = {
    id: number,
    name: string,
    imgUrl: string,
    description: string,
}

export type Category = {
    name: string,
    id: number
}

export type Product = {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number,
    status: string,
    category: string
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
    achievements: string[]|null,
    isLoL: true
}

export type Runeterra = {
    id: number,
    playerId: number,
    name: string,
    gameIconUrl: string,
    accounts: string[],
    isRuneterra: true
}

export type TFT = {
    id: number,
    playerId: number,
    name: string,
    gameIconUrl: string,
    accounts: string[],
    isTFT: true
}

export type Operators = {
    members: Member[],
    gameInfos: (LoL|Runeterra|TFT)[],
    products: Product[],
    categories: Category[]
}




