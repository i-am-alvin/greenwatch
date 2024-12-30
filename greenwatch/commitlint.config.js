module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修復錯誤
        'docs',     // 文檔更改
        'style',    // 不影響代碼含義的更改（空格、格式化等）
        'refactor', // 既不修復錯誤也不添加功能的代碼更改
        'perf',     // 改進性能的代碼更改
        'test',     // 添加或修正測試
        'chore',    // 對構建過程或輔助工具和庫的更改
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
  },
}; 