import React from 'react'

type UseModelHookReturnValue = {
  isOpen: boolean,
  openModal: () => void,
  closeModal: () => void,
}

export function useModal (): UseModelHookReturnValue {
  const [isOpen, setOpen] = React.useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return {
    isOpen,
    openModal,
    closeModal
  }
}
