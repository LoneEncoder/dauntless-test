import React from "react";
import CoinDetail from "@/components/screens/coin-detail/CoinDetail";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ICoinData, ICoinDataSingle} from "@/interfaces/coin.interface";
import {CoinService} from "@/services/coin.service";

const CurrencyPage: React.FC = () => <CoinDetail/>

/*
    I've implemented fetching data using hooks for CoinDetail component
    But I also added another approach how to fetch data using getStaticPaths and getStaticProps
    Check it out below

    const CurrencyPage: NextPage<ICoinDataSingle> = ({card}) => <CoinDetail card={card}/>

    export const getStaticPaths: GetStaticPaths = async () => {
        const cards = await CoinService.getAll();
        return {
            paths: cards.map(card => ({
                params: {
                    id: card?.symbol
                }
            })),
            fallback: 'blocking'
        }
    }


    export const getStaticProps: GetStaticProps<ICoinDataSingle> = async ({params}) => {
        const cards = await CoinService.getAll();
        const selectedCard = cards?.find(coin => coin.symbol === params?.id)
        return {
            props: {card: selectedCard},
        }
    }
 */


export default CurrencyPage;