export interface ICoin {
    id: string,
    symbol: string,
    name: string,
    image: string,
    "current_price": number,
    "market_cap": number,
    "market_cap_rank": number,
    "high_24h": number,
    "low_24h": number,
    "ath": number,
}

export interface ICoinData {
    cards: ICoin[]
}

export interface ICoinDataSingle {
    card: ICoin
}

