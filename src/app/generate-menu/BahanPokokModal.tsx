import React, { useEffect, useRef } from 'react';
import { IconX } from '@tabler/icons-react';
import { MenuItem } from '@/data/makanan-jabar';

interface BahanPokokModalProps {
	isOpen: boolean;
	onClose: () => void;
	weeklyMenuData: Array<{
		hari: string;
		menu: MenuItem[];
	}>;
}

const BahanPokokModal = ({ isOpen, onClose, weeklyMenuData }: BahanPokokModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.addEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	const calculateTotalBahanPokok = () => {
		const totalBahanPokok: Record<string, number> = {};

		weeklyMenuData.forEach((dayMenu) => {
			dayMenu.menu.forEach((menuItem) => {
				menuItem.bahan_pokok.forEach((bahan) => {
					const { nama_bahan, jumlah } = bahan;
					totalBahanPokok[nama_bahan] = (totalBahanPokok[nama_bahan] || 0) + jumlah;
				});
			});
		});

		return Object.entries(totalBahanPokok)
			.map(([nama_bahan, jumlah]) => ({
				nama_bahan,
				jumlah,
			}))
			.sort((a, b) => b.jumlah - a.jumlah);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div
				ref={modalRef}
				className="relative mx-4 max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl"
			>
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
					<h2 className="text-2xl font-bold text-gray-900">Laporan Bahan Pokok Mingguan untuk 1 Anak</h2>
					<button
						onClick={onClose}
						className="rounded-lg p-2 hover:bg-gray-100"
					>
						<IconX className="h-6 w-6 text-gray-500" />
					</button>
				</div>

				{/* Content */}
				<div className="max-h-[calc(80vh-8rem)] overflow-y-auto px-6 py-4">
					<div className="relative overflow-x-auto">
						<table className="w-full text-left text-sm">
							<thead className="bg-gray-50 text-xs uppercase text-gray-700">
								<tr>
									<th
										scope="col"
										className="w-12 px-6 py-3"
									>
										No
									</th>
									<th
										scope="col"
										className="px-6 py-3"
									>
										Nama Bahan
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-right"
									>
										Jumlah (kg)
									</th>
								</tr>
							</thead>
							<tbody>
								{calculateTotalBahanPokok().map((bahan, index) => (
									<tr
										key={bahan.nama_bahan}
										className="border-b bg-white hover:bg-gray-50"
									>
										<td className="px-6 py-4">{index + 1}</td>
										<td className="px-6 py-4 capitalize">{bahan.nama_bahan.toLowerCase()}</td>
										<td className="px-6 py-4 text-right">{bahan.jumlah.toFixed(2)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Footer */}
				<div className="border-t border-gray-200 px-6 py-4">
					<div className="text-sm text-gray-500">
						<p>* Semua jumlah bahan dihitung dalam satuan kilogram (kg)</p>
						<p>* Data diurutkan berdasarkan jumlah terbanyak</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BahanPokokModal;
