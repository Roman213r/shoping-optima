import { expect, test, type Page } from "@playwright/test";

async function openReady(page: Page, path = "/") {
  await page.goto(path, { waitUntil: "domcontentloaded" });
  await expect(page.locator('header[data-store-ready="true"]')).toBeVisible();
}

test("catalog shows products and page 2", async ({ page }) => {
  await openReady(page);
  await expect(page.getByRole("heading", { name: /Розумний дім/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Купити" }).first()).toBeVisible();
  await page.getByRole("link", { name: "2", exact: true }).click();
  await expect(page).toHaveURL(/page=2/);
  await expect(page.getByText(/сторінка 2 з/)).toBeVisible();
});

test("category filter keeps a way back to full catalog", async ({ page }) => {
  await openReady(page);
  await page.getByRole("link", { name: /Живлення \(/ }).click();
  await expect(page).toHaveURL(/cat=power/);
  await expect(page.getByRole("link", { name: "Відкрити всі сторінки каталогу" })).toBeVisible();
});

test("search finds a vacuum", async ({ page }) => {
  await openReady(page, `/?q=${encodeURIComponent("пилосос")}`);
  await expect(page.getByText(/Пошук: «пилосос»/)).toBeVisible();
  await expect(page.getByRole("heading", { name: "Розумний пилосос Lynx S7" })).toBeVisible();
});

test("buy puts an item in the cart", async ({ page }) => {
  await openReady(page);
  await page.getByRole("button", { name: "Купити" }).first().click();
  await expect(page.getByRole("link", { name: "Кошик" }).getByText("1")).toBeVisible();
  await page.getByRole("link", { name: "Кошик" }).click();
  await expect(page.getByRole("heading", { name: "Кошик", exact: true })).toBeVisible();
  await expect(page.getByText("До сплати")).toBeVisible();
});

test("news list opens an article", async ({ page }) => {
  await openReady(page, "/news");
  await expect(page.getByRole("heading", { name: "Новини" })).toBeVisible();
  await page.getByRole("link", { name: /Читати/ }).first().click();
  await expect(page).toHaveURL(/\/news\/.+/);
  await expect(page.getByRole("heading").first()).toBeVisible();
});

test("register creates a session", async ({ page }) => {
  const email = `qa-${Date.now()}@example.com`;
  await openReady(page, "/login");
  await page.getByRole("button", { name: "Реєстрація" }).click();
  await expect(page.getByPlaceholder("Олена")).toBeVisible();
  await page.getByPlaceholder("Олена").fill("QA");
  await page.getByPlaceholder("you@email.com").fill(email);
  await page.getByPlaceholder("мінімум 4 символи").fill("test1234");
  await page.getByRole("button", { name: "Створити акаунт" }).click();
  await expect(page.getByRole("button", { name: /QA · вийти/ })).toBeVisible();
});
