import Character from '../zombie';

test('Персонаж Зомби успешно создан!', () => {
  const character = new Character('Noah', 'Zombie');
  const result = {
    name: 'Noah',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
