import Image from "next/image";

const cards = {
    card1: {
        titleImage: '/trendingSection/dog.png',
        shortImages: {
            images1: '/trendingSection/cat.png',
            images2: '/trendingSection/bear.png',
            box: '1025+'
        },
        title: 'DSGN Animals',
        icon: '/avatars/Avatar-6.svg',
        name: 'MrFox'
    },
    card2: {
        titleImage: '/trendingSection/mushroom.png',
        shortImages: {
            images1: '/trendingSection/mushroom.png',
            images2: '/trendingSection/mushroom.png',
            box: '1025+'
        },
        title: 'Magic Mushrooms',
        icon: '/avatars/Avatar-7.svg',
        name: 'Shroomie'
    },
    card3: {
        titleImage: '/trendingSection/robot.png',
        shortImages: {
            images1: '/trendingSection/robot.png',
            images2: '/trendingSection/robot.png',
            box: '1025+'
        },
        title: 'Disco Machines',
        icon: '/avatars/Avatar-12.svg',
        name: 'BeKind2Robots'
    }
}

export default function TrendingCollectionSection() {
    return (
        <section className="bg-[#2B2B2B] text-white py-10 px-4 md:px-10 lg:px-20">
            <div className="max-w-[1050px] mx-auto">
                <h1 className="text-3xl font-semibold mb-2">Trending Collection</h1>
                <p className="text-lg mb-10">Checkout Our Weekly Updated Trending Collection.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.values(cards).map((card, index) => (
                        <div key={index} className="flex flex-col gap-4">

                            <div className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer">
                                <Image
                                    src={card.titleImage}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform hover:scale-[0.97]"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="relative aspect-square rounded-2xl overflow-hidden hover:scale-[0.97] cursor-pointer">
                                    <Image src={card.shortImages.images1} alt="Sub NFT 1" fill className="object-cover" />
                                </div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden hover:scale-[0.97] cursor-pointer">
                                    <Image src={card.shortImages.images2} alt="Sub NFT 2" fill className="object-cover" />
                                </div>
                                <div className="bg-[#A259FF] flex items-center justify-center rounded-2xl aspect-square font-space text-xl font-bold cursor-pointer hover:scale-[0.97]">
                                    {card.shortImages.box}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 mt-2">
                                <h3 className="text-xl font-semibold leading-tight">
                                    {card.title}
                                </h3>
                                <div className="flex items-center gap-3 group">
                                    <Image
                                        src={card.icon}
                                        alt={card.name}
                                        width={24}
                                        height={24}
                                        className="rounded-full cursor-pointer"
                                    />
                                    <span className="text-sm font-normal">
                                        {card.name}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
