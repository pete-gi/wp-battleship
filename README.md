# wp-battleship

Battleships game in Vue.js - for recruitment process only.

Beware! There's polish language below! ;)

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

- instalacja stylów `materialize-css` - to jedyna użyta "biblioteka", o ile można to tak nazwać. Pominąłem całe działanie, samych stylów używam, by nie uczyć się od zera jak stylować w materialu;
- napisanie i dodanie pluginu do zarządzania stanem aplikacji poprzez LocalStorage (`StoragePlugin.ts`, `main.ts`);
- rozszerzenie deklaracji Vue o interfejs `StoragePlugin` (`shims-vue.d.ts`);
- utworzenie pliku `.prettierrc` nadpisującego domyślne formatowanie (prettier pokazywał warning przez przecinki, a eslint ich wymagał);
- instrukcja zadania nie wskazuje co ma być sortowane malejąco na liście wyników. Można się domyślać, ale brak precyzji potraktowałem sortowaniem po dacie.

## Uwagi

- brak testów, instrukcja nie wskazywała na taki wymóg;
- bardzo skromna dokumentacja JSDoc - zaledwie kilka metod i importów (importy udokumentowane na siłę), ponieważ brak czasu;
- przyznam, zadanie mnie zmęczyło, ciężko jest zrobić je nie znając systemu tworzenia i umieszczania statków. Oczywiście w końcu skorzystałem z pomocy internetowych;
- ze względu na pochłonięty czas (12h+), nie chciało mi się implementować kontynuowania gry mimo, że napisany StoragePlugin uprościłby to bardziej niż jest;
- za to zaimplementowałen prosty system cheatów - pokazujący pozycję statków, do włączenia w bocznym menu gry. Informacja o tym zapisuje się też w wynikach.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
