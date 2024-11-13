/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { IconArrowBigLeftLine, IconArrowBigRightLine, IconChevronLeft, IconChevronRight, IconDownload, IconSparkles } from '@tabler/icons-react';
import Sidebar from '@/components/Sidebar';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import OpenAI from 'openai';

const dummyData = [
	{
		day: 'Senin',
		menu: ['Sate Ayam', 'Nasi Goreng', 'Soto Ayam'],
		gambar: ['https://asset.kompas.com/crops/BJdOTeUCdwHWS6ImI9qDnf3s8nI=/0x0:1000x667/1200x800/data/photo/2023/12/19/6580e31d4d33e.jpeg', 'https://cdn1-production-images-kly.akamaized.net/LDRjBxjUH3gyrzEAUFrCi_XisTs=/0x148:1920x1230/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg', 'https://asset.kompas.com/crops/yc5vBBn_kny5uxIg5QNuj7Qzx6c=/0x0:1000x667/1200x800/data/photo/2024/03/21/65fbab7732136.jpeg'],
	},
	{
		day: 'Selasa',
		menu: ['Spaghetti Carbonara', 'Nasi Ayam Kecap', 'Nasi Padang'],
		gambar: ['https://asset.kompas.com/crops/eWh25QLGaUd83ZfRO6yvdxwygKg=/0x22:968x667/1200x800/data/photo/2023/06/02/64793cbdad978.jpg', 'https://images.tokopedia.net/img/cache/700/product-1/2020/4/17/8324173/8324173_8ae26a27-9541-4496-ae0f-0d2af89933ef_960_960.jpg', 'https://cdn.rri.co.id/berita/1/images/1689391542821-images_(22)/1689391542821-images_(22).jpeg'],
	},
	{
		day: 'Rabu',
		menu: ['Nasi Ayam Rica', 'Nasi Kuning', 'Soto Ayam'],
		gambar: ['https://img-global.cpcdn.com/recipes/7ac6d2476e4a83a0/400x400cq70/photo.jpg', 'https://www.sasa.co.id/medias/page_medias/nasi_kuning_rice_cooker.jpg', 'https://www.dapurkobe.co.id/wp-content/uploads/nasi-uduk-kobe.jpg'],
	},
	{
		day: 'Kamis',
		menu: ['Sate Ayam', 'Nasi Goreng', 'Soto Ayam'],
		gambar: ['https://asset.kompas.com/crops/BJdOTeUCdwHWS6ImI9qDnf3s8nI=/0x0:1000x667/1200x800/data/photo/2023/12/19/6580e31d4d33e.jpeg', 'https://cdn1-production-images-kly.akamaized.net/LDRjBxjUH3gyrzEAUFrCi_XisTs=/0x148:1920x1230/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg', 'https://asset.kompas.com/crops/yc5vBBn_kny5uxIg5QNuj7Qzx6c=/0x0:1000x667/1200x800/data/photo/2024/03/21/65fbab7732136.jpeg'],
	},
	{
		day: 'Jumat',
		menu: ['Sate Ayam', 'Nasi Goreng', 'Soto Ayam'],
		gambar: ['https://asset.kompas.com/crops/BJdOTeUCdwHWS6ImI9qDnf3s8nI=/0x0:1000x667/1200x800/data/photo/2023/12/19/6580e31d4d33e.jpeg', 'https://cdn1-production-images-kly.akamaized.net/LDRjBxjUH3gyrzEAUFrCi_XisTs=/0x148:1920x1230/800x450/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3093328/original/069244600_1585909700-fried-2509089_1920.jpg', 'https://asset.kompas.com/crops/yc5vBBn_kny5uxIg5QNuj7Qzx6c=/0x0:1000x667/1200x800/data/photo/2024/03/21/65fbab7732136.jpeg'],
	},
];

const dummyMenus = ['Nasi Goreng', 'Satay Ayam', 'Rendang', 'Gado-Gado', 'Soto Ayam', 'Bakso', 'Mie Goreng', 'Nasi Uduk', 'Pecel', 'Ayam Goreng', 'Sambal', 'Babi Guling', 'Sate Padang', 'Lontong Sayur', 'Pempek', 'Nasi Kuning', 'Tahu Goreng', 'Bubur Ayam', 'Martabak Manis', 'Es Cendol', 'Kue Lapis', 'Serabi', 'Gudeg Yogyakarta', 'Ayam Balado', 'Ikan Bakar', 'Soto Betawi', 'Nasi Campur', 'Nasi Liwet', 'Ayam Bakar Taliwang', 'Tumpeng', 'Kerak Telor', 'Sayur Asem', 'Bakmi Jawa', 'Soto Mie', 'Karedok', 'Kue Putu', 'Kue Cubit', 'Bika Ambon', 'Ayam Taliwang', 'Soto Banjar', 'Kue Serabi', 'Babi Kecap', 'Nasi Bebek', 'Sate Lilit', 'Ayam Betutu', 'Nasi Goreng Kampung', 'Nasi Padang', 'Tempeh Goreng', 'Sate Kambing', 'Lumpia Semarang', 'Sop Buntut', 'Bakso Malang'];

