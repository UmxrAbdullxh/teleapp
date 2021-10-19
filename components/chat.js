// import React from "react";
// import ChatBot from 'react-native-chatbot';

// const Chat = () => {

//     const steps = [
//         {
//           id: '0',
//           message: 'Welcome to react chatbot!',
//           trigger: '1',
//         },
//         {
//           id: '1',
//           message: 'Bye!',
//           end: true,
//         },
//     ];

//     return(
//         <ChatBot steps={steps} />
//     )
// }

// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
 
// export default function Chat() {
//   const [messages, setMessages] = useState([]);
 
//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])
 
//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }
