'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, staggerItem } from "@/lib/animations";

const cards = {
    cardA: {
        image: '/icons/info_card_icons/SetupWalletIcon.svg',
        title: 'Setup Your Wallet',
        description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
    },
    cardB: {
        image: '/icons/info_card_icons/CreateCollectionIcon.svg',
        title: 'Create Collection',
        description: 'Upload your work and setup your collection. Add a description, social links and floor price.'
    },
    cardC: {
        image: '/icons/info_card_icons/StartEarningIcon.svg',
        title: 'Start Earning',
        description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
    },
}

export default function HowItWorksSection() {
    return (
        <motion.section
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}

            className="bg-[#2B2B2B] py-20 px-10">
            <div className="max-w-[1050px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2 font-work">How It Works</h2>
                    <p className="text-white text-lg opacity-80">Find out how to get started</p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {Object.values(cards).map((card, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-[#3B3B3B] p-8 rounded-3xl flex flex-col items-center text-center gap-5"
                        >
                            <div className="relative w-full aspect-square max-w-[250px]">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-bold text-white font-work">
                                    {card.title}
                                </h3>
                                <p className="text-white opacity-90 leading-relaxed text-sm">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}