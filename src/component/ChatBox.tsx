'use client';
import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { LuMessageSquare, LuSend, LuX, LuSparkles } from 'react-icons/lu';
import Toast from './common/toatMessage';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface ChatResponse {
  reply: string;
}

const quirkyToastMessages = [
  "Try the New AI chat",
  "Want to know about me? ",
  "Z awakens... Ask wisely!",
  "Hi There, Want to chat?",
  "Z has entered the chat...",
  "Ready to answer your queries!",
];

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hey there! I'm Z, Jeevan's AI assistant. Cursed with knowledge, blessed with answers. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const chatRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show toast when user lands on the page
  useEffect(() => {
    // Small delay to let the page load first
    const showTimer = setTimeout(() => {
      const randomMessage = quirkyToastMessages[Math.floor(Math.random() * quirkyToastMessages.length)];
      setToastMessage(randomMessage);
      setShowToast(true);
    }, 1500);

    // Auto-dismiss after 4 seconds
    const hideTimer = setTimeout(() => {
      setShowToast(false);
    }, 5500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const newMsg: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error('Failed to send message');

      const data: ChatResponse = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Oops! Something went wrong. Even dark wizards have bad days.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      {/* Toast Notification - positioned near chat icon */}
      <div className='fixed bottom-20 md:bottom-24 right-4 md:right-16 z-[1001]'>
        <Toast
          message={toastMessage}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>

      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => {
            setShowToast(false);
            setIsOpen(true);
          }}
          className='fixed bottom-4 right-4 md:bottom-6 md:right-16 p-2 md:p-1 rounded-full z-[999] chat-icon-btn'
          aria-label='Open Chat'
        >
          <span className='w-8 h-8 md:w-12 md:h-12 text-lg md:text-2xl rounded-full inline-flex items-center justify-center text-white'>
            <LuMessageSquare />
          </span>
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div
          ref={chatRef}
          className='fixed inset-0 md:inset-auto md:bottom-6 md:right-6 w-full md:w-[420px] md:rounded-2xl flex flex-col z-[999] h-full md:h-[550px] overflow-hidden chat-container'
        >
          {/* Header */}
          <div className='flex justify-between items-center px-5 py-4 chat-header'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                <LuSparkles className='text-lg' />
              </div>
              <div>
                <h2 className='font-bold text-lg'>Chat with Z</h2>
                <p className='text-xs opacity-80'>AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors'
              aria-label='Close Chat'
            >
              <LuX className='text-lg' />
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 p-4 overflow-y-auto space-y-4'>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' ? 'chat-user-bubble' : 'chat-ai-bubble'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className='chat-message flex justify-start'>
                <div className='chat-ai-bubble px-4 py-3 flex items-center gap-1'>
                  <span className='typing-dot w-2 h-2 rounded-full bg-current opacity-60'></span>
                  <span className='typing-dot w-2 h-2 rounded-full bg-current opacity-60'></span>
                  <span className='typing-dot w-2 h-2 rounded-full bg-current opacity-60'></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className='p-4 border-t border-[var(--chat-input-border)]'>
            <div className='flex gap-3'>
              <input
                value={input}
                onChange={handleInputChange}
                placeholder='Ask me about Jeevan...'
                className='chat-input flex-grow px-4 py-3 rounded-xl focus:outline-none text-sm'
                onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                className='chat-send-btn w-12 h-12 rounded-xl flex items-center justify-center'
                disabled={isLoading}
                aria-label='Send message'
              >
                <LuSend className='text-lg' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
