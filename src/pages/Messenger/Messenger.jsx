import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Conversation from "../../components/conversations/Conversation";
import Header from "../../components/Header/Header";
import Message from "../../components/Message/Message";
import "./messenger.css";
import { io } from 'socket.io-client';

const Messenger = () => {

  // подгружение чатов
  const [conversations, setConversations] = useState([]);

  // Данные о текушем чате
  const [currentChat, setCurrentChat] = useState(null);

  // Сообщения которые открыты в текущий момент
  const [messages, setMessages] = useState();

  // Новое сообщение 
  const [newMessage, setNewMessage] = useState();

  const socket = useRef();

  // Обработка приходящий сообщений
  const [incomingMessage, setIncomingMessage] = useState(null);

  // подгружение информации о юзере при переходе в чат
  const user = useSelector((state) => state.application.Id);


  useEffect(() => {
    socket.current = (io('ws://localhost:8900/'))
    socket.current.on('getMessage', data=> {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      }) 
    })
  }, [])

  // ЭФфект для обновления массива сообщенийй

  useEffect(() => {
    incomingMessage && 
    currentChat?.members.includes(incomingMessage.sender) &&
    setMessages((prev) => [...prev, incomingMessage])
  }, [incomingMessage, currentChat])

  // effect для сокета
 
  useEffect(() => {
    socket.current.emit('addUser', user);
    socket.current.on('getUsers', users => {
      console.log(users);
    });
  }, [user])



  // Автоматическое подгружение чатов
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/conversations/${user}`
        );
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);


  // Подгружение одного чата
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get('http://localhost:4000/messages/' + currentChat?._id );
        setMessages(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getMessages()
  }, [currentChat]);


  // функция создания, и отправки сообщения сообщения
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
        conversationId: currentChat._id,
        sender: user,
        text: newMessage,
    }

    const receiverId = currentChat.members.find(member => member !== user)

    // отправка сообщения на сокет сервер

    socket.current.emit('sendMessage', {
      senderId: user,
      receiverId,
      text: newMessage,
    })
  
    try {
        const res = await axios.post('http://localhost:4000/messages', message);
        setMessages([...messages, res.data])
        setNewMessage('')

    } catch (err) {
        console.log(err)
    }
  }



  return (
    <>
      <Header />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <div className="Chat">Чаты</div>
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} key={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                    {messages.map(message => {
                        return <Message message={message} own={message.sender === user} />
                    })}
                </div>

                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Напишите смс"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>Отправить</button>
                </div>
              </>
            ) : (
              <span className="noConversationText">Open a conversation</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
