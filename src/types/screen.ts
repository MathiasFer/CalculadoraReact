export const SCREENS = {
    HOME: "home",
    SIMPLE: "simple-calculator",
    CALCULATOR: "calculator",
    ANIME: "anime",
    DETAIL: "detail",
  } as const;
  
  export type Screen = (typeof SCREENS)[keyof typeof SCREENS];