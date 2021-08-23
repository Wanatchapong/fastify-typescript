module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        filename: 'test-report.html',
      },
    ],
  ],
}
