"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const chat = useChat() as any;
  const { messages, input, handleInputChange, handleSubmit, isLoading } = chat;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle-btn"
        aria-label="Toggle AI Chat"
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-robot"></i>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-title">
              <i className="fa-solid fa-bolt neon-text-red"></i> Preet's AI Assistant
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close-btn">
              <i className="fa-solid fa-times"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="chatbot-welcome">
                Hi! I am Preet's AI Assistant. Ask me anything about his projects, skills, or experience in English or Hinglish! 🚀
              </div>
            ) : (
              messages?.map((m: any) => (
                <div
                  key={m.id}
                  className={`chat-bubble-container ${
                    m.role === "user" ? "user-message" : "ai-message"
                  }`}
                >
                  <div className="chat-bubble">
                    {m.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="chat-bubble-container ai-message">
                <div className="chat-bubble typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input-area">
            <input
              className="chatbot-input"
              value={input || ""}
              onChange={handleInputChange}
              placeholder="Ask me anything..."
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={isLoading || !input.trim()}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .chatbot-toggle-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #000;
          border: 2px solid #ff3333;
          color: #ff3333;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 0 15px rgba(255, 51, 51, 0.5);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .chatbot-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 25px rgba(255, 51, 51, 0.8);
          background: rgba(255, 51, 51, 0.1);
        }
        .chatbot-window {
          position: fixed;
          bottom: 100px;
          right: 25px;
          width: 350px;
          height: 500px;
          background: rgba(10, 10, 10, 0.95);
          border: 1px solid rgba(255, 51, 51, 0.3);
          border-radius: 12px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 51, 51, 0.1);
          backdrop-filter: blur(10px);
          overflow: hidden;
          font-family: var(--font-inter), sans-serif;
        }
        .chatbot-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          background: rgba(255, 51, 51, 0.05);
          border-bottom: 1px solid rgba(255, 51, 51, 0.2);
        }
        .chatbot-header-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .chatbot-close-btn {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 1.2rem;
          transition: color 0.2s;
        }
        .chatbot-close-btn:hover {
          color: #ff3333;
        }
        .chatbot-messages {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .chatbot-messages::-webkit-scrollbar {
          width: 5px;
        }
        .chatbot-messages::-webkit-scrollbar-thumb {
          background: rgba(255, 51, 51, 0.3);
          border-radius: 5px;
        }
        .chatbot-welcome {
          text-align: center;
          color: #aaa;
          font-size: 0.9rem;
          margin-top: 20px;
          padding: 15px;
          border: 1px dashed rgba(255, 51, 51, 0.3);
          border-radius: 8px;
          background: rgba(255, 51, 51, 0.02);
        }
        .chat-bubble-container {
          display: flex;
          width: 100%;
        }
        .user-message {
          justify-content: flex-end;
        }
        .ai-message {
          justify-content: flex-start;
        }
        .chat-bubble {
          max-width: 80%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 0.95rem;
          line-height: 1.4;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        .user-message .chat-bubble {
          background: rgba(255, 51, 51, 0.15);
          border: 1px solid rgba(255, 51, 51, 0.3);
          color: #fff;
          border-bottom-right-radius: 2px;
        }
        .ai-message .chat-bubble {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ddd;
          border-bottom-left-radius: 2px;
        }
        .chatbot-input-area {
          display: flex;
          padding: 12px;
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(255, 51, 51, 0.2);
          gap: 8px;
        }
        .chatbot-input {
          flex: 1;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 8px 15px;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .chatbot-input:focus {
          border-color: rgba(255, 51, 51, 0.5);
        }
        .chatbot-send-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ff3333;
          border: none;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .chatbot-send-btn:disabled {
          background: #333;
          color: #666;
          cursor: not-allowed;
        }
        .chatbot-send-btn:not(:disabled):hover {
          background: #cc0000;
          box-shadow: 0 0 10px rgba(255, 51, 51, 0.5);
        }
        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
          height: 24px;
          padding: 10px 14px !important;
        }
        .typing-indicator span {
          width: 6px;
          height: 6px;
          background-color: #ff3333;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
        .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }
        
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        @media (max-width: 480px) {
          .chatbot-window {
            width: calc(100% - 40px);
            right: 20px;
            bottom: 90px;
            height: 60vh;
          }
        }
      `}</style>
    </>
  );
}
