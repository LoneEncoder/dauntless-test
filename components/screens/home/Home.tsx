import Head from "next/head";
import React from "react";
import {ICoinData} from "@/interfaces/coin.interface";
import CoinItem from "@/components/ui/coin/CoinItem";

const Home: React.FC<ICoinData> = ({cards}) => {
    return (
        <>
            <Head>
                <title>CoinGecko Market Pairs (USD)</title>
            </Head>
            <main>
                <div className="bg-white pt-8 pb-6">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
                        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                            Market Pairs (USD)
                        </h1>
                        <p className="text-xl text-center text-gray-600">
                            The following is a list of crypto currencies with information
                            related to the USD trading pair.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* End hero unit */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {cards.length ? cards.map((card) => <CoinItem key={card.id} card={card}/>) : <div>No data</div>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;