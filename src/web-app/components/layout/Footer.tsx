import Image from 'next/image'
import { Button } from '../ui/button'

export default function Footer() {
    return (
        <footer className="bg-[#3B3B3B] px-10 lg:px-[195px] py-10 text-[#CCCCCC] font-work-sans">
            <div className='flex flex-col lg:flex-row justify-between gap-10 mb-12'>

                <div className='flex flex-col gap-6 max-w-[330px]'>
                    <div className='flex gap-3 items-center text-white text-xl font-semibold'>
                        <Image src='/logo.svg' alt='logo' width={32} height={32} />
                        NFT Marketplace
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <div className='flex flex-col gap-3'>
                            <p>Join our community</p>
                            <div className='flex gap-3'>
                                <Image src="/icons/button_icons/DiscordLogo.svg" alt="discord" height="32" width="32" />
                                <Image src="/icons/button_icons/YoutubeLogo.svg" alt="youtube" height="32" width="32" />
                                <Image src="/icons/button_icons/TwitterLogo.svg" alt="twitter" height="32" width="32" />
                                <Image src="/icons/button_icons/InstagramLogo.svg" alt="instagram" height="32" width="32" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    <h5 className='text-white text-xl font-bold'>Explore</h5>
                    <div className='flex flex-col gap-4'>
                        <a href="#" className="cursor-pointer">Marketplace</a>
                        <a href="#" className="cursor-pointer">Rankings</a>
                        <a href="#" className="cursor-pointer">Connect a wallet</a>
                    </div>
                </div>

                <div className='flex flex-col gap-6 max-w-[420px]'>
                    <h5 className='text-white text-xl font-bold'>Join Our Weekly Digest</h5>
                    <div className='flex flex-col gap-4'>
                        <p>Get exclusive promotions & updates straight to your inbox.</p>
                        <div className='relative flex flex-col sm:flex-row items-center'>
                            <input
                                type="email"
                                placeholder="Enter your email here"
                                className='w-full bg-white rounded-2xl px-5 h-[60px] text-black outline-none placeholder:text-[#2B2B2B]/60'
                            />
                            <Button className='w-full sm:w-auto sm:absolute right-0 bg-[#A259FF] rounded-2xl px-12 h-[60px] text-white font-semibold transition-all mt-4 sm:mt-0 hover:scale-[0.97] cursor-pointer'>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#858584] pt-5 text-sm">
                <p>Ⓒ NFT Market. Use this template freely.</p>
            </div>
        </footer>
    )
}
