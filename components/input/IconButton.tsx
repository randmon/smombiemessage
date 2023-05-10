import React from "react";
import { Pressable } from "react-native";
import * as Haptics from 'expo-haptics';

interface IconButtonProps extends React.PropsWithChildren {
	size?: number;
	color?: string;
	label?: string;
	onPress: () => void;
	vibration?: boolean;
}

export default function IconButton({ size, color, onPress, vibration, children }: IconButtonProps) {
	let x = size || 24;
	return (
		<Pressable onPress={() => {
			onPress();
			// Vibrate a little bit
			if (vibration) {
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
			}
		}} style={{
			width: x*2,
			height: x*2,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: color,
			borderRadius: 10,
		}}>
			{children}
		</Pressable>
	);
}