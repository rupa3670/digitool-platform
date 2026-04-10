import React from 'react';
import facebook from '../../../assets/Facebook.png'
import twitter from '../../../assets/Twitter.png'
import instra from '../../../assets/Instagram.png'

const Footer = () => {
    return (
        <footer className=" bg-[#101727] text-white   p-10 ">
            <div className=' w-7xl mx-auto grid grid-col-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4'>
                <div className=' px-4 text-left '>
                    <h2 className='text-3xl font-bold mb-3 '>DigiTools</h2>
                    <p className='text-gray-500 '>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <nav className='flex flex-col gap-2 text-sm text-gray-500'>
                    <h6 className="text-[20px] text-white mb-2">Product</h6>
                    <a className="">Features</a>
                    <a className="">Pricing</a>
                    <a className="">Templates</a>
                    <a className="">Integrations</a>
                </nav>
                <nav className='flex flex-col gap-2 text-sm text-gray-500'>
                    <h6 className="text-[20px] text-white mb-2">Company</h6>
                    <a className="">About </a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press </a>
                </nav>
                <nav className='flex flex-col gap-2 text-sm text-gray-500'>
                    <h6 className="text-[20px] text-white mb-2">Resources</h6>
                    <a className="link link-hover">Documentation </a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className=' gap-3'>
                    <h6 className="text-[20px] mb-2 ">Social Links</h6>
                    <div className="flex flex-wrap gap-4">
                        <a>
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a>
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a>
                            <img src={instra} alt="instagram" />
                        </a>
                    </div>
                </nav>
            </div>

            <div className='border-t border-gray-800 pt-8 mt-10'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-500'>&copy; 2026 DigiTools. All rights reserved.</p>
                    <div className='flex gap-6 text-sm text-gray-500'>
                        <a>Privacy Policy</a>
                        <a>Terms of Service</a>
                        <a>Cookies</a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;