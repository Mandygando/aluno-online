const Nota = require('./models/nota')
const nota = new Nota();

describe('TESTE', () => {
  test('Teste Superior', () => {
    expect(nota.mediaCA(9.0)).toBe('SS')
  })
  test('Médio Superior', () => {
    expect(nota.mediaCA(7.0)).toBe('MS')
  })
  test('Médio', () => {
    expect(nota.mediaCA(6.0)).toBe('MM')
  })
  test('Médio Inferior', () => {
    expect(nota.mediaCA(4.0)).toBe('MI')
  })
  test('Inferior', () => {
    expect(nota.mediaCA(0.5)).toBe('II')
  })
  test('Sem rendimento', () => {
    expect(nota.mediaCA(0.0)).toBe('SR')
  })
})