describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should add todo after create list', async () => {
    await element(by.id('text-input')).typeText('new detox list 2');
    await element(by.id('add-list-btn')).tap();
    await element(by.text('new detox list 2')).tap();
    await element(by.id('text-input')).typeText('Task 1');
    await element(by.id('add-todo-btn')).tap();
    await expect(element(by.text('Task 1'))).toBeVisible();
  });

  it('should delete the todo ', async () => {
    const todo = 'task-2';
    await element(by.id('text-input')).typeText(todo);
    await element(by.id('add-todo-btn')).tap();
    await element(by.id('delete-btn-' + todo)).tap();
    await expect(element(by.text(todo))).not.toBeVisible();
  });
});
