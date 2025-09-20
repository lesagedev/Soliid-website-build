"use client"

import { Button } from "@/components/ui/button"
import { useTally } from "@/hooks/useTally"
import { usePathname } from "next/navigation"
import { type VariantProps } from "class-variance-authority"
import { ButtonProps } from "@/components/ui/button"
import { toast } from 'react-toastify'

interface QuoteButtonProps extends Omit<ButtonProps, 'onClick'>,
  VariantProps<typeof Button> {
  children?: React.ReactNode
  source?: string
  hiddenFields?: Record<string, any>
  onSuccess?: (payload: any) => void
  onError?: (error: any) => void
}

export default function QuoteButton({
  className,
  children = "Demander un devis",
  source,
  variant = "default",
  size = "default",
  disabled,
  hiddenFields,
  onSuccess,
  onError,
  ...props
  }: QuoteButtonProps) {
  const { openPopup, closePopup } = useTally('waWV4W')
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (disabled) return

    openPopup({
      layout: 'modal',
      width: 600,
      hideTitle: false,
      overlay: true,
      hiddenFields: {
        source: source || 'quote-button',
        page: pathname,
        ref: 'quote_request',
        ...hiddenFields
      },
      onSubmit: (payload: any) => {
        closePopup()

        toast.success("🎉 Votre demande de devis a été reçue avec succès !", {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "toast-quote-success"
        })

        if (onSuccess) {
          onSuccess(payload)
        }
      },
      onClose: () => {
        // Modal fermée sans soumission
      },
    })
  }

  return (
    <Button
      onClick={handleClick}
      className={`${className} cursor-pointer`}
      variant={variant}
      size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  )
}
