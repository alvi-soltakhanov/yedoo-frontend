import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

const Conversation = ({conversation, currentUser}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(m => m !== currentUser)

    const getUser = async () => {
      try {
        const res = await axios(`http://localhost:4000/clients/${friendId}`)
        setUser(res.data)
        console.log(res);
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [currentUser, conversation])

  console.log(user);

  return (
    <div className="conversation">
      <span className="conversationName">{user?.name === undefined ? 'курьер' : user?.name}</span>
    </div>
  );
};

export default Conversation;
