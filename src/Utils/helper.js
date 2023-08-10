export function timeAgo(publishedDate) {
    const currentDate = new Date();
    const timeElapsed = currentDate - new Date(publishedDate);

    const seconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years >= 1) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
    } else if (months >= 1) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (weeks >= 1) {
        return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    } else if (days >= 1) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours >= 1) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes >= 1) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
        return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    }
}

// Example published date: "2023-01-15T12:30:00Z"
// const publishedDate = "2023-01-15T12:30:00Z";
// const timeAgoString = timeAgo(publishedDate);
// console.log("Time ago:", timeAgoString);
