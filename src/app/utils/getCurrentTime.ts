export function getCurrentTime(): string {
  const currentTime = new Date();

  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  return formattedTime;
}
