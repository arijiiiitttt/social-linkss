import React, { useEffect, useRef, useState } from 'react';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import { RiMailSendLine } from 'react-icons/ri';
import { FaUserGraduate } from "react-icons/fa6";

function useScrollFadeUp() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Links() {
  const [theme, setTheme] = useState('dark');
  const links = [
    {
      label: 'Portfolio',
      href: '',
      image: '/logos/portfolio.png',
      description: 'My personal portfolio',
      video: '/videos/beacons.mp4',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@arijitroy098',
      image: '/logos/',
      description: 'Watch my latest videos',
      video: '/videos/youtube.mp4',
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/arijitroy098',
      image: '/logos/r.png',
      description: 'Explore my design projects',
      video: '/videos/behance.mp4',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/thearijiiiitttt_/',
      image: '/logos/insta.png',
      description: 'Follow my daily life updates',
      video: '/videos/instagram.mp4',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/arijiiiitttt',
      image: '/logos/git.png',
      description: 'Explore my open-source projects',
      video: '/videos/github.mp4',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/realarijiiiitttt/',
      image: '/logos/link.jpg',
      description: 'Connect professionally',
      video: '/videos/linkedin.mp4',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61565851260816',
      image: '/logos/face.png',
      description: 'Connect with me on Facebook',
      video: '/videos/youtube.mp4',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com',
      image: '/images/twitter.png',
      description: 'Follow tech rants & thoughts',
      video: '/videos/twitter.mp4',
    },
  ];

  const icons = [
    {
      icon: <FaUserGraduate />,
      hover: 'hover:text-yellow-500',
      href: 'https://your-portfolio-link.com',
    },
    {
      icon: <FaInstagram />,
      hover: 'hover:text-pink-500',
      href: 'https://instagram.com/thearijiiiitttt_',
    },
    {
      icon: <FaGithub />,
      hover: 'hover:text-black dark:hover:text-white',
      href: 'https://github.com/arijiiiitttt',
    },
    {
      icon: <FaLinkedin />,
      hover: 'hover:text-blue-600',
      href: 'https://www.linkedin.com/in/realarijiiiitttt/',
    },
  ];

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Apply theme class to body
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full ${
          theme === 'dark' ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'
        }`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Cover + Profile */}
<div className="relative">
  {theme === 'dark' ? (
    <img
      src="/images/cover-dark.jpg"
      alt="Dark Cover"
      className="w-full h-40 object-cover"
    />
  ) : (
    <img
      src="/images/cover-light.jpg"
      alt="Light Cover"
      className="w-full h-40 object-cover"
    />
  )}
  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
    <img
      src="/images/profile.jpg"
      alt="Profile"
      className="w-38 h-38 rounded-full border-4 border-black dark:border-white shadow-lg object-cover"
    />
  </div>
</div>

      {/* Content */}
      <div className="pt-20 px-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold">@arijiiiiitttt</h1>
        <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Development is my passion, not work 😎
        </p>

        {/* Social Icons */}
        <div className="flex gap-[1px] text-2xl mb-6">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 rounded-full transition duration-300 ${
                theme === 'dark' ? 'hover:bg-white' : 'hover:bg-gray-200'
              } ${item.hover}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Link Blocks */}
        <div className="w-full max-w-lg space-y-6">
          {links.map((link, idx) => {
            const [ref, visible] = useScrollFadeUp();
            const [hovered, setHovered] = useState(false);

            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
                className={`flex items-center gap-4 ${
                  theme === 'dark' ? 'bg-gray-950 border-gray-700 hover:border-white' : 'bg-white border-gray-300 hover:border-gray-500'
                } border p-5 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <img
                  src={link.image}
                  alt={link.label}
                  className="w-12 h-12 rounded-full object-cover border border-gray-500"
                />

                <div className="flex-1 flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{link.label}</h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {link.description}
                    </p>
                  </div>
                  {hovered && (
                    <video
                      src={link.video}
                      autoPlay
                      muted
                      loop
                      className="w-28 h-16 rounded-lg object-cover"
                    />
                  )}
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className={`w-full max-w-lg mt-14 px-6 py-8 ${
          theme === 'dark' ? 'bg-gray-950 border-gray-500 hover:shadow-white/10' : 'bg-white border-gray-300 hover:shadow-gray-400/10'
        } border-2 border-dotted rounded-3xl shadow-lg transition-shadow duration-300`}>
          <div className="flex items-center gap-3 mb-4">
            <RiMailSendLine className="text-3xl" />
            <h2 className="text-2xl font-bold">Let's Connect</h2>
          </div>

          {/* Contact Bar */}
          <hr className={`border-t ${
            theme === 'dark' ? 'border-white/30' : 'border-gray-300'
          } mb-4`} />

          <p className={`mb-6 text-sm leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Whether it's a collab, a question, or just a friendly hello, drop me a line. I read every message 💌
          </p>

          <a
            href="mailto:arijit123roy098@gmail.com"
            className={`block text-center w-full ${
              theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
            } border border-gray-500 font-bold py-3 rounded-full hover:scale-95 transition-all duration-300 shadow-md`}
          >
            Send me an Email
          </a>
        </div>

        {/* Footer */}
        <p className={`text-md mt-3 pb-5 ${
          theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Made with 💖 by arijiiiitttt
        </p>
      </div>
    </div>
  );
}