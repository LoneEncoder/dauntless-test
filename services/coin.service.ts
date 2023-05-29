const API_BASE_URL = 'https://api.coingecko.com/api/v3'

export const CoinService = {
    async getAll() {
        const response = await fetch(`${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=45&page=1`)
        if (!response.ok) throw new Error('failed to fetch data');

        return response.json();
    }
}