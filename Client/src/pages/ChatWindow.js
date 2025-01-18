  // import React from 'react';

  // function ChatWindow({ messages }) {
  //   return (
  //     <div className="chat-window">
  //       {messages.map((message, index) => (
  //         <div key={index} className={`message ${message.sender}`}>
  //           {message.text}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  // export default ChatWindow;

  import React, { useRef, useEffect } from 'react';

  function ChatWindow({ messages }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    return (
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    );
  }

  export default ChatWindow;