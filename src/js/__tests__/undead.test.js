import Character from '../undead';

test('Персонаж Нежить успешно создан!', () => {
  const character = new Character('Noah', 'Undead');
  const result = {
    name: 'Noah',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
