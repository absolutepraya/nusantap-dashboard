import Image from 'next/image';
import { IconDownload } from '@tabler/icons-react';
import Sidebar from '@/components/Sidebar';

export default function CreateMenu() {
	return (
		<div className="flex h-screen w-screen flex-row bg-white">
			<Sidebar location="generate-menu" />

			{/* Main content */}
			<div className="ml-60 flex h-full w-full flex-col space-y-6 px-10 py-8">
				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-lg font-semibold text-custgray1">
						Selamat datang, Admin <span className="font-bold text-custblue">Jawa Barat</span> 👋🏻
					</p>
				</div>

				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-3xl font-bold">Generate Menu</p>
				</div>

				<div className="flex w-full flex-row items-center space-x-2 text-xs text-gray-400">
					<p>Pilihan Menu dalam Satu Minggu</p>
					<div className="mt-1 h-[1px] w-auto flex-grow bg-gray-400" />
				</div>

				<div className='flex flex-col space-y-6 bg-second items-center w-24 rounded-md shadow'>
					<p>Senin</p>
				</div>
			</div>
		</div>
	);
}
