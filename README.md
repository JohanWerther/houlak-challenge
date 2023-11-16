# Houlak Spotify Albums Web Project 🎵 Federico

## Requisitos

- Node v18.0.0+
  - Este es un requisito especial que añade la librería [spotify-web-api-sdk](https://github.com/spotify/spotify-web-api-ts-sdk) por utilizar `fetch` tanto en Node como en el Browser \
    Para cambiar de versiones de Node utilizo [nvm](https://github.com/nvm-sh/nvm)

## Para empezar

```sh
npm run start
```

`URL`: http://localhost:3000 <br><br>
Este comando fue añadido y depende de `nodemon.json`

### Variables de entorno

Normalmente requeriría el uso de varias variables de entorno, en este caso decidí hacer lo siguiente para que fuera más sencillo probar

```js
// server/config/config.ts
export const SPOTIFY_CLIENT_ID =
  process.env.SPOTIFY_CLIENT_ID || "my-hardcoded-id";
```

## Librerías

Base React, Express y Typescript

### Librerías para la UI

#### [TailwindCSS](https://tailwindcss.com)

Me parece una gran opción para escalado y customización. Trabajando con React, no tengo que preocuparme si el componente se renderiza en el servidor o en el cliente para aplicar estilos.

#### [shadcn/ui](https://ui.shadcn.com)

CLI para añadir componentes directamente en el proyecto. Los elementos pueden ser puramente de HTML o en caso de necesitar buena accesibilidad, utiliza los primitivos de [Radix UI](https://www.radix-ui.com) estilizados con TailwindCSS

### Librerías para el servidor

#### [@spotify-web-api-sdk](https://github.com/spotify/spotify-web-api-ts-sdk)

#### [ViteExpress](https://github.com/szymmis/vite-express)

Mi intención era hacer un monorepo para que sea más sencillo levantar la aplicación para probarla. En la [documentación de Vite](https://vitejs.dev/guide/backend-integration.html) se sugería esta librería.

#### [Sequelize](https://sequelize.org) y [Sqlite3](https://www.npmjs.com/package/sqlite3)

Encontré sqlite3 adecuado para el caso concreto, dado que puedo crear una base de datos en el filesystem o en memoria

#### Nodemon
