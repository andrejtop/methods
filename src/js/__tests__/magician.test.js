import Character from '../magician';

test('Персонаж Волшебник успешно создан!', () => {
  const character = new Character('Noah', 'Magician');
  const result = {
    name: 'Noah',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
