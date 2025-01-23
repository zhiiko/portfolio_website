'use client'

import { useState, useEffect, useRef } from 'react'

interface TerminalProps {
  onComplete: () => void;
}

const INTRO_SEQUENCE = [
  { text: "> Initializing portfolio interface...", delay: 1000 },
  { text: "> Loading credentials...", delay: 800 },
  { text: "> Welcome to Zakaria Sisalem's portfolio", delay: 1200 },
  { text: "> Computer Science & Mathematics @ UT Austin", delay: 800 },
  { text: "> Specializing in ML/AI and Full-Stack Development", delay: 800 },
  { text: "> Type 'help' for available commands", delay: 1000 },
];

const COMMANDS: Record<string, string> = {
    help: "Available commands:\n  - projects: View all projects\n  - skills: List technical skills\n  - contact: Get contact info\n  - clear: Clear terminal",
    projects: "Featured projects:\n  - Market Liquidity Analysis (ML)\n  - Custom Unix Shell (Systems)\n  - Neural Story Generator (NLP)\n\nNavigate to Projects section for more details.",
    skills: "Technical Skills:\n  Languages: Python, JavaScript, Java, C/C++\n  ML/AI: PyTorch, TensorFlow, Spark MLlib\n  Web: React, Node.js, MongoDB\n  Cloud: AWS, Docker",
    contact: "Email: sisalemzakaria@gmail.com\nLinkedIn: /in/zakaria-sisalem\n\nFeel free to reach out!",
    clear: ""  // Changed from null to empty string
  } as const;

  export const Terminal: React.FC<TerminalProps> = ({ onComplete }) => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState('');
    const [introComplete, setIntroComplete] = useState(false);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const introRef = useRef(false);
  
    const typewriter = async (text: string, delay: number) => {
      return new Promise(resolve => {
        setTimeout(() => {
          setLines(prev => [...prev, text]);
          resolve(null);
        }, delay);
      });
    };
  
    useEffect(() => {
      const runIntro = async () => {
        if (introRef.current) return; // Skip if already run
        introRef.current = true;
        
        for (const line of INTRO_SEQUENCE) {
          await typewriter(line.text, line.delay);
        }
        setIntroComplete(true);
        onComplete();
      };
      runIntro();
    }, [onComplete]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    setCommandHistory(prev => [...prev, cleanCmd]);
    setHistoryIndex(-1);
    
    setLines(prev => [...prev, `> ${cmd}`]);
    
    if (cleanCmd in COMMANDS) {
      if (cleanCmd === 'clear') {
        setLines([]);
      } else {
        setLines(prev => [...prev, COMMANDS[cleanCmd]]);
      }
    } else {
      setLines(prev => [...prev, 'Command not found. Type "help" for available commands.']);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-2xl w-full max-w-4xl h-96 overflow-auto font-mono text-sm">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-green-400">
        {lines.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
        ))}
        {introComplete && (
          <div className="flex">
            <span className="text-green-400">{'> '}</span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-transparent outline-none text-green-400 ml-1"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;