import React from "react";
import { Modal, Pressable} from "react-native";
import type { MProps } from "./types/MProps";
import { MotiView, useAnimationState } from "moti";
import type { LayoutChangeEvent } from "react-native";

export const CustomModal = ({ component, visible, onClose, styles, animation }: MProps) => {
	const  [height, setHeight] = React.useState(0);
	const animationState = useAnimationState({
		close: {
			transition: {
				duration: animation?.duration || 800, 
				type: "timing",
			},
			translateY: height,
		},
		open: {
			transition: {
				duration: animation?.duration || 800, 
				type: "timing",
			},
			translateY: 0,
		},
	  })

	const onPressToCloseModal = () => {
		animationState.transitionTo("close");
	}

	const closeOnDidAnimate = () => {
		if (animationState.current === "close") {
			onClose();
		}
	}

	const onLayoutModalContent = (e: LayoutChangeEvent) => {
		setHeight(e.nativeEvent.layout.height);
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
					from={{ translateY: height }}
					onDidAnimate={closeOnDidAnimate}
					style={[styles.wrapper, { backgroundColor: "transparent" }]}>
					<Pressable onLayout={onLayoutModalContent} style={styles.container}>
						{component}
					</Pressable>
				</MotiView>
			</Pressable>
		</Modal>
	);
};
