const getEnvironmentConfig = () => {
    const isBrowser = typeof window !== "undefined"; // Check if code is running in the browser

    if (!isBrowser) {
        // Default configuration for server-side rendering
        return {
            API_URL: process.env.NEXT_PUBLIC_SANDBOX_API_URL,
            IMG_URL: process.env.NEXT_PUBLIC_SANDBOX_IMG_URL,
            WWW_URL: process.env.NEXT_PUBLIC_SANDBOX_WWW_URL,
        };
    }

    
    const host = window.location.host;

    console.log("Detected Host:", host); // Debugging: Check the host in the browser

    switch (host) {
        case "prepodwealth-www.mojoinfinity.com":
            return {
                API_URL: process.env.NEXT_PUBLIC_PREPOD_API_URL,
                IMG_URL: process.env.NEXT_PUBLIC_PREPOD_IMG_URL,
                WWW_URL: process.env.NEXT_PUBLIC_PREPOD_WWW_URL,
            };
        case "sandboxwealth-www.mojoinfinity.com":
        case "localhost:3000": // Added for Next.js default port
            return {
                API_URL: process.env.NEXT_PUBLIC_SANDBOX_API_URL,
                IMG_URL: process.env.NEXT_PUBLIC_SANDBOX_IMG_URL,
                WWW_URL: process.env.NEXT_PUBLIC_SANDBOX_WWW_URL,
            };
        default:
            return {
                API_URL: process.env.NEXT_PUBLIC_API_URL,
                IMG_URL: process.env.NEXT_PUBLIC_IMG_URL,
                WWW_URL: process.env.NEXT_PUBLIC_WWW_URL,
            };
    }
};

const environment = getEnvironmentConfig();

export default environment;
