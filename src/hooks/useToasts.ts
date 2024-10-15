import { toast } from "react-toastify"

export function useToasts() {
    const successToast = (message: string) => {
        toast(
            message,
            {
                type: 'success',
                position: 'bottom-right'
            }
        )
    }

    const errorToast = (message: string) => {
        toast(
            message,
            {
                type: 'error',
                position: 'bottom-right'
            }
        )
    }

    const warningToast = (message: string) => {
        toast(
            message,
            {
                type: 'warning',
                position: 'bottom-right'
            }
        )
    }

    return {
        successToast,
        errorToast,
        warningToast
    }
}