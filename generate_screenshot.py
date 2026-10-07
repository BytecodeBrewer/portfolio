import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto("http://localhost:3000", wait_until="networkidle")
        await page.evaluate("window.scrollTo(0, 1000)")
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification_scrolled.png")
        await browser.close()

asyncio.run(run())
