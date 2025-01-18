// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   MessageCircle, 
//   Send, 
//   Loader, 
//   Moon, 
//   Sun, 
//   Settings,
//   Heart,
//   Activity,
//   Apple,
//   Pill,
//   Brain,
//   Coffee,
//   Cookie,
//   ChevronRight,
//   ChevronLeft,
//   Globe,
//   Database,
//   Download,
//   FileText
// } from 'lucide-react';

// import './chatpage.css';
// import { Link } from "react-router-dom";
// import MarkdownRenderer from './MarkdownRenderer';

// // Predefined prompt suggestions
// const chat_history = {history: []};

// const PROMPT_SUGGESTIONS = [
//   {
//     id: 1,
//     icon: <Apple className="w-4 h-4" />,
//     title: "Diet Plan",
//     prompt: "Give me Diet Plan with my medical conditions for 3 days"
//   },
//   {
//     id: 2,
//     icon: <Activity className="w-4 h-4" />,
//     title: "Health",
//     prompt: "With my Medical condition am i allowed to eat curd ? "
//   },
//   {
//     id: 3,
//     icon: <Brain className="w-4 h-4" />,
//     title: "Stress Management",
//     prompt: "What are some effective ways to manage stress with my Medical condition?"
//   },
//   {
//     id: 4,
//     icon: <Coffee className="w-4 h-4" />,
//     title: "Daily Routine",
//     prompt: " With my present medical conditions How should I structure my daily routine ?"
//   },
//   {
//     id: 5,
//     icon: <Cookie className="w-4 h-4" />,
//     title: "Nutritional content in food",
//     prompt: "What are the nutritional contents in chicken?"
//   },
//   {
//     id: 6,
//     icon: <Pill className="w-4 h-4" />,
//     title: "Food analyse",
//     prompt: "which food should i consume to get more energy ? "
//   }
// ];

// export default function App() {
//   const [messages, setMessages] = useState([]);
//   const [query, setQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isWebScraping, setIsWebScraping] = useState(false);
//   const [isRAGRetrieval, setIsRAGRetrieval] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [chatHistory, setChatHistory] = useState([]);
//   const [isSummarizing, setIsSummarizing] = useState(false);
  
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     document.body.classList.toggle('dark-mode', isDarkMode);
    
//     if (isModalOpen) {
//       fetchChatHistory();
//     }
//   }, [messages, isDarkMode, isModalOpen]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
  
//     const newMessage = { text: query, sender: 'user' };
//     setMessages((prev) => [...prev, newMessage]);
//     setQuery('');
//     setIsLoading(true);

//     const mrn= localStorage.getItem('mrn');
//     console.log(mrn);
  
//     try {
//       const response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}&mrn=${encodeURIComponent(mrn)}&history=${encodeURIComponent(JSON.stringify(chat_history))}`);
//       const data = await response.json();

//       chat_history.history.push({ User: query, Bot: data.message });
//       console.log(chat_history);
//       localStorage.setItem('chat_history', JSON.stringify(chat_history));
  
//       if (data.webscraping) {
//         setIsWebScraping(true);
//         setMessages((prev) => [
//           ...prev,
//           { text: "Web scraping in progress...", sender: 'bot', isWebScraping: true }
//         ]);
//         await new Promise(resolve => setTimeout(resolve, 3000));
//       } else if (data.ragRetrieval) {
//         setIsRAGRetrieval(true);
//         setMessages((prev) => [
//           ...prev,
//           { text: "Retrieving information from knowledge base...", sender: 'bot', isRAGRetrieval: true }
//         ]);
//       }
  
//       await new Promise(resolve => setTimeout(resolve, 3000));
  
//       setMessages((prev) => [
//         ...prev.filter(msg => !msg.isWebScraping && !msg.isRAGRetrieval),
//         { text: data.message, sender: 'bot' }
//       ]);
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         { text: 'Something went wrong. Please try again.', sender: 'bot' }
//       ]);
//     } finally {
//       setIsLoading(false);
//       setIsWebScraping(false);
//       setIsRAGRetrieval(false);
//     }
//   };
  
//   const handlePromptClick = (prompt) => {
//     setQuery(prompt);
//     if (window.innerWidth <= 768) {
//       setSidebarOpen(false);
//     }
//   };

//   const fetchChatHistory = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/chat-history');
//       const data = await response.json();
//       setChatHistory(data.history);
//     } catch (error) {
//       console.error('Error fetching chat history:', error);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const exportHistory = async () => {
//     try {
//       setIsSummarizing(true);
      
