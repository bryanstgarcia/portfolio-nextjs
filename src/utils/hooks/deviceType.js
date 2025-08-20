import { useState, useEffect } from 'react';

export const useDeviceType = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			const mobileBreakpoint = 1024; // Puedes ajustar este valor según tus necesidades
			setIsMobile(window.innerWidth < mobileBreakpoint);
		};

		// Ejecutamos la función al montar el componente
		handleResize();

		// Escuchamos los cambios en el tamaño de la ventana
		window.addEventListener('resize', handleResize);

		// Limpiamos el event listener al desmontar el componente
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};

useDeviceType;
