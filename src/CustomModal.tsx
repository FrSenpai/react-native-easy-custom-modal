import React from "react";
import { Modal, Pressable} from "react-native";
import type { MProps } from "./types/MProps";
import { MotiView, useAnimationState } from "moti";

export const CustomModal = ({ component, visible, onClose, styles, animation }: MProps) => {
	const animationState = useAnimationState({
		close: {
		  scale: [1, 0.5, 0],
		},
		open: {
			transition: {
				duration: animation?.duration || 1000, 
			},
			
			translateY: 0,
		},
	  })

	const onPressToCloseModal = () => {
		animationState.transitionTo("close");
		onClose();
	}

	React.useEffect(() => {
		if (visible) animationState.transitionTo("open");
	}, [visible])

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
				<MotiView state={animationState}
					from={{
						translateY: 300,
						
					}}
					style={[styles.wrapper, { backgroundColor: "transparent" }]}>
					<Pressable style={styles.container}>
						{component}
					</Pressable>
				</MotiView>
			</Pressable>
		</Modal>
	);
};
