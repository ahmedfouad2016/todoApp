describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have todo Lists Screen', async () => {
    await expect(element(by.text('Todo Lists'))).toBeVisible();
  });

  it('should show add to do list', async () => {
    await element(by.id('text-input')).typeText('detox list');
    await element(by.id('add-list-btn')).tap();
    await expect(element(by.text('detox list'))).toBeVisible();
  });

  it('should display todo screen after add to do list and tap on it', async () => {
    await element(by.id('text-input')).typeText('new detox list');
    await element(by.id('add-list-btn')).tap();
    await element(by.text('new detox list')).tap();
    await expect(element(by.text('new detox list'))).toBeVisible();
  });
});
