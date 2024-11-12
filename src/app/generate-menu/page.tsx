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
					<button className="flex flex-row items-center rounded-md bg-custblue px-3 py-[6px] pr-3 text-sm font-semibold text-white hover:bg-[#3156a3] active:bg-[#1f3e7d]">
						<IconDownload
							size={16}
							stroke={2.5}
							className="mr-2"
						/>
						<p>Download PDF</p>
					</button>
				</div>

				<div className="flex w-full flex-row items-center justify-between">
					<p className="text-3xl font-bold">Generate Menu</p>
					<p className="text-sm text-custgray1">Last updated: 12/11/2024 - 13.30 WIB</p>
				</div>
			</div>
		</div>
	);
}
