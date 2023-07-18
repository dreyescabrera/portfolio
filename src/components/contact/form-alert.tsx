'use client';

import { LazyMotion, AnimatePresence, m } from 'framer-motion';
import type { FormAlert } from '@/hooks/use-emailing';
const loadFeatures = () => import('@/lib/framer-motion').then((res) => res.default);

type FormAlertProps = {
	formAlert: FormAlert;
};

export default function FormAlert({ formAlert }: FormAlertProps) {
	const bgColor = formAlert.status === 'success' ? 'bg-green-400' : 'bg-red-400';

	return (
		<LazyMotion features={loadFeatures}>
			<AnimatePresence>
				{formAlert.isVisible && (
					<m.span
						className={`absolute w-max py-1.5 px-4 -top-2 left-0 right-0 mx-auto rounded-sm ${bgColor} text-center`}
						initial={{ opacity: 0, y: 0 }}
						animate={{ opacity: 1, y: -20 }}
						exit={{ opacity: 0, y: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.5 }}
					>
						{formAlert.status}
					</m.span>
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
