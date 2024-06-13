# Statische Next.js mit Lokalisierung

Einfaches Beispiel zur Nutzung von Next.js als SSG und mit Unterstützung mehrerer Sprachen.

Wichtig in der [next.config.mjs](next.config.mjs) sind:

-   `output: "export"`, damit statische Assets erzeugt werden
-   `trailingSlash: true`, damit für jede Route ein Ordner mit `index.html` erzeugt wird (`[lang]/about` ➡️ `out/en/about/index.html`, etc.)

## Base-URL

Ich habe in [next.config.mjs](next.config.mjs) noch `basePath: "/projects-temp/static-next-app/out"` und in [layout.tsx](app/[lang]/layout.tsx) noch das gesetzt:

```jsx
<head>
    <base href={`${nextConfig.basePath}/`} />
</head>
```

Das ist nötig, wenn die Site produktiv in einem Unterordner (z.B. "https://example.com/mysite/") gehostet wird. Wenn sie im Root ("https://example.com/") gehostet wird, können diese Stellen entfernt werden.

Funktioniert nur, wenn alle Links relativ sind!

## Weiterleitung für Lokalisierung

Serverseitig, z.B. durch PHP oder `.htaccess` kann eine Umleitung je nach Spracheinstellung des Users stattfinden.

Und mittels einer 404-Seite könnte man noch umsetzen, dass beispielsweise **/about** nach **/de/about** geleitet wird.
