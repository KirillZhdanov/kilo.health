export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secondsValue = seconds - minutes * 60;
  if (minutes > 0) {
    return `${minutes} min ${secondsValue} sec`;
  }
  return `${seconds} sec`;
};
