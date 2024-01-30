import Character from '../swordsman';

test('Персонаж Мечник успешно создан!', () => {
  const character = new Character('Noah', 'Swordsman');
  const result = {
    name: 'Noah',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
