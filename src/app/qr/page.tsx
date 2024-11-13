'use client';
import { Scanner } from '@yudiel/react-qr-scanner';
import { Html5QrcodeScanner } from 'html5-qrcode';
import React, { useEffect, useState } from 'react';
import { ref, set } from 'firebase/database';
import { rtdb } from '../utils/firebase/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, QrCode, X } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Card, CardContent } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { IconScan } from '@tabler/icons-react';

export default function PrevalenceMap(): JSX.Element {
	const id = useParams().id;
	const [scanResult, setScanResult] = useState<string | null>(null);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [currentId, setCurrentId] = useState<string>('');
	const [isProcessingScan, setIsProcessingScan] = useState(false); // New state
	const searchParams = useSearchParams();
	const isSetProfile1 = searchParams.get('p1') === 'true';

	useEffect(() => {
		console.log('ID: ', id);

		const scanner = new Html5QrcodeScanner(
			'reader',
			{
				fps: 10,
				qrbox: 250,
			},
			false
		);

		scanner.render(handleScan, (error: string) => {
			// Handle the error here
			// console.error('Error scanning QR code:', error);
		});

		// Cleanup on unmount
		return () => {
			scanner.clear();
		};
	}, []);

	const handleScan = (result: string) => {
		if (isProcessingScan) return; // Prevent multiple scans
		setIsProcessingScan(true); // Start processing

		const resultParsed = result.split('-');

		if (resultParsed[0] === 'nstp') {
			if (scanResult === resultParsed[1]) {
				setIsProcessingScan(false); // Reset if same ID
				return;
			}
			setCurrentId(resultParsed[1]);
			setShowConfirmation(true);
		} else {
			setIsProcessingScan(false); // Reset if QR code format is incorrect
		}
	};

	const handleConfirm = async () => {
		try {
			// Disable scanning for 10 seconds

			await set(ref(rtdb, `users/${currentId}`), {
				scanned: true,
				timestamp: new Date().toISOString(),
			});

			setShowConfirmation(false);
			setScanResult(currentId);
			setShowSuccess(true);

			// Hide success message after 3 seconds and reset processing flag
			setTimeout(() => {
				setShowSuccess(false);
				setScanResult(null);
				setIsProcessingScan(false); // Allow new scans
			}, 3000);
		} catch (error) {
			console.error('Error saving to database:', error);
			setIsProcessingScan(false); // Reset on error
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 p-4">
			<Card className="mx-auto mt-8 max-w-md">
				<CardContent className="p-6">
					<div className="mb-6 flex items-center justify-between">
						<h1 className="text-2xl font-bold text-gray-900">NuSantap QR Scanner</h1>
						<QrCode
							className="text-blue-600"
							size={24}
						/>
					</div>

					<div className="relative bg-gray-100">
						{/* <IconScan
							className="absolute right-1/2 top-16 z-[100] translate-x-1/2 bg-[#f3f4f6]"
							size={36}
						/>

						<div className="absolute left-[1px] top-[1px] z-[50] h-28 w-20 bg-[#f3f4f6]"></div> */}

						<div
							id="reader"
							className="relative aspect-video w-full"
						></div>

						<AnimatePresence>
							{showSuccess && (
								<motion.div
									initial={{ opacity: 0, scale: 0.3 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.3 }}
									className="bg-green-500/90 absolute inset-0 flex items-center justify-center"
								>
									<div className="text-center text-white">
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.2 }}
										>
											<Check className="mx-auto mb-2 h-16 w-16" />
										</motion.div>
										<p className="text-lg font-medium">Successfully Scanned!</p>
										<p className="text-sm opacity-90">ID: {scanResult}</p>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					{scanResult && (
						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							className="mt-4 text-center text-gray-600"
						>
							Last Scanned ID: {scanResult}
						</motion.p>
					)}
				</CardContent>
			</Card>

			<AlertDialog
				open={showConfirmation}
				onOpenChange={(open) => {
					if (!open) setIsProcessingScan(false); // Reset if dialog is closed without confirming
					setShowConfirmation(open);
				}}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Confirm Scan</AlertDialogTitle>
						<AlertDialogDescription>Are you sure you want to record this scan for ID: {currentId}?</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
