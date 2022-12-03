export const hasSort = (route) => !route.includes("all-time-top");

export const hasReleaseYear = (route) => route.includes("genres") || route.includes("platforms");

export const hasCalendar = (route) => route.includes("video-game-releases");
