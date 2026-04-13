Scriptflow: The Logic Runner ⚡
​Scriptflow is the "Tier 2" environment built for "logic-only" developers. It removes the overhead of visual rendering to provide a high-performance workspace for building algorithms, automation scripts, and backend logic.
​📁 Core File Roles
​FloatingTerminal.tsx: A draggable console using PersistentResponder to track and save its X/Y coordinates via AsyncStorage.
​ScriptRunner.ts: The execution engine that hijacks console.log and provides millisecond-accurate benchmarking.
​StorageService.ts: Specialized helpers for mock-database operations and snippet persistence.
​JSONInspector.tsx: A specialized UI component for exploring complex object data returned by scripts.
​🚀 Technical Profile
​Target: Backend developers, algorithm students, and automation enthusiasts.
​Key Feature: Headless execution with real-time performance profiling.
​Persistence: Heavy reliance on AsyncStorage for environment state.
