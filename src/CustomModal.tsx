import React from "react";
import { Modal, Pressable} from "react-native";
import type { MProps } from "./types/MProps";
import { MotiView } from "moti";

export const CustomModal = ({ component, visible, onClose, styles }: MProps) => {
	const onPressToCloseModal = () => {
		onClose();
	}
	return (
		<Modal
			animationType="none"
			transparent={true}
			onDismiss={onPressToCloseModal}
			visible={visible}
			style={{ width: "100%", flex: 1 }}>
			<Pressable
				onPress={onPressToCloseModal}
				style={styles.wrapper}>
				<MotiView from={{ scaleY: 10 }}
					animate={{ scaleY: 1 }}
					transition={{ type: 'timing', scale: { type: 'spring' } }}
					exit={{ scaleY: 0 }}
					style={[styles.wrapper, { backgroundColor: "transparent" }]}>
					<Pressable style={styles.container}>
						{component}
					</Pressable>
				</MotiView>
			</Pressable>
		</Modal>
	);
};
