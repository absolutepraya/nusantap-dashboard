import React, { useEffect } from 'react';
import { IconX } from '@tabler/icons-react';

interface BahanPokok {
	nama_bahan: string;
	jumlah: number;
}

interface MenuItem {
	id: number;
	nama: string;
	harga_total: string;
	nutrisi: string;
	image_url?: string;
	bahan_pokok: BahanPokok[];
	deskripsi: string;
	sayur: string;
	buah: string;
}

interface MenuDetailModalProps {
	isOpen: boolean;
	onClose: () => void;
	menu: MenuItem | null;
}

const MenuDetailModal = ({ isOpen, onClose, menu }: MenuDetailModalProps) => {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen || !menu) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black bg-opacity-50"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl">
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
					<h2 className="text-2xl font-bold text-gray-900">{menu.nama}</h2>
					<button
						onClick={onClose}
						className="rounded-full p-1 hover:bg-gray-100"
					>
						<IconX size={24} />
					</button>
				</div>

				{/* Content */}
				<div className="custom-scrollbar max-h-[calc(90vh-80px)] overflow-y-auto px-6 py-4">
					<div className="flex flex-col space-y-6">
						{/* Image and Price Section */}
						<div className="flex items-start justify-between">
							<div className="relative h-48 w-48 overflow-hidden rounded-lg">
								<img
									src={menu.image_url || '/api/placeholder/192/192'}
									alt={menu.nama}
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="flex flex-col items-end">
								<span className="text-sm text-gray-500">Harga Total</span>
								<span className="text-2xl font-bold text-custblue">{menu.harga_total}</span>
							</div>
						</div>

						{/* Description Section */}
						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Deskripsi</h3>
							<p className="text-gray-600">{menu.deskripsi}</p>
						</div>

						{/* Nutrition Section */}
						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Nutrisi</h3>
							<p className="text-gray-600">{menu.nutrisi}</p>
						</div>

						{/* Ingredients Section */}
						<div className="space-y-3">
							<h3 className="text-lg font-semibold">Bahan-bahan</h3>
							<div className="grid grid-cols-2 gap-4">
								{menu.bahan_pokok.map((bahan, index) => (
									<div
										key={index}
										className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
									>
										<span className="font-medium">{bahan.nama_bahan}</span>
										<span className="rounded-full bg-gray-200 px-3 py-1 text-sm">{bahan.jumlah} kg</span>
									</div>
								))}
							</div>
						</div>

						{/* Vegetables and Fruits Section */}
						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-2">
								<h3 className="text-lg font-semibold">Sayuran</h3>
								<div className="rounded-lg bg-gray-50 p-3">
									<p className="text-gray-600">{menu.sayur}</p>
								</div>
							</div>
							<div className="space-y-2">
								<h3 className="text-lg font-semibold">Buah</h3>
								<div className="rounded-lg bg-gray-50 p-3">
									<p className="text-gray-600">{menu.buah}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style
				jsx
				global
			>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 6px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: #f1f1f1;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: #888;
					border-radius: 3px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: #555;
				}
			`}</style>
		</div>
	);
};

export default MenuDetailModal;
