'use client';
import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { LuMessageSquare } from 'react-icons/lu';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

interface ChatResponse {
  reply: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi!! I am Jeevan's AI assistant. How can I help you?",
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const chatRef = useRef<HTMLDivElement>(null); // ref for chat box

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
        { role: 'assistant', text: 'Oops! Something went wrong.' },
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
      {/* Floating Chat Icon */}
      {/* Floating Chat Icon */}
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='fixed bottom-6 right-6 textGreen p-4 mx-9 rounded-full shadow-lg hover:textGreen/80 transition z-[999] shake-updown'
          aria-label='Open Chat'
        >
          <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
            <LuMessageSquare />
          </span>
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div
          ref={chatRef} // attach ref
          className='fixed bottom-6 right-6 w-80 bg-bodyColor border border-textGreen rounded-lg shadow-lg flex flex-col z-[999] min-w-[400px] h-[600px]'
        >
          {/* Header */}
          <div className='flex justify-between items-center p-3 border-b border-textUnderline'>
            <h2 className='font-semibold textGreen'>Chat with Z - AI</h2>
            <button
              onClick={() => setIsOpen(false)}
              className='text-textGreen hover:text-textUnderline'
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className='flex-1 p-4 overflow-y-auto h-64 textDark '>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`my-1 ${
                  msg.role === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 my-2 rounded-lg border ${
                    msg.role === 'user'
                      ? 'border-navBarText text-navBarText'
                      : 'border-textDark text-textDark'
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className='text-left my-1'>
                <span className='inline-block px-3 py-1 my-2 rounded-lg border border-textDark text-textDark animate-pulse'>
                  Let me think...
                </span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className='flex border-t border-textGreen p-2 gap-2'>
            <input
              value={input}
              onChange={handleInputChange}
              placeholder='Ask me about Jeevan...'
              className='border border-textGreen flex-grow px-3 py-1 rounded textGreen bg-transparent focus:outline-none'
              onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              className='border border-textUnderline text-textUnderline px-4 py-1 rounded bg-transparent hover:text-textGreen hover:border-textGreen transition'
              disabled={isLoading}
            >
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