//       // First, call the summarization endpoint
//       const summaryResponse = await fetch('http://localhost:8000/summarize-chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ chat_history: chatHistory }),
//       });
  
//       if (!summaryResponse.ok) {
//         const errorData = await summaryResponse.json();
//         throw new Error(errorData.detail || 'Failed to generate summary');
//       }
  
//       const summaryData = await summaryResponse.json();
//       const { pdf_filename } = summaryData;
  
//       if (!pdf_filename) {
//         throw new Error('No PDF filename received from server');
//       }
  
//       // Get the PDF file using the filename
//       const pdfResponse = await fetch(`http://localhost:8000/get-pdf/${pdf_filename}`);
//       if (!pdfResponse.ok) {
//         const errorData = await pdfResponse.json();
//         throw new Error(errorData.detail || 'Failed to download PDF');
//       }
  
//       const pdfBlob = await pdfResponse.blob();
      
//       // Check if the blob is empty or invalid
//       if (pdfBlob.size === 0) {
//         throw new Error('Generated PDF is empty');
//       }
  
//       const url = URL.createObjectURL(pdfBlob);
      
//       // Create a link element and trigger download
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'chat_summary.pdf';
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       URL.revokeObjectURL(url);
  
//     } catch (error) {
//       console.error('Error during export:', error);
//       alert(`Export failed: ${error.message}. Please try again.`);
//     } finally {
//       setIsSummarizing(false);
//     }
//   };
  
//   return (
//     <div className={`app-container ${isDarkMode ? 'dark-theme' : ''}`}>
//       {/* Sidebar with toggle */}
//       <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
//         <div className="sidebar-header">
//           <Link to="/calendar">
//             <button className="new-chat-button">
//               Calendar
//             </button>
//           </Link>
//           <br></br>
//           <Link to="/profile">
//             <button className="new-chat-button">
//               Profile
//             </button>
//           </Link>
//         </div>

//         <button 
//           className="sidebar-toggle"
//           onClick={toggleSidebar}
//           aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
//         >
//           {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
//         </button>

//         <div className="prompts-list">
//           {PROMPT_SUGGESTIONS.map((suggestion) => (
//             <button
//               key={suggestion.id}
//               className="prompt-suggestion-item"
//               onClick={() => handlePromptClick(suggestion.prompt)}
//             >
//               <div className="prompt-icon">
//                 {suggestion.icon}
//               </div>
//               <div className="prompt-content">
//                 <div className="prompt-title">{suggestion.title}</div>
//                 <div className="prompt-preview">
//                   {suggestion.prompt.length > 40 
//                     ? `${suggestion.prompt.substring(0, 40)}...` 
//                     : suggestion.prompt}
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>

//         <div className="sidebar-footer">
//           <center><button className="settings-button" onClick={toggleModal}>
//             View Chat History
//           </button></center>
//         </div>
//       </div>

//       {/* Main content area */}
//       <div className={`main-content ${!isSidebarOpen ? 'expanded' : ''}`}>
//         <div className="chat-container">
//           <div className="chat-header">
//             <div className="header-content">
//               <MessageCircle className="text-blue-500 w-8 h-8 mr-3 animate-pulse" />
//               <h1 className="app-title">Feminae Bot</h1>
//             </div>
//           </div>

//           <div className="messages-container">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`message-wrapper ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
//               >
//                 <div className="message-content">
//                   {message.isWebScraping ? (
//                     <div className="web-scraping-indicator">
//                       <Globe className="w-6 h-6 text-blue-500 animate-spin" />
//                       <span>{message.text}</span>
//                     </div>
//                   ) : message.isRAGRetrieval ? (
//                     <div className="rag-retrieval-indicator">
//                       <Database className="w-6 h-6 text-green-500 animate-pulse" />
//                       <span>{message.text}</span>
//                     </div>
//                   ) : message.sender === 'bot' ? (
//                     <MarkdownRenderer content={message.text} />
//                   ) : (
//                     message.text
//                   )}
//                 </div>
//                 <div className="message-timestamp">
//                   {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </div>
//               </div>
//             ))}

