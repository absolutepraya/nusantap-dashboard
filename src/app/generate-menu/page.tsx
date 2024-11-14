/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { IconArrowBigLeftLine, IconArrowBigRightLine, IconChevronLeft, IconChevronRight, IconDownload, IconPackage, IconSparkles } from '@tabler/icons-react';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { makananJabar, MenuItem } from '@/data/makanan-jabar';
import { makananJabarMini, MakanJabarMini } from '@/data/makanan-jabar-mini';
import { makananNTT } from '@/data/makanan-ntt';
import { motion } from 'framer-motion';
import { hargaBahanPokok, hargaBahanPokokJabar } from '@/data/hargaBahanPokok';
import BahanPokokModal from './BahanPokokModal';
import MenuDetailModal from './MenuDetailModal';
import OpenAI from 'openai';
import { useProfileState } from '@/stores/globalState';
import { useSearchParams } from 'next/navigation';
import { makananNTTMini } from '@/data/makanan-ntt-mini';

// const client = new OpenAI({
// 	apiKey: process.env['OPENAI_API_KEY'],
// });

const initialData = [
	{
		hari: 'Senin',
		menu: [
			{
				id: 0,
			},
			{
				id: 0,
			},
			{
				id: 0,
			},
		],
	},
	{
		hari: 'Selasa',
		menu: [
			{
				id: 0,
			},
			{
				id: 0,
			},
			{
				id: 0,
			},
		],
	},
	{
		hari: 'Rabu',
		menu: [
			{
				id: 0,
			},
			{
				id: 0,
			},
			{
				id: 0,
			},
		],
	},
	{
		hari: 'Kamis',
		menu: [
			{
				id: 0,
			},
			{
				id: 0,
			},
			{
				id: 0,
			},
		],
	},
	{
		hari: 'Jumat',
		menu: [
			{
				id: 0,
			},
			{
				id: 0,
			},
			{
				id: 0,
			},
		],
	},
];

interface MakananDataItem {
	hari: string;
	menu: MenuItem[];
}