const client = new OpenAI({
	apiKey: process.env['OPENAI_API_KEY'],
});

export default function CreateMenu() {
	// async function handleOpenAIRequest() {
	// 	const response = await client.completions.create({
	// 		messages: [{ role: 'user', content: 'Say this is a test' }],
	// 		model: 'gpt-3.5-turbo',
	// 	});

	// 	console.log(response.data.choices[0].text);
	// }

	return (
		<div className="max-w-screen flex w-screen flex-row bg-white">
			<Sidebar location="generate-menu" />

			{/* Main content */}
			<div className="ml-60 flex w-full flex-col space-y-6 px-10 py-8">
				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-lg font-semibold text-custgray1">
						Selamat datang, Admin <span className="font-bold text-custblue">Jawa Barat</span> 👋🏻
					</p>
				</div>

				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-3xl font-bold">Generate Menu</p>
					{/* Tombol generate semua menu */}
					<button className="group relative flex w-fit flex-row items-center overflow-hidden rounded-md border border-blue-700 bg-custblue px-3 py-2 text-white">
						<IconSparkles
							size={24}
							className=""
						/>
						<p className="ml-2 pr-1 text font-semibold">Generate Semua Menu</p>
						{/* Emboss Effect */}
						<div className="pointer-events-none absolute left-0 top-0 h-full w-full border-l border-t border-white opacity-30"></div>
						<div className="pointer-events-none absolute bottom-0 right-0 h-full w-full border-b border-r border-black opacity-30"></div>
					</button>
				</div>

				<div className="flex w-full flex-row items-center space-x-2 text-sm text-gray-400">
					<p>Pilihan Menu dalam Satu Minggu</p>
					<div className="mt-1 h-[1px] w-auto flex-grow bg-gray-400" />
				</div>

				<div className="relative flex w-full justify-center rounded-xl bg-third py-8 shadow-lg">
					<Swiper
						modules={[Navigation]}
						slidesPerView={3}
						className="relative w-[57rem]"
						spaceBetween={20}
						// centeredSlides={true}
						// centeredSlidesBounds={true}
						navigation={{
							nextEl: '.swiper-next',
							prevEl: '.swiper-prev',
						}}
					>
						{dummyData.map((data, index) => (
							<SwiperSlide key={index}>
								<div className="flex flex-col space-y-4 rounded-lg bg-second px-4 py-4">
									<div className="flex flex-row items-end justify-between">
										<p className="text-2xl font-bold">{data.day}</p>
										<p className="mb-1 text-xs text-gray-900">18 November 2024</p>
									</div>
									<div className="flex flex-col space-y-2">
										{data.menu.map((menu, index) => (
											<div
												key={index}
												className="flex flex-col items-center space-y-1"
											>
												<div className="flex h-36 w-full items-center justify-center overflow-hidden rounded-md">
													<img
														src={data.gambar[index]}
														alt="menu"
														className="h-full w-full object-cover"
													/>
												</div>
												<p className="text-sm font-semibold">{menu}</p>
											</div>
										))}
									</div>
									<div className="flex justify-end pt-4">
										<button className="group relative flex w-fit flex-row items-center overflow-hidden rounded-md border border-blue-700 bg-custblue px-2 py-1 text-white">
											<IconSparkles
												size={20}
												className=""
											/>
											<p className="ml-1 pr-1 text-sm font-semibold">Re-generate</p>
											{/* Emboss Effect */}
											<div className="pointer-events-none absolute left-0 top-0 h-full w-full border-l border-t border-white opacity-30"></div>
											<div className="pointer-events-none absolute bottom-0 right-0 h-full w-full border-b border-r border-black opacity-30"></div>
										</button>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="swiper-prev bg-red absolute bottom-1/2 left-9 z-50 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-lg bg-custblue text-white">
						<IconChevronLeft
							size={24}
							strokeWidth={3}
						/>
					</div>
					<div className="swiper-next bg-red absolute bottom-1/2 right-9 z-50 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-lg bg-custblue text-white">
						<IconChevronRight
							size={24}
							strokeWidth={3}
						/>
					</div>
				</div>

				<div className="flex w-full flex-row items-center space-x-2 text-sm text-gray-400">
					<p>50 Menu Generasi AI</p>
					<div className="mt-1 h-[1px] w-auto flex-grow bg-gray-400" />
				</div>

				<div className="grid w-full grid-cols-3 gap-4">
					{dummyMenus.map((menu, index) => (
						<div
							key={index}
							className="flex items-center justify-center bg-second rounded-md shadow h-12 hover:bg-third hover:scale-105 transition-transform"
						>
							<p className="text-sm font-semibold">{menu}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
