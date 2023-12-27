const isDev = process.env.NODE_ENV === "development";

const APP_SECRET = "SomeSecretHere";

const DOMAIN = "";

/**
 * Global App Config
 */
export const appConfig = {
  DOMAIN,
  APP_SECRET,
};

/**
 * Site Config
 */
export const siteConfig = {
  name: "hydego-starter",
  title: "Hydego Starter",
  description: "",
  creator: "",
  url: isDev ? "http://localhost:3771" : `https://${appConfig.DOMAIN}`,
};
