import Character from '../character';

test('Создаем имя меньше двух символов', () => {
  expect(() => new Character('К', 'Bowman')).toThrowError(new Error('Имя должно содержать не менее 2 и не более 10 символов'));
});

test('Создаем имя больше 10 символов', () => {
  expect(() => new Character('фвафвацу232к3ацвавапв', 'Bowman')).toThrowError(new Error('Имя должно содержать не менее 2 и не более 10 символов'));
});

test('Ошибка создания класса', () => {
  expect(() => new Character('Noah', 'Muggle')).toThrowError(new Error('Такой класс отсутствует!!!'));
});

test('Создаем имя персонажа', () => {
  const character = new Character('Noah', 'Magician');
  expect(character.name).toBe('Noah');
});

test('Создаем класс персонажа', () => {
  const character = new Character('Noah', 'Magician');
  expect(character.type).toBe('Magician');
});

test('Создаем нового персонажа', () => {
  const character = new Character('Noah', 'Magician');
  const result = {
    name: 'Noah',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});
