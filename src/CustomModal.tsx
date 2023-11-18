import React from "react";
import { useRef } from "react";
import { Modal, Pressable, type ViewStyle } from "react-native";
import * as Animatable from 'react-native-animatable';
type Props = {
	children: React.ReactNode;
	visible: boolean;
	onClose: () => void;
	styles: {
		wrapper: ViewStyle;
		container: ViewStyle;
	};
	animation: {
		in: Animatable.Animation;
		out: Animatable.Animation;
		duration?: number;
	};
};

export const CustomModal = ({ children, visible, onClose, styles, animation }: Props) => {
	const handleViewRef = useRef<any>(null);
	const onPress = async () => {
		handleViewRef?.current && await handleViewRef.current[animation.out](800) as any;
		onClose();
	}
	return (
		<Modal
			animationType="none"
			transparent={true}
			onDismiss={onClose}
			visible={visible}
			style={{ width: "100%", flex: 1 }}>
			<Pressable
				onPress={onPress}
				style={styles.wrapper}>
				<Animatable.View ref={handleViewRef} duration={animation?.duration ? animation?.duration : 800} animation={animation.in} style={[styles.wrapper, { backgroundColor: "transparent" }]}>
					<Pressable onPress={() => { }} style={styles.container}>
						{children}
					</Pressable>
				</Animatable.View>
			</Pressable>
		</Modal>
	);
};