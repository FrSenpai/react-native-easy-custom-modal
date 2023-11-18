import { ModalProvider as MP, ModalContext as MC } from "./ModalProvider";
import { CustomModal as CM} from "./CustomModal";
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export const ModalProvider = MP
export const ModalContext = MC
export const CustomModal = CM