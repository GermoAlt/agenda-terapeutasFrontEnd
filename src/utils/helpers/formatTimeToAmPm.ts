export function formatTimeToAmPm(time: string) {
  const [hours, minutes, seconds] = time.split(":");
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes), parseInt(seconds || "0"));
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
