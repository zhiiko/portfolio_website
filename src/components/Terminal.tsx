'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useTerminalState } from '@/store/terminalState'


interface TerminalProps {
  onComplete: () => void;
}

// Intro messages (without the "Type 'help'" line)
const INTRO_SEQUENCE = [
  { text: "> Initializing portfolio interface...", delay: 1000 },
  { text: "> Loading credentials...", delay: 800 },
  { text: "> Welcome to Zakaria Sisalem's portfolio", delay: 1200 },
  { text: "> Computer Science & Mathematics @ UT Austin", delay: 800 },
  { text: "> Specializing in ML/AI and Full-Stack Development", delay: 800 },
];

export const Terminal: React.FC<TerminalProps> = ({ onComplete }) => {
  // Local state for the command input.
  const [currentInput, setCurrentInput] = useState('');

  // A ref for the terminal container (for auto-scroll).
  const containerRef = useRef<HTMLDivElement>(null);

  // Retrieve persisted terminal states from our store.
  const { 
    lines,
    commandHistory,
    historyIndex,
    addLine,
    clearLines,
    addToHistory,
    setHistoryIndex,
    loading,
    loadingProgress,
    awaitingLoadResponse,
    setAwaitingLoadResponse,
    isComplete,
    setLoading,
    setLoadingProgress,
    hasCalledPrompt,
    setHasCalledPrompt,
    setComplete
  } = useTerminalState();

  // On mount, if there’s no prior text and we haven’t completed loading, show the load prompt.
  useEffect(() => {
    if (lines.length === 0 && !isComplete && !hasCalledPrompt) {
      clearLines();
      addLine("Do you want to load? (Y/n)");
      setAwaitingLoadResponse(true);
      setHasCalledPrompt(true);
    }
  }, [lines.length, isComplete, hasCalledPrompt, addLine, clearLines, setAwaitingLoadResponse, setHasCalledPrompt]);

  // Auto-scroll to the bottom whenever new lines or loading progress updates.
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, loading, loadingProgress, currentInput]);

  // Simulate the loading sequence using the store.
  const simulateLoading = async () => {
    setLoading(true);
    setLoadingProgress(0);
    clearLines(); // Clear the prompt and any previous messages.
    
    try {
      // Loop through each intro message.
      for (let i = 0; i < INTRO_SEQUENCE.length; i++) {
        const { text, delay } = INTRO_SEQUENCE[i];
        await new Promise(resolve => setTimeout(resolve, delay));
        addLine(text);
        // Update loading progress (allocate 90% for the intro messages).
        const progress = Math.round(((i + 1) / INTRO_SEQUENCE.length) * 90);
        setLoadingProgress(progress);
      }
    } catch (error) {
      addLine("Error during loading. Please try again.");
      setLoading(false);
      return;
    }
    
    // Finalize loading.
    setLoadingProgress(100);
    addLine("Load complete.");
    addLine("Type 'help' for available commands");
    setLoading(false);
    setComplete(true); // Mark that loading is complete.
    onComplete(); // Notify the parent to reveal main content.
  };

  // Handle commands entered by the user.
  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    addToHistory(cleanCmd);
    addLine(`> ${cmd}`);

    // If we're still in load mode, check for the "yes"/"y" command.
    if (awaitingLoadResponse) {
      if (cleanCmd === "yes" || cleanCmd === "y") {
        simulateLoading();
        setAwaitingLoadResponse(false);
      } else if (cleanCmd === "clear") {
        // Clear the terminal and re-add the load prompt.
        clearLines();
        addLine("Do you want to load? (Y/n)");
        setAwaitingLoadResponse(true);
      } else {
        addLine("Load cancelled. Type 'yes' to load.");
        // Remain in load mode.
        setAwaitingLoadResponse(true);
      }
      return;
    }

    // After loading is complete, process normal commands.
    const COMMANDS: Record<string, string> = {
      help: "Available commands:\n  - projects: View all projects\n  - skills: List technical skills\n  - contact: Get contact info\n  - clear: Clear terminal",
      projects: "Featured projects:\n  - Market Liquidity Analysis (ML)\n  - Custom Unix Shell (Systems)\n  - Neural Story Generator (NLP)\n\nNavigate to Projects section for more details.",
      skills: "Technical Skills:\n  Languages: Python, JavaScript, Java, C/C++\n  ML/AI: PyTorch, TensorFlow, Spark MLlib\n  Web: React, Node.js, MongoDB\n  Cloud: AWS, Docker",
      contact: "Email: sisalemzakaria@gmail.com\nLinkedIn: /in/zakaria-sisalem\n\nFeel free to reach out!",
      clear: ""
    };

    if (cleanCmd === "clear") {
      clearLines();
      return;
    }

    if (cleanCmd in COMMANDS) {
      addLine(COMMANDS[cleanCmd]);
    } else {
      addLine('Command not found. Type "help" for available commands.');
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

  // Generate a single-line loading bar.
  const generateLoadingBar = (progress: number) => {
    const totalBlocks = 10;
    const filledBlocks = Math.round((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return `[${'#'.repeat(filledBlocks)}${' '.repeat(emptyBlocks)}] ${progress}%`;
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-2xl w-full max-w-4xl h-96 overflow-auto font-mono text-sm">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-green-400" ref={containerRef}>
        {/* Loading bar stays fixed at the top */}
        {loading && (
          <div className="sticky top-0 bg-gray-900 pb-1 mb-1 whitespace-pre-wrap">
            {`Loading: ${generateLoadingBar(loadingProgress)}`}
          </div>
        )}
        {lines.map((line, i) => (
          <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
        ))}
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
      </div>
    </div>
  );
};

export default Terminal;
