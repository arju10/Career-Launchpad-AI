// "use client";

// import React from "react";
// import {
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   ChevronDown,
//   FileText,
//   GraduationCap,
//   LayoutDashboard,
//   PenBox,
//   StarsIcon,
// } from "lucide-react";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="bg-gray-900 text-white">
//       <div className="container mx-auto flex items-center justify-between px-4 py-4 flex-wrap">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <h1 className="text-2xl font-bold">Career Launchpad AI</h1>
//         </Link>

//         {/* Main Navigation & Actions */}
//         <div className="flex items-center space-x-4 mt-4 md:mt-0 md:space-x-6">
//           {/* Nav links */}
//           <nav className="hidden md:flex space-x-6">
//             <Link href="/" className="hover:text-gray-400">
//               Home
//             </Link>
//             <Link href="/price" className="hover:text-gray-400">
//               Price
//             </Link>
//             <Link href="/about" className="hover:text-gray-400">
//               About
//             </Link>
//             <Link href="/contact" className="hover:text-gray-400">
//               Contact
//             </Link>
//           </nav>

//           {/* Signed In Actions */}
//           <SignedIn>
//             <div className="flex items-center gap-2">
//               {/* Dashboard */}
//               <Link href="/dashboard">
//                 <Button variant="outline">
//                   <LayoutDashboard className="h-4 w-4" />
//                   <span className="hidden md:block">Industry Insights</span>
//                 </Button>
//                 <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
//                   <LayoutDashboard className="h-4 w-4" />
//                 </Button>
//               </Link>

//               {/* Dropdown */}
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button className="items-center gap-2">
//                     <StarsIcon className="h-4 w-4" />
//                     <span className="hidden sm:inline">Growth Tools</span>
//                     <ChevronDown className="h-4 w-4" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuLabel>
//                     <Link href="/resume" className="flex items-center gap-2">
//                       <FileText className="h-4 w-4" />
//                       Build Resume
//                     </Link>
//                   </DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem asChild>
//                     <Link href="/ai-cover-letter" className="flex items-center gap-2">
//                       <PenBox className="h-4 w-4" />
//                       Cover Letter
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem asChild>
//                     <Link href="/interview" className="flex items-center gap-2">
//                       <GraduationCap className="h-4 w-4" />
//                       Interview Prep
//                     </Link>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>

//               {/* User Button */}
//               <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                   userButtonPopoverCard: "shadow-xl",
//                   userPreviewMainIdentifier: "font-semibold",
//                 },
//               }}
//               afterSignOutUrl="/"
//             />
//             </div>
//           </SignedIn>

//           {/* Signed Out Action */}
//           <SignedOut>
//             <SignInButton>
//               <Button>Sign In</Button>
//             </SignInButton>
//           </SignedOut>
//         </div>
//       </div>

//       {/* Mobile Nav (optional dropdown or simplified stack could go here) */}
//       <div className="md:hidden px-4 pb-4 space-x-4 flex justify-center text-sm">
//         <Link href="/" className="hover:text-gray-400">
//           Home
//         </Link>
//         <Link href="/price" className="hover:text-gray-400">
//               Price
//         </Link>
//         <Link href="/about" className="hover:text-gray-400">
//           About
//         </Link>
//         <Link href="/contact" className="hover:text-gray-400">
//           Contact
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;


"use client";

import React, { useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-sky-500/20 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Career Launchpad AI
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center justify-center mx-auto">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/price" className="hover:text-gray-400">Price</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/ai-cover-letter" className="flex items-center gap-2">
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2 bg-gray-800">
          <Link href="/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/price" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Price</Link>
          <Link href="/about" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Contact</Link>

          <SignedIn>
            <Link href="/dashboard" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
              Industry Insights
            </Link>
            <Link href="/resume" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
              Build Resume
            </Link>
            <Link href="/ai-cover-letter" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
              Cover Letter
            </Link>
            <Link href="/interview" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>
              Interview Prep
            </Link>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="w-full">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      )}
    </header>
  );
};

export default Header;
