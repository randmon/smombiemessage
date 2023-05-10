import React from 'react';
import {Text, View} from 'react-native';

interface MessageBubbleProps extends React.PropsWithChildren {
	align?: string;
}
const MessageBubble = ({align, children}: MessageBubbleProps) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: align === 'left' ? 'flex-start' : 'flex-end',
        }}>
            <View style={{
                backgroundColor: align === 'left' ? '#edf1f5' : '#67b0f5',
                borderRadius: 10,
                marginBottom: 10,
                padding: 10,
                maxWidth: '75%',
            }}>
                <Text style={{
                    color: align === 'left' ? '#000' : '#fff',
                    fontSize: 16,
                }}>
                {children}
                </Text>
            </View>
        </View>
    );
};

export default MessageBubble;