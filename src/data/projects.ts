// src/data/projects.ts

export interface Project {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    description: string;
    challenge: string;
    solution: string;
    impact: string;
    technologies: string[];
    architecture: string;
    implementation: string[];
  }
  
  export const projects: Record<string, Project> = {
    'market-liquidity': {
      id: 'market-liquidity',
      title: 'Market Liquidity Analysis',
      category: 'Machine Learning',
      shortDescription: 'Implemented liquidity-gap detection using Spark\'s MLlib across FX pairs and commodities.',
      description: 'Developed a sophisticated market liquidity analysis system utilizing distributed computing and machine learning to optimize trading operations. This research project focused on improving trading efficiency during off-peak hours through advanced data analysis and predictive modeling.',
      challenge: 'Traditional methods struggled to accurately predict and respond to liquidity gaps in off-peak trading hours, leading to suboptimal execution prices and increased trading costs. The system needed to process massive amounts of market data in real-time while maintaining low latency.',
      solution: 'Engineered a distributed ML pipeline using Spark MLlib that processes real-time market data to identify potential liquidity gaps and optimize trade execution timing. Implemented intelligent order splitting algorithms and developed custom metrics for liquidity assessment.',
      impact: '15% improvement in fill rates during off-peak trading hours and 25% reduction in market impact for large block trades. The system successfully processes over 1 million market events per second with sub-millisecond latency.',
      technologies: ['Apache Spark', 'Python', 'TensorFlow', 'pandas', 'MLlib', 'SQL', 'Docker'],
      architecture: 'Distributed processing pipeline with real-time data ingestion and ML-based analysis',
      implementation: [
        'Developed data ingestion layer using Kafka for real-time market data processing',
        'Implemented Spark Streaming for continuous data processing and analysis',
        'Created custom ML models for liquidity prediction using historical and real-time data',
        'Built automated trading signal generation system based on liquidity predictions',
        'Implemented comprehensive monitoring and alerting system'
      ]
    },
    'unix-shell': {
      id: 'unix-shell',
      title: 'Custom Unix-like Shell',
      category: 'Systems Programming',
      shortDescription: 'Developed a Unix-like shell implementing system-level commands and process management.',
      description: 'Built a complete Unix-like shell environment with support for process management, virtual memory, and file system operations. The project demonstrates deep understanding of operating system principles and low-level system programming.',
      challenge: 'Creating a reliable and efficient shell that could handle complex system operations while maintaining proper synchronization and memory management. The system needed to support multiple concurrent processes and handle resource allocation efficiently.',
      solution: 'Implemented a robust shell system using C and Assembly, featuring comprehensive process management and virtual memory systems. Developed custom synchronization primitives and memory management algorithms.',
      impact: 'Successfully implemented all core Unix shell functionalities with proper concurrency handling and memory management. The shell can handle multiple concurrent processes with minimal overhead.',
      technologies: ['C', 'Assembly', 'Linux', 'GCC', 'GDB', 'Make', 'BOCHS'],
      architecture: 'Modular shell system with separate components for process management, memory handling, and file operations',
      implementation: [
        'Implemented process creation and management using fork() and exec()',
        'Developed thread scheduling system with support for multitasking',
        'Created virtual memory management system with demand paging',
        'Built file system support with directory structures',
        'Implemented synchronization primitives for concurrent operations'
      ]
    },
    'story-generator': {
      id: 'story-generator',
      title: 'Neural Story Generator',
      category: 'Machine Learning',
      shortDescription: 'Built story generation systems using FlanT5-large transformer models.',
      description: 'Developed an advanced neural story generation system using state-of-the-art transformer models and natural language processing techniques. The system can generate coherent, engaging stories while maintaining narrative consistency.',
      challenge: 'Generating coherent and engaging stories while maintaining narrative consistency and logical flow throughout the text. Ensuring the generated content remains contextually relevant and maintains character consistency.',
      solution: 'Leveraged FlanT5-large transformer models with custom prompt engineering and coherence checking mechanisms. Implemented specialized attention mechanisms and control tokens for better narrative control.',
      impact: 'Achieved 85% human evaluation scores for story coherence and engagement. The system can generate diverse stories while maintaining consistent character development and plot progression.',
      technologies: ['PyTorch', 'Hugging Face', 'BERT', 'TensorFlow', 'Python', 'Docker'],
      architecture: 'Multi-stage pipeline for story generation and validation',
      implementation: [
        'Implemented custom fine-tuning pipeline for FlanT5-large model',
        'Developed prompt engineering system for coherent story generation',
        'Created semantic consistency checking module',
        'Built story evaluation pipeline using BERT-based metrics',
        'Implemented interactive story modification interface'
      ]
    },
    'halal-food-app': {
      id: 'halal-food-app',
      title: 'Halal Food Mobile App',
      category: 'Full-Stack Development',
      shortDescription: 'Led development of a full-stack mobile application for Halal food discovery.',
      description: 'Created a comprehensive mobile application for discovering and reviewing Halal food options, featuring real-time updates and social features. The app helps users find, review, and share Halal food options in their area.',
      challenge: 'Building a scalable platform that could handle real-time updates while maintaining data consistency and fast response times. Ensuring reliable handling of user-generated content and implementing efficient search functionality.',
      solution: 'Implemented a modern tech stack with MongoDB, Node.js, and React Native, utilizing AWS services for scalability. Created a sophisticated caching layer and implemented efficient data indexing strategies.',
      impact: 'Successfully launched with 1000+ initial users and 50+ registered restaurants. Achieved sub-second response times for all major operations.',
      technologies: ['MongoDB', 'Express', 'React Native', 'Node.js', 'AWS S3', 'AWS EC2', 'Redis'],
      architecture: 'Microservices architecture with separate services for authentication, data management, and file handling',
      implementation: [
        'Developed RESTful API using Node.js and Express',
        'Implemented real-time updates using WebSocket connections',
        'Created responsive UI components with React Native',
        'Built secure authentication system with JWT',
        'Integrated AWS S3 for image storage and CDN delivery'
      ]
    }
  };