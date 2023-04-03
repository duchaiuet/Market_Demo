import Head from 'next/head'
import NavBar from "../../components/organisms/navigation/navigation";
import React from "react";
import Market from "../../components/pages/market/market";
import SideFilter from "../../components/organisms/sideFilter/sideFilter";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
interface AppProps {
    children: React.ReactNode
}

export default function Home({children}: AppProps) {
    return (
        <>
            <Head>
                <title>Market</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logo.png"/>
            </Head>

            <main className="flex flex-col bg-[#212121] h-screen sm:overflow-hidden">
                <ToastContainer />
                <NavBar/>
                <div className="flex flex-col overflow-y-scroll bg-zinc-900 overflow-x-hidden border-[1px] rounded-md border-gray-600 mx-8 my-5">
                    <Market/>
                </div>
            </main>
        </>
    )
}
