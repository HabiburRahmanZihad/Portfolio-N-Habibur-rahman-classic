"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import toast from 'react-hot-toast';
const KeyboardNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      if (e.key.toLocaleLowerCase() === "c" && pathname !== "/contact") {
        router.push("/contact");
      }
      if (e.key.toLocaleLowerCase() === "r" && pathname !== "/resume") {
        router.push("/resume");
      }
      if (e.key.toLocaleLowerCase() === "h" && pathname !== "/") {
        router.push("/");
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "g") {
        router.push("https://github.com/HabiburRahmanZihad");
      }

      if (e.shiftKey && e.key === "ArrowUp") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "l") {
        router.push(
          "https://www.linkedin.com/in/habibur-rahman-zihad-563056287",
        );
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "f") {
        router.push(
          "https://www.facebook.com/HabiburRahmanZihad",
        );
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "w") {
        router.push("https://wa.me/8801735166610");
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "t") {
        router.push("https://x.com/HabiburRahmanZ");
      }
      if (e.shiftKey && e.key.toLocaleLowerCase() === "e") {
        navigator.clipboard.writeText("zihad.habiburrahman@gmail.com");
        toast.success('Email copied!')
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, pathname]);

  return null;
};

export default KeyboardNavigation;
