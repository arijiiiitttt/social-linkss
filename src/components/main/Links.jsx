import React, { useEffect, useRef, useState } from 'react';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMoon,
} from 'react-icons/fa';
import { FaRegFileAlt } from "react-icons/fa";
import { CiCloudSun } from "react-icons/ci";
import { RiMailSendLine } from 'react-icons/ri';
import { FaUserGraduate } from "react-icons/fa6";
import { href } from 'react-router-dom';

const downloadPDF = () => {
  const confirmed = window.confirm("Do you want to download the Resume📃??");
  if (confirmed) {
    const link = document.createElement('a');
    link.href = '/Arijit Roy-s Resume📃.pdf';
    link.download = 'Arijit Roy-s Resume📃.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};


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
  const [wave, setWave] = useState(0); // Use a number to represent the wave position

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWave((prevWave) => (prevWave + 1) % 4); // Cycle through 0, 1, 2, 3
    }, 300); // Adjust timing for wave speed

    return () => clearInterval(intervalId);
  }, []);

  const waveEmojis = ['👋🏼', '🖐🏼', '🖖🏼', '✋🏼']; // Different hand positions

  const getAnimatedWave = () => {
    return waveEmojis[wave];
  };
  const links = [
    {
      label: 'Portfolio',
      href: 'https://arijiiiittttportfolio.netlify.app/',
      target: '_blank',
      image: '/logos/portfolio.png',
      description: 'My personal portfolio',
      video: '/videos/beacons.mp4',
      live: true,
    },
    {
      label: 'CodeMaster',
      href: '/underprocess',
      image: '',
      description: 'A full-stack coding platform',
      video: '',
      live: false,
    },
    {
      label: '',
      href: '',
      image: '',
      description: '',
      video: '',
      live: false,
    },
    {
      label: 'ImagineAI',
      href: '/underprocess',
      image: '',
      description: 'Text to image generation platform',
      video: '',
      live: false,
    },
    {
      label: 'DoorBell',
      href: '/underprocess',
      image: '',
      description: 'Connect with random people online',
      video: '',
      live: false,
    },
    {
      label: 'Makautkarla',
      href: '',
      image: '',
      description: '',
      video: '',
      live: false,
    },
    {
      label: 'ResumeBanao',
      href: '/underprocess',
      image: '/logos/resumebanao.png',
      description: 'Build your resume in minutes',
      video: '',
      live: false,
    },
    {
      label: 'HelloGames',
      href: '/underprocess',
      target: '_blank',
      image: '/logos/hellogames.png',
      description: 'All in one gaming platform',
      video: '',
      live: false,
    },
    {
      label: 'GoalTracker',
      href: 'https://goaltracker-iota.vercel.app/',
      target: '_blank',
      image: '/logos/goaltracker.png',
      description: 'Organize your tasks & boost productivity daily',
      video: '',
      live: true,
    },
    {
      label: 'Penta',
      href: '/broken',
      target: '_blank',
      image: '/logos/penta.png',
      description: '',
      video: '',
      live: false,
    },
    {
      label: 'Easydraw',
      href: '/underprocess',
      target: '_blank',
      image: '/logos/easydraw.png',
      description: 'Create stunning drawings effortlessly',
      video: '',
      live: false,
    },
    {
      label: '',
      href: '/underprocess',
      target: '_blank',
      image: '/logos/',
      description: '',
      video: '',
      live: false,
    },
    {
      label: 'Notion',
      href: 'https://www.notion.so/My-Solved-Code-Repository-1facd6664e6280fba154c72101c03e70?source=copy_link',
      target: '_blank',
      image: '/logos/notion.png',
      description: 'My DSA Sheet',
      video: '',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@arijiiiitttt',
      target: '_blank',
      image: '/logos/youtube.jpg',
      description: 'Watch my latest videos',
      video: '/videos/youtube.mp4',
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
      image: '/logos/twitter.png',
      description: 'Follow tech rants & thoughts',
      video: '/videos/twitter.mp4',
    },
  ];

  const icons = [
    {
      icon: <FaUserGraduate />,
      hover: 'hover:text-green-500',
      href: 'https://www.youtube.com/@arijiiiitttt',
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
    {
      icon: <FaRegFileAlt />,
      hover: 'hover:text-red-600',
      onClick: downloadPDF,
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
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark'
      ? 'bg-black text-white'
      : 'bg-gradient-to-br from-blue-50 to-amber-50 text-gray-900'
      }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800 shadow-md'
          }`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <CiCloudSun size={25} /> : <FaMoon size={20} />}
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
      <div className="pt-16 px-4 flex flex-col items-center">
        <h1 className="md:text-4xl lg:text-4xl text-3xl font-bold text-center pl-7 tracking-tighter">Hi, I'm Arijit Roy {getAnimatedWave()}</h1>
        <p className={`mb-2 Bricolage text-[13px] mt-1 text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
          Development is my passion, not work 😎
        </p>

        {/* Social Icons */}
        <div className="flex gap-[1px] text-2xl mb-6">
          {icons.map((item, index) => (
            // Conditionally render based on whether onClick or href exists
            item.onClick ? (
              <button
                key={index}
                onClick={item.onClick} // Use onClick for buttons
                className={`p-1 rounded-full transition duration-300 ${theme === 'dark' ? 'hover:bg-white' : 'hover:bg-gray-200'
                  } ${item.hover}`}
                aria-label="Download Resume" // Add aria-label for accessibility
              >
                {item.icon}
              </button>
            ) : (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-1 rounded-full transition duration-300 ${theme === 'dark' ? 'hover:bg-white' : 'hover:bg-gray-200'
                  } ${item.hover}`}
                aria-label={`Link to ${item.href}`} // Add aria-label for accessibility
              >
                {item.icon}
              </a>
            )
          ))}
        </div>


        {/* <div className="max-w-4xl mx-auto mt-3 mb-2 px-4 text-center">
  <span className="inline-block bg-gray-950 dark:bg-white border-gray-700 border-1 text-white dark:text-black px-4 py-1 text-sm rounded-lg font-semibold">
    My Links
  </span>
</div> */}


        {/* projects */}


        {/* <div className="max-w-4xl mx-auto mt-26 text-center">
        <span className="inline-block bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm rounded-lg font-semibold">
          My Projects
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-1">I like building things</h2>
        <p className="mt-2 mb-5 text-base sm:text-lg  leading-relaxed text-gray-600 dark:text-gray-300">
I've worked on a variety of projects, from simple websites to complex web applications. Here<br/> are a few of my favorite ones
        </p>
      </div> */}
        <div className="w-full max-w-lg space-y-5">
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
                className={`flex items-center gap-4 ${theme === 'dark'
                  ? 'bg-gray-950 border-gray-700 hover:border-white'
                  : 'bg-white/80 border-gray-200 hover:border-gray-400 backdrop-blur-sm'
                  } border p-5 rounded-full transition-all duration-300 transform hover:scale-105 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } shadow-sm`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative">
                  <img
                    src={link.image}
                    alt={link.label}
                    className="w-12 h-12 rounded-full object-cover border border-gray-500"
                  />
                  {link.live !== undefined && (
                    <span
                      className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 ${theme === 'dark' ? 'border-gray-950' : 'border-white/80'} ${link.live ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      title={link.live ? 'Live' : 'Not Live'}
                    />
                  )}
                </div>

                <div className="flex-1 flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{link.label}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      {link.description}
                    </p>
                  </div>
                  {hovered && link.video && (
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

        {/* <div className="max-w-4xl mx-auto mt-26 text-center">
        <span className="inline-block bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm rounded-lg font-semibold">
          Hackathons
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mt-1">I like building things</h2>
        <p className="mt-2 text-base sm:text-lg  leading-relaxed text-gray-600 dark:text-gray-300">
          During my time in university, I attended 2+ hackathons. People from around the colleges would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.
        </p>
      </div> */}

        {/* Contact Section */}
        <div className={`w-full max-w-lg mt-14 px-6 py-8 ${theme === 'dark'
          ? 'bg-gray-950 border-gray-500 hover:shadow-white/10'
          : 'bg-white/80 border-gray-300 hover:shadow-gray-400/10 backdrop-blur-sm'
          } border-2 border-dotted rounded-3xl shadow-lg transition-shadow duration-300`}>
          <div className="flex items-center gap-3 mb-4">
            <RiMailSendLine className="text-3xl" />
            <h2 className="text-2xl font-bold">Let's Connect</h2>
          </div>

          {/* Contact Bar */}
          <hr className={`border-t ${theme === 'dark' ? 'border-white/30' : 'border-gray-300'
            } mb-4`} />

          <p className={`mb-6 text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Whether it's a collab, a question, or just a friendly hello, drop me a line. I read every message 💌
          </p>

          <a
            href="mailto:arijit123roy098@gmail.com"
            className={`block text-center w-full ${theme === 'dark'
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-gradient-to-r from-blue-500 to-amber-500 text-white hover:from-blue-600 hover:to-amber-600'
              } border border-gray-500 font-bold py-3 rounded-full hover:scale-95 transition-all duration-300 shadow-md`}
          >
            Send me an Email
          </a>
        </div>

        {/* Footer */}
        <p className={`text-md mt-3 pb-5 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
          }`}>
          Made with 💖 by arijiiiitttt
        </p>
      </div>
    </div>
  );
}
