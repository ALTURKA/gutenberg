/**
 * External dependencies
 */
// eslint-disable-next-line no-restricted-imports
import type { MouseEvent } from 'react';

export interface OwnProps {
	isOpen?: boolean;
	selfClose?: boolean;
	message: string;
	onConfirm: ( event: MouseEvent< HTMLButtonElement > ) => void;
	onCancel?: ( event: MouseEvent< HTMLButtonElement > ) => void;
}
