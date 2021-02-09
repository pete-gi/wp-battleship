# wp-battleship

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Informacje o projekcie

## Zmiany wprowadzone w domyślnej konfiguracji

- instalacja resetu stylów `ress` - to jedyna użyta "biblioteka", o ile można to tak nazwać
- napisanie i dodanie pluginu do zarządzania stanem aplikacji poprzez LocalStorage (main.ts)
- rozszerzenie deklaracji Vue o interfejs pluginu do LocalStorage (shims-vue.d.ts)
- utworzenie pliku `.prettierrc` nadpisującego domyślne formatowanie (prettier pokazywał warning przez przecinki, a eslint ich wymagał)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
