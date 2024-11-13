'use client';
import React, { useEffect, useState } from 'react';
import { ref, set } from 'firebase/database';
import { rtdb } from '../../utils/firebase/firebase';
import { useParams } from 'next/navigation';

export default function PrevalenceMap(): JSX.Element {
	const id = useParams().id;

	useEffect(() => {
		console.log('ID: ', id);

		handleConfirm(id);
	}, []);

	const handleConfirm = async (id: string) => {
		const currentId = id.split('-')[1];

		try {
			console.log('ID: ', currentId);
			await set(ref(rtdb, `users/${currentId}`), {
				scanned: true,
				timestamp: new Date().toISOString(),
			});

			alert('Id ' + id + 'Berhasil Di Scan');
			window.location.href = '/qr';
		} catch (error) {
			console.error('Error saving to database:', error);
		}
	};

	return <div></div>;
}
