"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MessageSquare } from 'lucide-react';
import ChatbotDialog from './chatbot-dialog';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open Chatbot"
      >
        <MessageSquare className="h-7 w-7" />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] p-0 flex flex-col h-[70vh] max-h-[600px]">
          <DialogHeader className="p-6 pb-2 border-b">
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              AdaptAI Support Chat
            </DialogTitle>
            <DialogDescription>
              Ask me anything about AdaptAI services and solutions.
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-hidden">
            <ChatbotDialog />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
