import { DEFAULT_GLOBALS } from '../constants/Globals';

export const runLogic = (code: string, setLogs: (logs: string[]) => void) => {
  const output: string[] = [];

  const customConsole = {
    log: (...args: any[]) => output.push(args.map(a => String(a)).join(' ')),
    error: (msg: string) => output.push(`❌ ERROR: ${msg}`),
  };

  try {
    // We "inject" DEFAULT_GLOBALS here
    // The user can now type `console.log(SAMPLE_USER.name)` in the app
    const keys = Object.keys(DEFAULT_GLOBALS);
    const values = Object.values(DEFAULT_GLOBALS);
    
    const execute = new Function('console', ...keys, code);
    
    const startTime = Date.now();
    execute(customConsole, ...values); 
    const duration = Date.now() - startTime;

    setLogs([...output, `\n✨ Done in ${duration}ms`]);
  } catch (err: any) {
    setLogs([...output, `SYSTEM ERROR: ${err.message}`]);
  }
};
