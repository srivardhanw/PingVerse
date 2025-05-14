"use client"
import React, { ReactElement } from 'react'
import { useContext, createContext, useState } from 'react'

interface ChatContextType {
  activeSidebarButton : string;
  setActiveSidebarButton : (value: string) => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({children}: {children: React.ReactNode}) => {
  const [activeSidebarButton, setActiveSidebarButton] = useState('search');
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  return (
    <ChatContext.Provider value={{activeSidebarButton, setActiveSidebarButton, isSearchOpen, setIsSearchOpen}}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};