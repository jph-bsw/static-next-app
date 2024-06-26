# Statische Next.js mit Lokalisierung

Einfaches Beispiel zur Nutzung von Next.js als SSG und mit Unterstützung mehrerer Sprachen.

Wichtig in der [next.config.mjs](next.config.mjs) sind:

-   `output: "export"`, damit statische Assets erzeugt werden
-   `trailingSlash: true`, damit für jede Route ein Ordner mit `index.html` erzeugt wird (`[lang]/about` ➡️ `out/en/about/index.html`, etc.)

## Support für BasePath

Du kannst in [next.config.mjs](next.config.mjs) z.B. `basePath: "/projects/static-next-app/out"` definieren. Und in [layout.tsx](app/[lang]/layout.tsx) kannst du noch das setzen:

```jsx
<head>
    <base href={`${nextConfig.basePath}/`} />
</head>
```

Das ist nötig, wenn die Site produktiv in einem Unterordner (z.B. "https://example.com/mysite/") gehostet wird. Wenn sie im Root ("https://example.com/") gehostet wird, können diese Stellen entfernt werden.

Funktioniert nur, wenn alle Links relativ sind!

## Vorbereitung für PHP

In [custom-scripts/prepare-php.mjs](custom-scripts/prepare-php.mjs) befindet sich Code, der eine [index.php](public/index.php) und [.htaccess](public/.htaccess) generiert. Das Script wird mit `npm run build` vor `next build` ausgeführt.
Die generierten Dateien sorgen auf Servern mit PHP dafür, dass User automatisch beispielsweise nach **/en** oder **/de** umgeleitet werden. Auch Unterpfade werden umgeleitet, also z.B. **/about** nach **/en/about**. Die verfügbaren Sprachen werden aus [lib/translations.ts](lib/translations.ts) entnommen.
Das Script nutzt auch den `basePath` aus [next.config.mjs](next.config.mjs).

## PHP lokal ausführen

1. Erzeuge den _out_-Ordner mit `npm run build`.
2. Führe das aus:

```
php -S localhost:8000 -t out
```