//             {isLoading && !isWebScraping && !isRAGRetrieval && (
//               <div className="bot-message">
//                 <div className="typing-indicator">
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <form onSubmit={handleSearch} className="input-container">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Type your medical question..."
//               className="message-input"
//             />
//             <button
//               type="submit"
//               className="send-button"
//               disabled={isLoading || !query.trim()}
//             >
//               {isLoading ? (
//                 <Loader className="w-5 h-5 animate-spin" />
//               ) : (
//                 <Send className="w-5 h-5" />
//               )}
//             </button>
//           </form>
//         </div>
//         {!isSidebarOpen && (
//           <button
//             className="md:hidden fixed top-4 left-4 bg-pink-500 text-white p-2 rounded-full z-20"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <FaBars />
//           </button>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={(e) => {
//           if (e.target.classList.contains('modal-overlay')) {
//             setIsModalOpen(false);
//           }
//         }}>
//           <div className="modal-content">
//             <h2>Chat History</h2>
//             {chatHistory.length === 0 ? (
//               <p>No chat history available.</p>
//             ) : (
//               chatHistory.map((entry, index) => (
//                 <div key={index} className="history-entry">
//                   <strong>{entry.role === 'user' ? 'You:' : 'Bot:'}</strong> {entry.content}
//                 </div>
//               ))
//             )}
//             <div className="modal-buttons">
//               <button 
//                 className="modal-button export-button"
//                 onClick={exportHistory}
//                 disabled={isSummarizing || chatHistory.length === 0}
//               >
//                 {isSummarizing ? (
//                   <>
//                     <Loader className="w-4 h-4 mr-2 animate-spin" />
//                     Summarizing...
//                   </>
//                 ) : (
//                   <>
//                     <FileText className="w-4 h-4 mr-2" />
//                     Export Summary
//                   </>
//                 )}
//               </button>
//               <button 
//                 className="modal-button close-button"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Loader, Menu, Camera, Mic } from 'lucide-react';
import "./chatpage.css";
import { Link } from "react-router-dom";
import MarkdownRenderer from './MarkdownRenderer';


const PROMPT_SUGGESTIONS = [
  {
    id: 1,
    title: "Diet Plan",
    prompt: "Give me a Diet Plan with my medical conditions for 3 days.",
  },
  {
    id: 2,
    title: "Health",
    prompt: "With my Medical condition, am I allowed to eat curd?",
  },
  {
    id: 3,
    title: "Stress Management",
    prompt: "What are effective ways to manage stress with my condition?",
  },
  {
    id: 4,
    title: "Daily Routine",
    prompt: "How should I structure my routine with my medical condition?",
  },
];

const chat_hist = {history: []};

export default function App() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768 && isSidebarOpen) {
        const sidebar = document.querySelector('.sidebar');
        const menuButton = document.querySelector('.menu-button');
        if (sidebar && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { text: query, sender: "user" }]);
    setQuery("");
    setIsLoading(true);

    const mrn = localStorage.getItem('mrn');
    try {
      const response = await fetch(
        `http://localhost:3000/search?query=${encodeURIComponent(query)}&mrn=${encodeURIComponent(mrn)}&history=${encodeURIComponent(JSON.stringify(chat_hist))}`
      );
      const data = await response.json();
      chat_hist.history.push({ User: query, Bot: data.message });
      localStorage.setItem('chat_history', JSON.stringify(chat_hist))
      setMessages((prev) => [...prev, { text: data.message, sender: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      {/* Overlay for mobile */}
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={() => setSidebarOpen(false)} />
      
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <Link to="/dashboard">
            <button className="new-chat-button">Dashboard</button>
          </Link>
          <Link to="/calendar">
            <button className="new-chat-button">Calendar</button>
          </Link>
          <Link to="/profile">
            <button className="new-chat-button">Profile</button>
          </Link>
        </div>
        <div className="prompts-list">
          {PROMPT_SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion.id}
              className="prompt-suggestion-item"
              onClick={() => {
                setQuery(suggestion.prompt);
                if (window.innerWidth <= 768) {
                  setSidebarOpen(false);
                }
              }}
            >
              <div className="prompt-title">{suggestion.title}</div>
              <div className="prompt-preview">{suggestion.prompt}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        <div className="chat-container">
          <div className="chat-header">
            <button 
              className="icon-button menu-button"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <MessageCircle className="text-blue-500 w-8 h-8" />
            <h1 className="app-title">Feminae Bot</h1>
          </div>
          
          <div className="messages-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-wrapper ${
                  message.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                <div className="message-content">{<MarkdownRenderer content = {message.text} />}</div>

              </div>
            ))}
            {isLoading && ( 
              <div className="bot-message">
                <Loader className="w-5 h-5 animate-spin" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSearch} className="input-container">
            <button type="button" className="icon-button">
              <Camera className="w-6 h-6" />
            </button>
            <button type="button" className="icon-button">
              <Mic className="w-6 h-6" />
            </button>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your medical question..."
              className="message-input"
            />
            <button
              type="submit"
              className="send-button"
              disabled={isLoading || !query.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
