// Correcting the environment configuration for dynamic URLs

// interface Environment {
//     API_URL: string;
//     IMG_URL: string;
//     WWW_URL: string;
//   }
  
//   const defaultEnv: Environment = {
//     API_URL: 'https://wealth-frapi.mojoinfinity.com',
//     IMG_URL: 'https://wealth-st.mojoinfinity.com/images/',
//     WWW_URL: 'https://wealth-www.mojoinfinity.com/css',
//   };
  
//   const environmentConfigs: Record<string, Partial<Environment>> = {
//     'prepodwealth-www.mojoinfinity.com': {
//       API_URL: 'https://prepodwealth-frapi.mojoinfinity.com/',
//       IMG_URL: 'https://prepodwealth-st.mojoinfinity.com/images/',
//       WWW_URL: 'https://prepodwealth-www.mojoinfinity.com/',
//     },
//     'sandboxwealth-www.mojoinfinity.com': {
//       API_URL: 'https://sandboxwealth-frapi.mojoinfinity.com/',
//       IMG_URL: 'https://sandboxwealth-st.mojoinfinity.com/images/',
//       WWW_URL: 'https://sandboxwealth-www.mojoinfinity.com/',
//     },
//     'localhost:3000': {
//       API_URL: 'https://sandboxwealth-frapi.mojoinfinity.com/',
//       IMG_URL: 'https://sandboxwealth-st.mojoinfinity.com/images/',
//       WWW_URL: 'https://sandboxwealth-www.mojoinfinity.com/',
//     },
//   };
  
//   export const getEnvironmentUrls = (): Environment => {
//     const host = typeof window !== 'undefined' 
//       ? window.location.host 
//       : process.env.NEXT_PUBLIC_VERCEL_URL || ''; // On server-side, fallback to Vercel URL
    
//     return {
//       ...defaultEnv,
//       ...(environmentConfigs[host] || {}), // Merge default with environment-specific config
//     };
//   };
  
//   export const environment = getEnvironmentUrls();
// interface Environment {
//     API_URL: string;
//     IMG_URL: string;
//     WWW_URL: string;
//   }
  
//   const getEnvironmentUrls = (): Environment => {
//     // Use environment variables as defaults
//     const env: Environment = {
//       API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://wealth-frapi.mojoinfinity.com',
//       IMG_URL: process.env.NEXT_PUBLIC_IMG_URL || 'https://wealth-st.mojoinfinity.com/images/',
//       WWW_URL: process.env.NEXT_PUBLIC_WWW_URL || 'https://wealth-www.mojoinfinity.com/css',
//     };
  
//     if (typeof window !== 'undefined') {
//         switch (window.location.host) {
//             case 'prepodwealth-www.mojoinfinity.com':
//               return {
//                 API_URL: 'https://prepodwealth-frapi.mojoinfinity.com/',
//                 IMG_URL: 'https://prepodwealth-st.mojoinfinity.com/images/',
//                 WWW_URL: 'https://prepodwealth-www.mojoinfinity.com/',
//               };
//             case 'sandboxwealth-www.mojoinfinity.com':
//             case 'localhost:3000': // Default Next.js port
//               return {
//                 API_URL: 'https://sandboxwealth-frapi.mojoinfinity.com/',
//                 IMG_URL: 'https://sandboxwealth-st.mojoinfinity.com/images/',
//                 WWW_URL: 'https://sandboxwealth-www.mojoinfinity.com/',
//               };
//             }
//     }
  
//     return env;
//   };
  
//   export const environment = getEnvironmentUrls();

interface Environment {
    API_URL: string;
    IMG_URL: string;
    WWW_URL: string;
  }
  
  export const environment: Environment = {
    API_URL: process.env.NEXT_PUBLIC_API_URL!,
    IMG_URL: process.env.NEXT_PUBLIC_IMG_URL!,
    WWW_URL: process.env.NEXT_PUBLIC_WWW_URL!,
  };