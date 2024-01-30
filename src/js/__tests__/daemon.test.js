import Character from '../daemon';

test('Персонаж Демон успешно создан!', () => {
  const character = new Character('Noah', 'Daemon');
  const result = {
    name: 'Noah',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
