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

export type Size = {
    size: string,
    quantity: number
}

export type Product = {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number,
    size: Size[]|undefined, //available sizes and quantities of sizes
    quantity: number | undefined,
    category: string
}

export type SingleProduct = {
    id: number,
    name: string,
    category: string,
    img: string,
    price: number,
    size: string | undefined,
    quantity: number,
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
    categories: Category[],
    shoppingCart: SingleProduct[],
    setShoppingCart: (arg0: React.SetStateAction<SingleProduct[]>) => void,
    itemsInCart: number,
    setItemsInCart: (arg0: React.SetStateAction<number>) => void
}




