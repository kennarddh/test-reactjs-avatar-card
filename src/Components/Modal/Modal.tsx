import React, { forwardRef, useImperativeHandle, useState } from 'react'

import ReactPortal from '@/Components/ReactPortal/ReactPortal'

import { ModalContainer, ModalContent } from './Styles'

import { IModalHandle, IModalProps } from './Types'

const Modal = forwardRef<IModalHandle, IModalProps>(
	({ wrapperId, containerProps, contentProps, children }, ref) => {
		const [IsOpen, SetIsOpen] = useState(false)

		useImperativeHandle(ref, () => ({
			Open() {
				document.body.style.overflow = 'hidden'

				SetIsOpen(true)
			},
			Close() {
				document.body.style.overflow = 'unset'

				SetIsOpen(false)
			},
		}))

		return (
			<ReactPortal wrapperId={wrapperId}>
				{IsOpen && (
					<ModalContainer {...containerProps}>
						<ModalContent {...contentProps}>
							{children}
						</ModalContent>
					</ModalContainer>
				)}
			</ReactPortal>
		)
	}
)

Modal.displayName = 'Modal'

export type { IModalHandle }

export default Modal
