import React from 'react';
import { View } from 'react-native';
import MessageBubble from './message-bubble';

const MessageArea = () => {
    return (
        <View style={{
            margin: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
            flexGrow: 1,
        }}>
            <MessageBubble align='left'>
                Hello?
            </MessageBubble>
            <MessageBubble align='right'>
                Hi! How are you doing this lovely morning?
            </MessageBubble>
            <MessageBubble align='left'>
                I'm doing well, thanks for asking!
            </MessageBubble>
            <MessageBubble align='right'>
                That's great to hear!
            </MessageBubble>
            <MessageBubble align='left'>
                Yeah, it is!
            </MessageBubble>
            <MessageBubble align='right'>
                I'm going to go now, bye!
            </MessageBubble>
            <MessageBubble align='right'>
                💖
            </MessageBubble>
            <MessageBubble align='left'>
                Bye!
            </MessageBubble>
        </View>
    );
};

export default MessageArea;