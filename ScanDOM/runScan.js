import * as dotenv from "dotenv";
import { scanSite } from "./scanner.js";

dotenv.config();

const siteA = process.env.SITE_A_URL;
const siteB = process.env.SITE_B_URL;

if (!siteA || !siteB) {
  console.error("❌ Please set SITE_A_URL and SITE_B_URL in your .env file");
  process.exit(1);
}

(async () => {
  console.log("🔹 Starting baseline & variant scanning...");

  await scanSite(siteA, "./comparisons/siteA");
  await scanSite(siteB, "./comparisons/siteB");

  console.log("✨ Completed scanning both sites.");
})();
