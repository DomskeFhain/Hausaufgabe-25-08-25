const {mwst, brutto} = require('./mwst-rechner.js');     // importiere die Funktionen aus mwst-rechner.js

test('Mehrwertsteuer berechnen', () => {
    expect(mwst(100)).toBe(19);
});

test('Bruttobetrag berechnen', () => {
    expect(brutto(100)).toBe(119);
});

test('Mehrwertsteuer und Bruttobetrag berechnen', () => {
    expect(mwst(100)).toBe(19);
    expect(brutto(100)).toBe(119);
});

