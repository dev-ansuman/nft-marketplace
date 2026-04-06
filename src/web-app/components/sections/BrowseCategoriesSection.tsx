import Image from 'next/image'

const cards = {
    card1: {
        image: '/image/category_images/ImagePlaceholder-7.png',
        icon: '/icons/category_icons/PaintBrush.svg',
        title: 'Art'
    },
    card2: {
        image: '/image/category_images/ImagePlaceholder-4.png',
        icon: '/icons/category_icons/Swatches.svg',
        title: 'Collectibles'
    },
    card3: {
        image: '/image/category_images/ImagePlaceholder.png',
        icon: '/icons/category_icons/MusicNotes.svg',
        title: 'Music'
    },
    card4: {
        image: '/image/category_images/ImagePlaceholder-1.png',
        icon: '/icons/category_icons/Camera.svg',
        title: 'Photography'
    },
    card5: {
        image: '/image/category_images/ImagePlaceholder-2.png',
        icon: '/icons/category_icons/VideoCamera.svg',
        title: 'Video'
    },
    card6: {
        image: '/image/category_images/ImagePlaceholder-3.png',
        icon: '/icons/category_icons/MagicWand.svg',
        title: 'Utility'
    },
    card7: {
        image: '/image/category_images/ImagePlaceholder-5.png',
        icon: '/icons/category_icons/Basketball.svg',
        title: 'Sport'
    },
    card8: {
        image: '/image/category_images/ImagePlaceholder-6.png',
        icon: '/icons/category_icons/Planet.svg',
        title: 'Virtual Worlds'
    }
}

export default function BrowseCategoriesSection() {
    const cardData = Object.values(cards);

    return (
        <section className="bg-[#2B2B2B] px-10 py-20 text-white">
            <h2 className="mb-10 text-[32px] font-bold">Browse Categories</h2>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-8">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="cursor-pointer overflow-hidden rounded-[20px] bg-[#3B3B3B] transition-transform duration-300 hover:scale-[0.97]"
                    >
                        <div className="relative h-[240px] w-full">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-md">
                                <div className="relative h-24 w-24">
                                    <Image
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        fill
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="px-5 py-5 text-xl font-semibold lg:px-8 lg:text-[22px]">
                            {card.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
