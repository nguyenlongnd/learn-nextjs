"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function LoginUser({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPathName = usePathname();
  const [textInput, setTextInput] = useState("");
  return (
    <div className="item-central">
      <h1>
        please login to use app, if you do not have account, please register app
      </h1>
      <div>
        <input
          className="border-red-700 border-2"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>

      {navLinks.map((link) => {
        const isActiveLink = currentPathName === link.href;
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActiveLink ? "font-bold text-red-600 m-4" : "text-blue-600 m-4"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
