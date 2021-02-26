const { formatVolumeIconPath } = require("../assets/scripts/main")

test('volume above 66',() => {
    expect(formatVolumeIconPath(68)).toContain('level-3');
});

test('volume above 33',() => {
    expect(formatVolumeIconPath(40)).toContain('level-2');
});

test('volume above 0',() => {
    expect(formatVolumeIconPath(10)).toContain('level-1');
});

test('volume equal zero',() => {
    expect(formatVolumeIconPath(0)).toContain('level-0');
});