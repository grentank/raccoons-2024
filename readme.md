1. Проверьте, что Node установлена через NVM
2. Если есть файл `package.json`, то нужно выполнить `npm i`
3. Если нет файла `package.json`, то нужно выполнить инициализацию (например,
   `npm init @elbrus/config@latest`)
   1. Создать `package.json` через `npm init`
   2. Создать `.gitignore`
   3. Проинициализировать git `git init`
   4. Настроить линтер ESLint `npm init @eslint/config`
   5. Настроить форматтер Prettier
   6. Прописать стартовый скрипт
   7. Установить требуемые пакеты
4. Для корректной работы линтера+форматтера пропишите в `user settings.json` следющие
   правила (Ctrl/Cmd + Shift + P):

```json
{
  "files.autoSave": "afterDelay",
  "eslint.validate": ["javascript"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.workingDirectories": [
    { "directory": "./client", "changeProcessCWD": true },
    { "directory": "./server", "changeProcessCWD": true }
  ]
}
```
