import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col">
       {/* Background Image */}
       <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tea%20Brewing%20Launching%20Creative%202.2-2l7QELjrT6Vi8j7tLg2gKFAaZsvx6C.png"
          alt="Coffee shop interior"
          layout="responsive"
          width={1920} // Adjust width & height to maintain aspect ratio
          height={1080}
          className="object-contain w-full h-auto"
          priority
        />
      </div>


      {/* Overlay 
      <div className="absolute inset-0 bg-black/60 z-10" />*/}

      {/* Content Wrapper */}
      <div className="relative z-20 flex flex-col min-h-screen px-6 py-12">
        {/* Navbar */}
        <nav className="w-full flex justify-between items-center p-6">
          {/* Logo */}
          <div className="text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <path d="M12 2L3 9.5L3 21.5L21 21.5L21 9.5L12 2Z" />
            </svg>
          </div>

          {/* Contact Link */}
          <a href="#contact" className="text-white hover:text-gray-200 transition-colors">
            Contact Us
          </a>
        </nav>        
        <div className="flex flex-col flex-1 min-h-screen">
          {/* This is to move main content down */}
          <main className="w-full max-w-4xl mx-auto flex-1 flex items-center justify-center">
            <div>
              <h1 className="pb-[500px]"></h1>
            </div>
          </main>
          {/* Main Content */}
          <main className="w-full max-w-4xl mx-auto space-y-20 mb-12 flex-1 flex-col items-center justify-center">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-[#f5e6d3]">STILL BREWING</h1>
              <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-[#f5e6d3]">SERVING SOON...</h2>
            </div>

            {/* Form Section */}
            <div className="max-w-xl mx-auto bg-transparent p-6 rounded-lg">
              <h3 className="text-[#f5e6d3] text-3xl font-semibold text-center mb-8">Stay Tuned</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-gray-300 text-sm">First Name</label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-gray-300 text-sm">Last Name</label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-gray-300 text-sm">Company Name</label>
                  <Input
                    id="company"
                    placeholder="Company Name"
                    className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-300 text-sm">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="bg-black/40 border-gray-700 text-white placeholder:text-gray-500 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-[#517963] hover:bg-[#446856] text-white">Submit</Button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
