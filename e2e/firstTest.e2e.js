describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('SideMenu'))).toBeVisible();
  });

  it('should have "See Your Changes" section', async () => {
    await expect(element(by.text('BottomTab'))).toBeVisible();
  });
});