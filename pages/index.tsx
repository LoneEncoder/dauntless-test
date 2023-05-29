import React from "react";
import Home from "@/components/screens/home/Home";
import {GetStaticProps, NextPage} from "next";
import {ICoinData} from "@/interfaces/coin.interface";
import {CoinService} from "@/services/coin.service";

const HomePage: NextPage<ICoinData> = ({cards}) => <Home cards={cards}/>

export const getStaticProps: GetStaticProps<ICoinData> = async () => {
    const cards = await CoinService.getAll();
    return {
        props: {cards},
    }
}

export default HomePage;