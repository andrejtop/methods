import Character from '../bowman';

test('Персонаж Лучник успешно создан!', () => {
  const character = new Character('Noah', 'Bowman');
  const result = {
    name: 'Noah',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toMatchObject(result);
});
