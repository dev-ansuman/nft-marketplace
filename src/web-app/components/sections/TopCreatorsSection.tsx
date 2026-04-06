import Image from 'next/image';

const cards = {
    card1: {
        icon: '/avatars/Avatar-1.svg',
        name: 'Keepitreal',
        totalSales: '34.53 ETH'
    },
    card2: {
        icon: '/avatars/Avatar-2.svg',
        name: 'Digilab', totalSales: '34.53 ETH'
    },
    card3: {
        icon: '/avatars/Avatar-3.svg',
        name: 'GravityOne',
        totalSales: '34.53 ETH'

    },
    card4: {
        icon: '/avatars/Avatar-4.svg',
        name: 'Juanie',
        totalSales: '34.53 ETH'

    },
    card5: {
        icon: '/avatars/Avatar-5.svg',
        name: 'BlueWhale',
        totalSales: '34.53 ETH'

    },
    card6: {
        icon: '/avatars/Avatar-6.svg',
        name: 'Mr Fox',
        totalSales: '34.53 ETH'

    },
    card7: {
        icon: '/avatars/Avatar-7.svg',
        name: 'Shroomie',
        totalSales: '34.53 ETH'

    },
    card8: {
        icon: '/avatars/Avatar-8.svg',
        name: 'Robotica',
        totalSales: '34.53 ETH'

    },
    card9: {
        icon: '/avatars/Avatar-9.svg',
        name: 'Rustyrobot',
        totalSales: '34.53 ETH'

    },
    card10: {
        icon: '/avatars/Avatar-10.svg',
        name: 'Animakid',
        totalSales: '34.53 ETH'

    },
    card11: {
        icon: '/avatars/Avatar-11.svg',
        name: 'Dotgu',
        totalSales: '34.53 ETH'

    },
    card12: {
        icon: '/avatars/Avatar-12.svg',
        name: 'Ghiblier',
        totalSales: '34.53 ETH'

    },
}

export default function TopCreatorsSection() {
    const cardData = Object.values(cards);

    return (
        <section className="bg-[#2B2B2B] px-10 py-20 text-white">
            <div className="mb-10 flex flex-col items-end justify-between md:flex-row md:items-center">
                <div>
                    <h2 className="mb-2 text-[32px] font-bold">Top Creators</h2>
                    <p className="text-lg">Checkout Top Rated Creators On The NFT Marketplace</p>
                </div>
                <button className="mt-5 rounded-2xl border-2 border-[#A259FF] px-8 py-4 font-semibold transition-transform hover:scale-95 md:mt-0">
                    View Rankings
                </button>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {cardData.map((creator, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center rounded-[20px] bg-[#3B3B3B] p-5 transition-transform duration-300 hover:scale-[0.97] cursor-pointer"
                    >
                        <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#2B2B2B] text-sm text-[#858584]">
                            {index + 1}
                        </div>
                        <div className="relative mb-5 h-[120px] w-[120px]">
                            <Image
                                src={creator.icon}
                                alt={creator.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="mb-1 text-[22px] font-bold">{creator.name}</h3>
                            <p className="text-[#858584] font-space">
                                Total Sales: <span className="font-space text-white">{creator.totalSales}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
