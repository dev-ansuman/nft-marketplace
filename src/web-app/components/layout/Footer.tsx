import Image from 'next/image'
import { Button } from '../ui/button'

export default function Footer() {
    return (
        <footer className="bg-[#3B3B3B] pl-[195px] pr-[195px] pt-[40px] pb-[40px] text-[#CCCCCC]">
            <div className='flex'>
                <div className='pr-[84px]'>
                    <div className='flex gap-3 font-space items-center w-[238px] text-white'>
                        <Image src='/logo.svg' alt='logo' width={32} height={32} />
                        NFT Marketplace
                    </div>
                    <div className='w-[238px]'>
                        <div>NFT marketplace UI created with Anima for Figma.</div>
                        <div>
                            <div>Join out community</div>
                            <div className='flex'>
                                <Image src="/icons/button_icons/DiscordLogo.svg" alt="discord" height="33" width="32" />
                                <Image src="/icons/button_icons/YoutubeLogo.svg" alt="youtube" height="33" width="32" />
                                <Image src="/icons/button_icons/TwitterLogo.svg" alt="twitter" height="33" width="32" />
                                <Image src="/icons/button_icons/InstagramLogo.svg" alt="instagram" height="33" width="32" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='font-space text-white'>Explore</div>
                    <div>
                        <div>Marketplace</div>
                        <div>Rankings</div>
                        <div>Connect a wallet</div>
                    </div>
                </div>
                <div>
                    <div className='font-space w-[420px] text-white'>Join Our Weekly Digest</div>
                    <div className='w-[330px]'>
                        <div>Get exclusive promotions & updates straight to your inbox.</div>
                        <div>
                            <input type="text" className='bg-white' />
                            <Button className='bg-[#A259FF]'>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t">
                Ⓒ NFT Market. Use this template freely.
            </div>
        </footer>
    )
}