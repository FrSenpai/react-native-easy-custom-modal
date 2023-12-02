import type React from "react"
import type { ViewStyle } from "react-native"

export type MProps = {
    visible: boolean,
    onClose: () => void,
    styles: {
        wrapper: ViewStyle,
        container: ViewStyle,
    },
    animation: {
        in: string,
        out: string,
        duration: number,
    },
    component: React.ReactElement,
}