import React from "react";
import Image from "next/image";
import {ICoinDataSingle} from "@/interfaces/coin.interface";

const CoinItemDetail: React.FC<ICoinDataSingle> = ({card}) => {
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
                    <li>All time high price: ${card.ath}</li>
                    <li>Market Cap: ${card.market_cap}</li>
                    <li>Market Cap Rank: {card.market_cap_rank}</li>
                </ul>
            </div>
        </div>
    );
}

export default CoinItemDetail;