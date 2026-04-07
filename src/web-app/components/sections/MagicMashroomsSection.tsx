import Image from 'next/image';
import { Eye } from 'lucide-react';

const backgroundImage = '/trendingSection/mushroom.png';

export default function MagicMashroomsSection() {
    return (
        <section className="relative w-full h-[600px] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Magic Mushrooms"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent opacity-90" />
            </div>

            <div className="relative z-10 flex h-full max-w-[1050px] mx-auto items-end justify-between px-16 pb-16">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 bg-[#3B3B3B] w-fit px-5 py-2 rounded-full cursor-pointer">
                        <div className="relative w-6 h-6 overflow-hidden rounded-full">
                            <Image src="/avatars/Avatar-7.svg" alt="Shroomie" fill />
                        </div>
                        <span className="text-white font-work-sans">Shroomie</span>
                    </div>

                    <h2 className="text-5xl font-semibold text-white font-work-sans">
                        Magic Mushrooms
                    </h2>

                    <button className="flex items-center gap-3 bg-white text-[#2B2B2B] px-12 py-5 rounded-3xl font-semibold hover:scale-[0.97] transition-transform w-fit cursor-pointer">
                        <Eye className="w-5 h-5 text-[#A259FF]" /> See NFT
                    </button>
                </div>

                <div className="bg-[#3B3B3B]/50 backdrop-blur-md p-8 rounded-3xl min-w-[280px] text-white font-space">
                    <p className="text-xs mb-2 tracking-widest">Auction ends in:</p>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold">59</span>
                            <span className="text-[10px]">Hours</span>
                        </div>
                        <span className="text-3xl font-bold">:</span>
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold">59</span>
                            <span className="text-[10px]">Minutes</span>
                        </div>
                        <span className="text-3xl font-bold">:</span>
                        <div className="flex flex-col">
                            <span className="text-4xl font-bold">59</span>
                            <span className="text-[10px]">Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
