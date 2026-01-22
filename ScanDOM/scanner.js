import fs from "fs";
import path from "path";
import { chromium } from "playwright";

export async function scanSite(url, outputBasePath) {
  console.log(`🔍 Scanning: ${url}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const data = {
    scannedAt: new Date().toISOString(),
    inputUrl: url,
    finalUrl: page.url(),
    title: await page.title(),

    html: await page.content(),

    visibleText: await page.locator("body").innerText(),

    buttons: await page.locator("button").allTextContents(),

    inputs: await page.locator("input").evaluateAll(nodes =>
      nodes.map(n => ({
        id: n.id,
        name: n.name,
        type: n.type,
        placeholder: n.placeholder
      }))
    ),

    links: await page.locator("a").evaluateAll(nodes =>
      nodes.map(n => ({
        href: n.href,
        text: n.innerText
      }))
    ),
  };

  const folder = path.dirname(outputBasePath);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

  fs.writeFileSync(`${outputBasePath}.json`, JSON.stringify(data, null, 2));

  await page.screenshot({
    path: `${outputBasePath}.png`,
    fullPage: true,
  });

  console.log(`📄 Saved JSON → ${outputBasePath}.json`);
  console.log(`📸 Saved Screenshot → ${outputBasePath}.png`);

  await browser.close();
}
