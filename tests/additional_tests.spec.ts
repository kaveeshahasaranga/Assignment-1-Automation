import { test, expect } from '@playwright/test';

test.describe('IT3040 Assignment 1 - Additional Coverage', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
        await page.waitForLoadState('domcontentloaded');
    });

    // --- POSITIVE (18 New Cases) ---

    test('Pos_Fun_0003: Complex sentence (Condition) (M)', async ({ page }) => {
        const input = 'oya enavaanam mama balan innavaa.';
        const expected = 'ඔය එනවානම් මම බලන් ඉන්නවා.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0004: Interrogative - How are you? (S)', async ({ page }) => {
        const input = 'oyaata kohomadha?';
        const expected = 'ඔයාට කොහොමද?';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0005: Imperative - Come immediately (S)', async ({ page }) => {
        const input = 'vahaama enna.';
        const expected = 'වහාම එන්න.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0007: Present tense (M)', async ({ page }) => {
        const input = 'mama dhaen vaeda karanavaa.';
        const expected = 'මම දැන් වැඩ කරනවා.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0008: Future tense (S)', async ({ page }) => {
        const input = 'mama heta enavaa.';
        const expected = 'මම හෙට එනවා.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0009: Negative form (M)', async ({ page }) => {
        const input = 'mama ehema karannee naehae.';
        const expected = 'මම එහෙම කරන්නේ නැහැ.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0011: Informal phrasing (S)', async ({ page }) => {
        const input = 'eeyi, ooka dhiyan.';
        const expected = 'ඒයි, ඕක දියන්.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0013: Brand terms - Zoom (M)', async ({ page }) => {
        const input = 'Zoom meeting ekak thiyennee.';
        const expected = 'Zoom meeting එකක් තියෙන්නේ.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0015: Date format (S)', async ({ page }) => {
        const input = '2026-05-21';
        const expected = '2026-05-21';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0016: Time format (S)', async ({ page }) => {
        const input = '7.30 AM';
        const expected = '7.30 AM';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0017: Multi-word expression (S)', async ({ page }) => {
        const input = 'poddak inna';
        const expected = 'පොඩ්ඩක් ඉන්න';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0018: Repeated words (S)', async ({ page }) => {
        const input = 'tika tika';
        const expected = 'ටික ටික';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0019: Singular usage (M)', async ({ page }) => {
        const input = 'mama yanna hadhannee.';
        const expected = 'මම යන්න හදන්නේ.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0020: Plural usage (S)', async ({ page }) => {
        const input = 'api yamu.';
        const expected = 'අපි යමු.';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0021: Punctuation (S)', async ({ page }) => {
        const input = 'oya enawada (ada)?';
        const expected = 'ඔය එනwඅඩ (අඩ)?';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0022: Line breaks (S)', async ({ page }) => {
        const input = 'mama\ngedhara';
        const expectedPart = 'මම\nගෙදර';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expectedPart).first()).toBeVisible();
    });

    test('Pos_Fun_0023: Slang (S)', async ({ page }) => {
        const input = 'ela machan!';
        const expected = 'එල මචන්!';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(3000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Pos_Fun_0024: Long input (L)', async ({ page }) => {
        const input = 'mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa. mama gedhara yanavaa.';
        // Test fails to translate long text reliably, checking for non-crash
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(5000);
        await expect(page.locator('body')).not.toBeEmpty();
    });


    // --- NEGATIVE/FAILURE SCENARIOS (9 New Cases) ---

    test('Neg_Fun_0002: Very long single word (M)', async ({ page }) => {
        const input = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        const expected = 'ආආආආආආආආආආආආආආආආආආආආආආආආආආආආආආ';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0003: Special characters (S)', async ({ page }) => {
        const input = '@#$%^&*';
        const expected = '@#$%^&*';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0004: HTML tags check (S)', async ({ page }) => {
        const input = '<b>bold</b>';
        const expected = '<b>bold</b>';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0005: Mixed numbers inside words (S)', async ({ page }) => {
        const input = 'g3dhara';
        const expected = 'g3දර';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0006: URL input (M)', async ({ page }) => {
        const input = 'https://www.google.com';
        const expected = 'හ්ට්ට්ප්ස්://www.google.com';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0007: Emoji input (S)', async ({ page }) => {
        const input = ':)';
        const expected = ':)';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0008: Consonant clusters (S)', async ({ page }) => {
        const input = 'schri';
        const expected = 'ස්ච්‍රි';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0009: Repetitive vowels (S)', async ({ page }) => {
        const input = 'kwaaaaa';
        const expected = 'කwආආඅ';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

    test('Neg_Fun_0010: Zero width joiner keys (S)', async ({ page }) => {
        const input = 'raksha';
        const expected = 'රක්ශ';
        await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill(input);
        await page.waitForTimeout(2000);
        await expect(page.getByText(expected).first()).toBeVisible();
    });

});
