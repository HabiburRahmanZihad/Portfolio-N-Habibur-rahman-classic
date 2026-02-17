"use client";
import { usePathname } from "next/navigation";
import ChatBot from "../components/chatBot/ChatBot";
export default function ChatBotController() {
  const pathname = usePathname();
  return <ChatBot />;
}
