import Image from "next/image";
import React from "react";
import {ICoinDataSingle} from "@/interfaces/coin.interface";
import {useRouter} from "next/router";

const CoinItem: React.FC<ICoinDataSingle> = ({card}) => {
    const {push} = useRouter();
    return (
        <div className="flex flex-col">
            <Image
                src={card.image}
                alt="placeholder"
                width={200}
                height={200}
                className="object-cover object-center"
            />
            <div className="flex-1 p-4">
                <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                <ul className="list-disc pl-5">
                    <li>Current Price: ${card.current_price}</li>
                    <li>24h High: ${card.high_24h}</li>
                    <li>24h Low: ${card.low_24h}</li>
                </ul>
            </div>
            <div className="p-4">
                <button onClick={() => push(`/currency/${card.symbol}`)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    More
                </button>
            </div>
        </div>
    );
}

export default CoinItem;