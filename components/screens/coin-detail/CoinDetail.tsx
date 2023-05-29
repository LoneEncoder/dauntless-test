'use client'
import React, {useEffect, useState} from 'react'
import Head from "next/head";
import {useRouter} from 'next/router';
import {CoinService} from "@/services/coin.service";
import CoinItemDetail from "@/components/ui/coin/CoinItemDetail";
import {ICoinDataSingle} from "@/interfaces/coin.interface";

const CoinDetail: React.FC = () => {
    const {query, back} = useRouter();
    const [card, setCard] = useState<ICoinDataSingle | null>(null)

    useEffect(() => {
        (async () => {
            try {
                const coins = await CoinService.getAll();
                const selectedCard = coins.find(coin => coin.symbol === query.id)
                setCard(selectedCard)
            } catch (e) {
                console.log(e)
            }
        })()
    }, [query])

    return (
        <>
            <Head>
                <title>CoinGecko Coin Detail</title>
            </Head>
            <main>
                <div className="bg-white pt-8 pb-6">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
                        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                            CoinGecko Coin Detail
                        </h1>
                    </div>
                </div>
                <div className="container mx-3 p-4">
                    <button
                        onClick={() => back()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go back
                    </button>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* End hero unit */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {card && <CoinItemDetail card={card}/>}
                    </div>
                </div>
            </main>
        </>
    )
}

export default CoinDetail;