// import React from "react";
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, View, Text } from "react-native";
import Chat from "../components/chat";

const Chatbot = () => {

  const [messages, setMessages] = useState([]);
  let count = useRef(1)
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://pbs.twimg.com/profile_images/1079250910755213313/fHMhccTC.jpg',
        },
      },
    ])
  }, [])

  if(count.current===messages.length){
    const ma2 = {
      _id: count.current+1,
      // text: 'I dont understand',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://pbs.twimg.com/profile_images/1079250910755213313/fHMhccTC.jpg',
      }
    }
    
  
    count.current = count.current+1;
    let txt = 'hi'
    
    // console.log(messages);
  
      if(messages[0].text==='hi'){
        txt = 'Type info for information.\nType help for queries.'
        setMessages([{...ma2, text:txt}, ...messages])
      }
      else if(messages[0].text==='info'){
        txt = 'This application was created by Saniya with React Native.'
        setMessages([{...ma2, text:txt}, ...messages])
      }
      else if(messages[0].text==='help'){
        txt = 'For any query contact @sayyedsaniya29@gmail.com'
        setMessages([{...ma2, text:txt}, ...messages])
      }
      else if(messages[0].text==='thanks'){
        txt = 'Happy to help.'
        setMessages([{...ma2, text:txt}, ...messages])
      }
      // else if(messages[0].text != 'hi' || 'good' || 'help'){
      //   txt = 'I dont understand. Type info. '
      //   setMessages([{...ma2, text:txt}, ...messages])
      // }
  }

  // if(count.current===messages.length){
  //   const ma3 = {
  //     _id: count.current+1,
  //     text: 'How are you doing?',
  //     createdAt: new Date(),
  //     user: {
  //       _id: 2,
  //       name: 'React Native',
  //       avatar: 'https://pbs.twimg.com/profile_images/1079250910755213313/fHMhccTC.jpg',
  //     }
  //   }
  
  //   count.current = count.current+1;
    
  //   // console.log(messages);
  
  //     if(messages[1].text==='good'){
  //       setMessages([ma3, ...messages])
  //     }
  // }


  

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default Chatbot;