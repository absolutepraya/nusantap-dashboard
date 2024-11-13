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

export default function PrevalenceMap(): JSX.Element {
	const id = useParams().id;
	const [scanResult, setScanResult] = useState<string | null>(null);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [currentId, setCurrentId] = useState<string>('');
	const [popUpShown, setPopUpShown] = useState(false);
	const [canScan, setCanScan] = useState(true);
	const [scannedId, setScannedId] = useState<string | null>(null);

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
	}, []);

	const handleScan = (result: string) => {
		const resultParsed = result.split('-');

		if (canScan && resultParsed[0] === 'nstp') {
			if (scanResult === resultParsed[1]) return;
			if (scannedId !== resultParsed[1]) {
				setShowConfirmation(true);
				setCurrentId(resultParsed[1]);
			}
		}
	};

	const handleConfirm = async () => {
		try {
			// Disable scanning for 10 seconds
			setCanScan(false);
			setPopUpShown(true);

			await set(ref(rtdb, `users/${currentId}`), {
				scanned: true,
				timestamp: new Date().toISOString(),
			});

			setShowConfirmation(false);
			setScanResult(currentId);
			setShowSuccess(true);
			setScannedId(currentId);

			// Re-enable scanning after 10 seconds
			setTimeout(() => {
				setCanScan(true);
				setShowSuccess(false);
				setScanResult(null);
				setPopUpShown(false);
			}, 10000);
		} catch (error) {
			console.error('Error saving to database:', error);
			// Reset scanning cooldown if there's an error
			setCanScan(true);
			setPopUpShown(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 p-4">
			<Card className="mx-auto mt-8 max-w-md">
				<CardContent className="p-6">
					<div className="mb-6 flex items-center justify-between">
						<h1 className="text-2xl font-bold text-gray-900">QR Scanner</h1>
						<QrCode
							className="text-blue-600"
							size={24}
						/>
					</div>

					<div className="relative overflow-hidden rounded-lg bg-gray-100">
						<div
							id="reader"
							className="aspect-video w-full"
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

						<AnimatePresence>
							{popUpShown && !showSuccess && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="absolute inset-0 flex items-center justify-center bg-blue-500/80"
								>
									<div className="text-center text-white">
										<p className="text-lg font-medium">Please wait...</p>
										<p className="text-sm opacity-90">Scanner will be ready in 10 seconds</p>
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
				onOpenChange={setShowConfirmation}
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
