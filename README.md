# Figma Code Layers

Proyecto de pruebas con React, Vite y TypeScript.

La app contiene un formulario con los campos **Name** y **Email**, y un botón naranja **Crear**. Los dos campos son obligatorios; el navegador valida el formato del email. El envío muestra una confirmación local: no hay backend ni persistencia de datos.

## Desarrollo

Requiere Node.js 22.12 o superior (se utilizó Node.js 24).

```sh
npm ci
npm run dev
```

Abre la URL que Vite muestra en la terminal.

## Verificaciones

```sh
npm run lint
npm run build
npm run preview
```

## Archivos principales

- `src/App.tsx`: formulario y confirmación local.
- `src/App.css`: estilos del formulario.
- `src/index.css`: estilos generales y colores.

Repositorio: [felipemolanoai/figma_codelayers](https://github.com/felipemolanoai/figma_codelayers).
