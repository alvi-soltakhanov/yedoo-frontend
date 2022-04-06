import './message.css';

const Message = ({message, own}) => {
    return (
        <div className={ own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img className='messageImg' 
                src="https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg" 
                alt="" />
                <p className='messageText'>{message.text}</p>
            </div>
            <div className="messageBottom">{message.createdAt}</div>
        </div>
    );
};

export default Message;