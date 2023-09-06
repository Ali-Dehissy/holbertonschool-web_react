// getFullYear fucntion that will return the current year
export const getFullYear = () => new Date().getFullYear();

// getFooterCopy function  that accepts one argument isIndex(boolean). 
export const getFooterCopy = (isIndex) =>
  isIndex ? 'Holberton School' : 'Holberton School Main Dashboard';

// getLatestNotification function that accepts one argument isIndex(boolean). 
export const getLatestNotification = () => 
  '<strong>Urgent requirement</strong> - complete by EOD';
