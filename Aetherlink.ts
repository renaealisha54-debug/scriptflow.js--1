export const aetherLink = {
  // Adds a hidden tier tag to the top of the code
  wrap: (code: string, tier: string) => {
    return `/** !AETHER_LINK tier:${tier} **/\n${code}`;
  },
  
  // Helper to identify which app created the file later
  parseTier: (content: string) => {
    const match = content.match(/!AETHER_LINK tier:(\w+)/);
    return match ? match : 'UNKNOWN';
  }
};
