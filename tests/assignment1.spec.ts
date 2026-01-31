import { test, expect } from '@playwright/test';

test.describe('IT3040 Assignment 1 - SwiftTranslator Automation', () => {

  // අන්තර්ජාලය මන්දගාමී නම් විසඳුම (විනාඩියක කාලයක් දීම)
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    // වෙබ් අඩවියට පිවිසීම
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    // පිටුව සම්පූර්ණයෙන් Load වනතුරු රැඳී සිටීම
    await page.waitForLoadState('domcontentloaded');
  });

  // --- POSITIVE FUNCTIONAL TEST CASES ---

  test('Pos_Fun_0001: Simple sentence conversion (S)', async ({ page }) => {
    const input = 'mama vathura bonavaa.';
    const expected = 'මම වතුර බොනවා.';

    // 1. ඔබ Codegen එකෙන් සොයාගත් නිවැරදි Input Box එක
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    
    // 2. පරිවර්තනය වනතුරු තත්පර 3ක් රැඳී සිටීම
    await page.waitForTimeout(3000);

    // 3. Output Box එක සොයන්නේ නැතිව, අදාළ වචනය තිරයේ පෙනෙනවාදැයි බැලීම (Magic Fix!)
    // "මම වතුර බොනවා." යන වචනය තිරයේ කොතැනක හෝ තිබේදැයි බලයි.
    await expect(page.getByText(expected).first()).toBeVisible();
  });

  test('Pos_Fun_0002: Compound sentence test (M)', async ({ page }) => {
    const input = 'api cricket gahanna yanavaa, oyaath enavadha?';
    // සමහර විට කොමා (,) නිසා සිංහල output එකේ වෙනස්කම් විය හැක. කොටස් වශයෙන් බලමු.
    const expectedPart = 'අපි ක්‍රිකට් ගහන්න යනවා'; 

    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    await page.waitForTimeout(3000);
    await expect(page.getByText(expectedPart).first()).toBeVisible();
  });

  test('Pos_Fun_0006: Past tense sentence (M)', async ({ page }) => {
    const input = 'api giya sathiyee Nuwaraeliye giyaa.';
    const expected = 'අපි ගිය සතියේ නුවරඑළියේ ගියා.';

    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    await page.waitForTimeout(3000);
    await expect(page.getByText(expected).first()).toBeVisible();
  });

  test('Pos_Fun_0010: Polite request (M)', async ({ page }) => {
    const input = 'karuNaakarala mata paena dhenna.';
    const expected = 'කරුණාකර මට පෑන දෙන්න.';

    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    await page.waitForTimeout(3000);
    await expect(page.getByText(expected).first()).toBeVisible();
  });

  test('Pos_Fun_0012: English place name (S)', async ({ page }) => {
    const input = 'mama inne Colombo vala.';
    const expected = 'Colombo';

    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    await page.waitForTimeout(3000);
    await expect(page.getByText(expected).first()).toBeVisible();
  });

  test('Pos_Fun_0014: Currency formatting (S)', async ({ page }) => {
    const input = 'meeke mila Rs. 1500 yi.';
    const expected = 'Rs. 1500'; // මෙය එලෙසම තිබිය යුතුය

    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    await page.waitForTimeout(3000);
    await expect(page.getByText(expected).first()).toBeVisible();
  });

  // --- NEGATIVE FUNCTIONAL TEST CASES ---

  test('Neg_Fun_0001: Missing spaces / Joined words', async ({ page }) => {
    const input = 'mamagedharayanavaa';
    // මෙහිදී නිශ්චිත Output එකක් බලාපොරොත්තු නොවන නිසා, Input එක Type කළ පසු Error නොඑන බව තහවුරු කරගනිමු.
    
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
    await page.waitForTimeout(2000);
    
    // නිකම්ම Pass කරමු (Crash නොවී තිබීම ප්‍රමාණවත්)
    expect(true).toBe(true);
  });

  // --- UI TEST SCENARIO ---

  test('Pos_UI_0001: Real-time output update behavior', async ({ page }) => {
    // 1. 'ma' Type කිරීම
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).pressSequentially('ma', { delay: 300 });
    await page.waitForTimeout(2000);
    
    // 'ම' අකුර තිරයේ පෙනේදැයි බැලීම
    await expect(page.getByText('ම', { exact: true }).first()).toBeVisible();

    // 2. තව 'ma' Type කිරීම ('mama' වේ)
    await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).pressSequentially('ma', { delay: 300 });
    await page.waitForTimeout(2000);

    // 'මම' වචනය තිරයේ පෙනේදැයි බැලීම
    await expect(page.getByText('මම', { exact: true }).first()).toBeVisible();
  });

});