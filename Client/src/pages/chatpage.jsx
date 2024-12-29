import React, { useState, useEffect, useRef } from "react";
import { FiPaperclip, FiMenu, FiX, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chats, setChats] = useState([
    { title: "Welcome to the chatbot!", messages: [] },
    { title: "Chat about AI!", messages: [] },
    { title: "Your last conversation", messages: [] },
  ]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim()) {
      const updatedChats = [...chats];
      updatedChats[activeChatIndex].messages.push({ text: input, isUser: true });
      setChats(updatedChats);
      handleBotResponse(input, updatedChats);
      setInput("");
    }
  };

  const handleBotResponse = (userMessage, updatedChats) => {
    let botReply = "";

    if (userMessage.toLowerCase().includes("hello")) {
      botReply = "Hi there! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("ai")) {
      botReply = "AI is fascinating! What would you like to learn about it?";
    } else if (userMessage.toLowerCase().includes("bye")) {
      botReply = "Goodbye! Have a great day!";
    } else {
      botReply = "I'm here to help! Could you clarify that for me?";
    }

    updatedChats[activeChatIndex].messages.push({ text: botReply, isUser: false });
    setChats(updatedChats);
  };

  const handleChatClick = (index) => {
    setActiveChatIndex(index);
    setSidebarOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleDeleteChat = (index) => {
    const updatedChats = chats.filter((_, chatIndex) => chatIndex !== index);
    setChats(updatedChats);
    if (activeChatIndex === index) {
      setActiveChatIndex(0);
    } else if (activeChatIndex > index) {
      setActiveChatIndex(activeChatIndex - 1);
    }
    if (updatedChats.length === 0) {
      setActiveChatIndex(0);
    } else if (activeChatIndex >= updatedChats.length) {
      setActiveChatIndex(updatedChats.length - 1);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "black" }}>
      <div style={{ display: "flex", flex: 1, flexDirection: "row", marginBottom: "56px" }}>
        {/* Sidebar */}
        <div
          style={{
            width: sidebarOpen ? "20%" : "0",
            minWidth: sidebarOpen ? "200px" : "0",
            backgroundColor: "black",
            color: "white",
            padding: sidebarOpen ? "1rem" : "0",
            display: sidebarOpen ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRight: sidebarOpen ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
            position: "relative",
          }}
        >
          <div>
            <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.5rem", fontWeight: "bold", color: "#FFFFFF" }}>
              Previous Chats
            </h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {chats.map((chat, index) => (
                <li
                  key={index}
                  style={{
                    padding: "0.5rem 0.8rem",
                    margin: "0.5rem 0",
                    backgroundColor: index === activeChatIndex ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "#FFFFFF",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span onClick={() => handleChatClick(index)}>{chat.title}</span>
                  <button
                    onClick={() => handleDeleteChat(index)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    <FiTrash2 />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            style={{
              backgroundColor: "rgb(68, 70, 84)",
              color: "white",
              border: "none",
              padding: "0.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
            onClick={() => setChats([...chats, { title: `New Chat ${chats.length + 1}`, messages: [] }])}
          >
            + Start New Chat
          </button>
          <button
            style={{
              backgroundColor: "rgb(68, 70, 84)",
              color: "white",
              border: "none",
              padding: "0.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => window.location.reload()}
          >
            New Chat
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              zIndex: 20,
            }}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Chat Section */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              color: "white",
              backgroundColor: "black",
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {chats[activeChatIndex]?.messages.map((message, index) => (
              <div key={index} style={{ textAlign: message.isUser ? "right" : "left", margin: "0.5rem 0" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.8rem",
                    borderRadius: "12px",
                    backgroundColor: message.isUser ? "rgb(33, 150, 243)" : "rgb(70, 70, 75)",
                    color: "white",
                    maxWidth: "70%",
                  }}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div style={{ display: "flex", alignItems:   "center", padding: "1rem", backgroundColor: "black" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.5rem",
                cursor: "pointer",
                marginRight: "0.5rem",
              }}
            >
              <FiPaperclip />
            </button>
            <input
              style={{
                flex: 1,
                padding: "0.8rem",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                fontSize: "1rem",
                backgroundColor: "rgb(52, 53, 65)",
                color: "white",
              }}
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              style={{
                marginLeft: "0.5rem",
                backgroundColor: "rgb(68, 70, 84)",
                color: "white",
                border: "none",
                padding: "0.8rem 1.2rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black py-3 shadow-md flex justify-around" style={{ zIndex: 10 }}>
        <Link to="/homepage" className="text-center text-gray-400 hover:text-white transition">
          <div>🏠</div>
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/chatpage" className="text-center text-gray-400 hover:text-white transition">
          <div>🤖</div>
          <span className="text-xs">AI Chat</span>
        </Link>
        <Link to="/calendar" className="text-center text-gray-400 hover:text-white transition">
          <div>📅</div>
          <span className="text-xs">Calendar</span>
        </Link>
        <Link to="/profile" className="text-center text-gray-400 hover:text-white transition">
          <div>👤</div>
          <span className="text-xs">Profile</span>
        </Link>
      </nav>

      {/* Sidebar Toggle Button */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            backgroundColor: "black",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 20,
          }}
        >
          <FiMenu size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatPage;
