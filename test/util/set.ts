
function expectUniqueness<T>(list: T[]) {
    let seenValues = new Set<T>();
    list.forEach((item: T) => {
        expect(seenValues.has(item)).toBeFalsy('Duplicate entry found for ' + item.toString());
        seenValues.add(item);
    });
}

export { expectUniqueness }
