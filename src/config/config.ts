const isDev = process.env.NODE_ENV === "development";

const APP_SECRET = "SomeSecretHere";

const CLIENT_URL = isDev ? "http://localhost:3000" : `https://${process.env.VERCEL_URL}`;

const DOMAIN = "";

/**
 * Global App Config
 */
export const appConfig = {
  DOMAIN,
  APP_SECRET,
  CLIENT_URL,
};

/**
 * Site Config
 */
export const siteConfig = {
  name: "hydego-starter",
  title: "Hydego Starter",
  description: "",
  creator: "",
  url: isDev ? "http://localhost:3000" : `https://${appConfig.DOMAIN}`,
};
