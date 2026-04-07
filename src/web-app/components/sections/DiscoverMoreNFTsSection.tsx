import { Button } from "../ui/button"
import Image from "next/image"
import { Eye } from "lucide-react"

const cards = {
    cardA: {
        image: '/image/category_images/ImagePlaceholder-9.png',
        title: 'Distant Galaxy',
        icon: '/avatars/Avatar-16.svg',
        name: 'MoonDancer',
        price: '1.63 ETH',
        highestBid: '0.33 wETH'
    },
    cardB: {
        image: '/image/category_images/ImagePlaceholder-10.png',
        title: 'Life On Edena',
        icon: '/avatars/Avatar-10.svg',
        name: 'NebulaKid',
        price: '1.63 ETH',
        highestBid: '0.33 wETH'
    },
    cardC: {
        image: '/image/category_images/ImagePlaceholder-11.png',
        title: 'Astrofication',
        icon: '/avatars/Avatar-15.svg',
        name: 'SpaceOne',
        price: '1.63 ETH',
        highestBid: '0.33 wETH'
    }
}

export default function DiscoverMoreNFTsSection() {
    return (
        <section className="bg-[#2B2B2B] py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-[1050px] mx-auto">
                <div className="flex justify-between items-end mb-14 max-w-7xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold text-white font-work">Discover More NFTs</h2>
                        <p className="text-white text-lg opacity-80 mt-2">Explore New Trending NFTs</p>
                    </div>
                    <Button className="bg-transparent border-[#A259FF] border-2 text-white rounded-3xl px-14 py-6 h-auto flex gap-3 transition-transform hover:scale-[0.97] cursor-pointer">
                        <Eye className="w-5 h-5 text-[#A259FF]" />
                        See All
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {Object.values(cards).map((card, index) => (
                        <div key={index} className="bg-[#3B3B3B] rounded-3xl overflow-hidden transition-transform hover:scale-[0.97] cursor-pointer">

                            <div className="relative w-full aspect-[4/3]">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5 flex flex-col gap-6">
                                <div>
                                    <h3 className="text-white text-xl font-bold mb-2">{card.title}</h3>
                                    <div className="flex items-center gap-3">
                                        <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                            <Image src={card.icon} alt={card.name} fill />
                                        </div>
                                        <p className="text-white font-space text-sm">{card.name}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[#858584] text-xs font-space">Price</span>
                                        <span className="text-white text-sm font-space">{card.price}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 text-right">
                                        <span className="text-[#858584] text-xs font-space">Highest Bid</span>
                                        <span className="text-white text-sm font-space">{card.highestBid}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
