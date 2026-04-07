'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import { Rocket } from "lucide-react";
import SpaceWalkCard from "../SpaceWalkCard";
import { motion } from 'framer-motion';

const animation = '/trendingSection/animation.gif';

export default function DiscoverDigitalArtSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}

            className="bg-[#2B2B2B] px-8 py-10 lg:py-20">
            <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-20">

                <div className="flex flex-col flex-1 gap-8 lg:gap-10">
                    <div className="space-y-5">
                        <h4 className="text-4xl lg:text-7xl font-semibold text-white leading-tight">
                            Discover <br /> Digital Art & <br /> Collect Nfts
                        </h4>
                        <p className="text-white text-lg lg:text-xl opacity-90 max-w-[500px] leading-relaxed">
                            Nft marketplace Ui created with Anima for Figma. Collect, Buy And Sell Art From More Than 20k Nft Artists.
                        </p>
                    </div>

                    <div className="w-full sm:w-fit">
                        <Button className="bg-[#A259FF] hover:bg-[#A259FF]/90 rounded-2xl px-12 py-4 h-auto text-white flex items-center gap-3 text-lg font-semibold transition-transform hover:scale-[0.97] cursor-pointer">
                            <Rocket className="w-5 h-5 text-white" />
                            Get Started
                        </Button>
                    </div>

                    <div className="flex justify-between md:justify-start md:gap-16 text-white pt-2">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-space">240k+</span>
                            <span className="text-lg">Total Sale</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-space">100k+</span>
                            <span className="text-lg">Auctions</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-space">240k+</span>
                            <span className="text-lg">Artists</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden relative aspect-square">
                    <Image
                        src={animation}
                        alt="Space Walking NFT Animation"
                        fill
                        priority
                        unoptimized
                        className="object-cover cursor-pointer"
                    />

                    {/* < SpaceWalkCard /> */}
                </div>

            </div>
        </motion.section>
    );
}
