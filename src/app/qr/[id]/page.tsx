'use client';
import React, { useEffect } from 'react';
import { ref, set } from 'firebase/database';
import { rtdb } from '../../utils/firebase/firebase';
import { useParams } from 'next/navigation';

export default function PrevalenceMap(): JSX.Element {
	const { id } = useParams();

	useEffect(() => {
		if (typeof id === 'string') {
			console.log('ID: ', id);
			handleConfirm(id);
		} else {
			console.error('ID is undefined or not a string:', id);
		}
	}, [id]);

	const handleConfirm = async (id: string) => {
		const currentId = id.split('-')[1];

		try {
			console.log('Current ID: ', currentId);
			await set(ref(rtdb, `users/${currentId}`), {
				scanned: true,
				timestamp: new Date().toISOString(),
			});

			alert('Id ' + id + ' Berhasil dipindai!');
			window.location.href = '/qr';
		} catch (error) {
			console.error('Error saving to database:', error);
		}
	};

	return <div></div>;
}