export default function CreateMenu() {
	const searchParams = useSearchParams();
	const isSetProfile1 = searchParams.get('p1') === 'true';

	const { profileIndex, setProfileIndex } = useProfileState();

	const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
	const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
	const [menuItems, setMenuItems] = useState<String[]>([]);
	const [weeklyMenu, setWeeklyMenu] = useState(initialData);
	const [weeklyMenuData, setWeeklyMenuData] = useState<MakananDataItem[]>([]);
	const [isLoading, setIsLoading] = useState<Record<string, boolean>>({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentMakananMini, setCurrentMakananMini] = useState<MakanJabarMini[]>([]);

	useEffect(() => {
		if (profileIndex === 0) {
			setCurrentMakananMini(makananJabarMini);
		} else {
			setCurrentMakananMini(makananNTTMini);
		}
	}, []);

	useEffect(() => {
		if (isSetProfile1) {
			setProfileIndex(1);
		}
		setWeeklyMenu(initialData);
	}, [isSetProfile1, setProfileIndex, profileIndex]);
	const [isLaporanModalOpened, setIsLaporanModalOpened] = useState(false);

	useEffect(() => {
		const makananJabarNama = makananJabar.map((makanan) => makanan.nama);
		const makananNTTNama = makananNTT.map((makanan) => makanan.nama);
		if (profileIndex === 0) {
			setMenuItems(makananJabarNama);
		} else {
			setMenuItems(makananNTTNama);
		}
	}, [profileIndex]);

	useEffect(() => {
		// from weeklyMenu, get the menu id and get the full menu from makananJabar
		if (profileIndex === 0) {
			const makananJabarSelected = weeklyMenu.map((menu) => {
				const menuData = menu.menu.filter((menuItem) => menuItem.id !== 0).map((menuItem) => makananJabar[menuItem.id - 1]);
				return {
					hari: menu.hari,
					menu: menuData,
				};
			});

			console.log('makanaJabarSelected', makananJabarSelected);
			setWeeklyMenuData(makananJabarSelected);
		} else {
			const makananNTTSelected = weeklyMenu.map((menu) => {
				const menuData = menu.menu.filter((menuItem) => menuItem.id !== 0).map((menuItem) => makananNTT[menuItem.id - 1]);
				return {
					hari: menu.hari,
					menu: menuData,
				};
			});

			console.log('makanaNTTSelected', makananNTTSelected);
			setWeeklyMenuData(makananNTTSelected);
		}
	}, [weeklyMenu]);

	const getMenuRecommendation = async (hari: string) => {
		setIsLoading((prevState) => ({
			...prevState,
			[hari]: true,
		}));

		const response = await fetch('/api/menu', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ makananMini: currentMakananMini, jadwalMingguan: weeklyMenu, hari: hari }),
		});

		const data = await response.json();
		setWeeklyMenu(data);
		console.log('response', data);

		setIsLoading((prevState) => ({
			...prevState,
			[hari]: false,
		}));
	};

	const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 0 });

	function calculateTotalMinMaxPrice(makananData: MakananDataItem[], hargaBahanPokokList: hargaBahanPokok[]): { totalMinPrice: number; totalMaxPrice: number } {
		let totalMinPrice = 0;
		let totalMaxPrice = 0;

		makananData.forEach((dataItem) => {
			let minPrice = Infinity;
			let maxPrice = 0;

			dataItem.menu.forEach((menuItem) => {
				let totalPrice = 0;

				// Calculate the total price for the current menu item
				menuItem.bahan_pokok.forEach((bahan) => {
					const hargaItem = hargaBahanPokokList.find((harga) => harga.nama === bahan.nama_bahan);
					if (hargaItem) {
						totalPrice += hargaItem.harga * bahan.jumlah;
					}
				});

				// Update min and max price for the current day
				minPrice = Math.min(minPrice, totalPrice);
				maxPrice = Math.max(maxPrice, totalPrice);
			});

			// Add the day's min and max prices to the total
			totalMinPrice += minPrice !== Infinity ? minPrice : 0;
			totalMaxPrice += maxPrice;
		});

		return {
			totalMinPrice,
			totalMaxPrice,
		};
	}

	useEffect(() => {
		const { totalMinPrice, totalMaxPrice } = calculateTotalMinMaxPrice(weeklyMenuData, hargaBahanPokokJabar);
		setPriceRange({
			min: totalMinPrice,
			max: totalMaxPrice,
		});
	}, [weeklyMenuData]);

	return (
		<div className="max-w-screen flex w-screen flex-row bg-white">
			<Sidebar location="generate-menu" />
			<BahanPokokModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				weeklyMenuData={weeklyMenuData}
			/>
			<MenuDetailModal
				isOpen={isMenuModalOpen}
				onClose={() => {
					setIsMenuModalOpen(false);
					setSelectedMenu(null);
				}}
				menu={selectedMenu}
			/>

			{/* Main content */}
			<div className="ml-60 flex w-full flex-col space-y-6 px-10 py-8">
				<div className="te flex w-full flex-row items-center justify-between">
					{' '}
					<p className="text-lg font-semibold text-custgray1">
						Selamat datang, Admin <span className="font-bold text-custblue">{profileIndex == 0 ? 'Jawa Barat' : 'Nusa Tenggara Timur'}</span> 👋🏻
					</p>
				</div>

				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-3xl font-bold">Generate Menu</p>
				</div>

				<div className="flex h-auto w-full flex-col">
					<div className="flex w-full items-center justify-between">
						<div className="flex flex-col pb-2">
							<p className="text-lg font-bold text-black">Estimasi Pengeluaran Minggu Ini:</p>
							<div className="flex items-end gap-3 py-1">
								<p className="text-4xl font-bold">
									{`${new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR',
										minimumFractionDigits: 0,
									}).format(priceRange.min)} - ${new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR',
										minimumFractionDigits: 0,
									}).format(priceRange.max)}`}
								</p>
								<p className="text-xl font-bold text-custblue">/anak</p>
							</div>
						</div>

						<div className="flex gap-2">
							<button
								className="group relative flex h-12 w-fit flex-row items-center overflow-hidden rounded-md border border-blue-700 bg-custblue px-3 py-1 text-white"
								onClick={() => {
									setIsModalOpen(true);
									setIsLaporanModalOpened(true);
								}}
							>
								<IconPackage size={24} />
								<p className="text ml-2 pr-1 font-semibold">Laporan Bahan Pokok</p>
								{/* Emboss Effect */}
								<div className="pointer-events-none absolute left-0 top-0 h-full w-full border-l border-t border-white opacity-30"></div>
								<div className="pointer-events-none absolute bottom-0 right-0 h-full w-full border-b border-r border-black opacity-30"></div>
							</button>
							<button
								className="group relative flex h-12 w-fit flex-row items-center overflow-hidden rounded-md border border-blue-700 bg-custblue px-3 py-1 text-white"
								onClick={() => getMenuRecommendation('semua hari dalam satu minggu')}
								disabled={isLoading['semua hari dalam satu minggu']}
							>
								{isLoading['semua hari dalam satu minggu'] ? (
									<motion.div
										className="flex items-center justify-center"
										initial={{ scale: 0 }}
										animate={{ scale: 1 }}
										transition={{ duration: 0.5 }}
										key={'semua hari dalam satu minggu'} // Add a unique key for the loading animation
									>
										<IconSparkles
											size={20}
											className="animate-spin"
										/>
									</motion.div>
								) : (
									<>
										<IconSparkles
											size={20}
											className=""
										/>
									</>
								)}
								<p className="text ml-2 pr-1 font-semibold">Generate Semua Menu</p>
								{/* Emboss Effect */}
								<div className="pointer-events-none absolute left-0 top-0 h-full w-full border-l border-t border-white opacity-30"></div>
								<div className="pointer-events-none absolute bottom-0 right-0 h-full w-full border-b border-r border-black opacity-30"></div>
							</button>
						</div>
					</div>

					<div className="flex w-full flex-row items-center space-x-2 text-sm text-gray-400">
						<div className="mt-1 h-[1px] w-auto flex-grow bg-gray-400" />
					</div>
				</div>

				<div className="relative flex w-full justify-center rounded-xl py-8">
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
						{weeklyMenuData.map((data, index) => (
							<SwiperSlide key={index}>
								<motion.div
									className="flex cursor-pointer flex-col space-y-4 rounded-lg bg-second px-4 py-4"
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									{/* Existing content */}
									<div className="flex flex-row items-end justify-between">
										<p className="text-lg font-semibold">{data.hari}</p>
										<p className="mb-1 text-xs text-gray-900">{} November 2024</p>
									</div>
									<div className="flex flex-col space-y-2">
										{data?.menu.map((menu, index) => (
											<div
												key={index}
												className="flex flex-col items-center space-y-1"
											>
												<div
													className="flex h-36 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md hover:opacity-90"
													onClick={() => {
														setSelectedMenu(menu);
														setIsMenuModalOpen(true);
													}}
												>
													<div className="relative h-full w-full">
														<img
															src={menu?.image_url || undefined}
															alt="menu"
															className="relative h-full w-full object-cover"
														></img>
														<div className="absolute bottom-0 right-0 rounded bg-custblue px-2 py-1">
															<p className="text-sm font-semibold text-white">Rp {menu?.harga_total}</p>
														</div>
													</div>
												</div>
												<div className="flex w-full justify-between">
													<p className="text-sm font-semibold">{menu?.nama}</p>
												</div>
											</div>
										))}

										{data?.menu.length === 0 && <p className="text-center text-sm font-semibold text-gray-400">Belum ada menu!</p>}
									</div>
									<div className="flex justify-end pt-4">
										<button
											className="group relative flex w-fit flex-row items-center overflow-hidden rounded-md border border-blue-700 bg-custblue px-2 py-1 text-white"
											onClick={() => getMenuRecommendation(data.hari)}
											disabled={isLoading[data.hari]}
										>
											{isLoading[data.hari] ? (
												<motion.div
													className="flex items-center justify-center"
													initial={{ scale: 0 }}
													animate={{ scale: 1 }}
													transition={{ duration: 0.5 }}
													key={data.hari} // Add a unique key for the loading animation
												>
													<IconSparkles
														size={20}
														className="animate-spin"
													/>
												</motion.div>
											) : (
												<>
													<IconSparkles
														size={20}
														className=""
													/>
													<p className="ml-1 pr-1 text-sm font-semibold">Re-generate</p>
												</>
											)}
											{/* Emboss Effect */}
											<div className="pointer-events-none absolute left-0 top-0 h-full w-full border-l border-t border-white opacity-30"></div>
											<div className="pointer-events-none absolute bottom-0 right-0 h-full w-full border-b border-r border-black opacity-30"></div>
										</button>
									</div>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={`swiper-prev bg-red absolute bottom-1/2 left-4 z-50 h-12 w-12 translate-y-1/2 items-center justify-center rounded-lg bg-custblue text-white ${isModalOpen ? 'hidden' : 'flex'}`}>
						<IconChevronLeft
							size={24}
							strokeWidth={3}
						/>
					</div>
					<div className={`swiper-next bg-red absolute bottom-1/2 right-4 z-50 h-12 w-12 translate-y-1/2 items-center justify-center rounded-lg bg-custblue text-white ${isModalOpen ? 'hidden' : 'flex'}`}>
						<IconChevronRight
							size={24}
							strokeWidth={3}
						/>
					</div>
				</div>

				<div className="flex w-full flex-row items-center space-x-2 text-sm text-gray-400">
					<p>Menu Generasi AI</p>
					<div className="mt-1 h-[1px] w-auto flex-grow bg-gray-400" />
				</div>

				<div className="grid w-full grid-cols-2 gap-4">
					{menuItems.map((menu, index) => (
						<div
							key={index}
							className="flex h-12 items-center justify-center rounded-md bg-second shadow transition-transform hover:scale-105 hover:bg-third"
						>
							<p className="text-sm font-semibold">{menu}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
