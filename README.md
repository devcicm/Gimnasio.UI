# Gimnasio.UI — Frontend del Sistema de Control de Gimnasios 🏋️

Interfaz web del **Sistema de Control de Gimnasios**: una plataforma **multi-tenant** donde cada gimnasio cliente opera con sus propios socios, membresías, clases y configuración, sin mezclar datos con otros gimnasios.

> 📖 **¿Primera vez?** El contexto completo del proyecto (negocio, historia, glosario) está en el repo del backend: [`Developer-net-web/Gimnasio`](https://github.com/Developer-net-web/Gimnasio) → [`docs/00-contexto-y-trasfondo.md`](https://github.com/Developer-net-web/Gimnasio/blob/desarrollo/docs/00-contexto-y-trasfondo.md)

## ¿Qué hay implementado?

| Pieza | Estado |
|---|---|
| **Landing page pública** | ✅ Navbar responsive, hero, clases, planes, horarios, contacto y footer — contenido en español, sin dependencias externas |
| **Paneles internos** | 🔨 Pendientes (dependerán de la API: socios, membresías, caja...) |

La landing reemplaza la plantilla placeholder de Angular CLI. Su contenido está centralizado en `src/app/features/landing/landing-data.ts` — cuando existan los endpoints de la API, esas secciones pasarán a consumir datos reales (las entidades `Clase`, `PlanMembresium` y `HorarioClase` del backend ya coinciden con las secciones).

## Stack

- **Angular 22** (standalone components, signals, control flow `@for`/`@if`)
- **SCSS** con tokens de diseño globales (`src/styles.scss`) — sin librerías de UI ni imágenes binarias
- **Vitest** para pruebas unitarias · **TypeScript 6**

## Inicio rápido

### Requisitos
- Node.js (con npm) — revisar la versión que exige Angular 22 en `package.json`
- No requiere base de datos ni backend para la landing (contenido estático)

### Ejecutar

```bash
npm install
ng serve
# → http://localhost:4200
```

### Verificar

```bash
ng build   # compila (producción)
ng test    # pruebas unitarias
```

## Estructura

```
src/app/
  app.ts / app.html          → raíz: monta la landing
  features/
    landing/
      landing-data.ts        → ⭐ contenido editable en un solo lugar
      sections/
        navbar/ hero/ clases/ planes/ horarios/ contacto/ footer/
```

Convención para próximas implementaciones: una carpeta por módulo/feature bajo `src/app/features/<modulo>/`.

## El proyecto completo

| Repo | Qué es |
|---|---|
| **Este repo** (`Gimnasio.UI`) | Frontend Angular |
| [`Gimnasio`](https://github.com/Developer-net-web/Gimnasio) | API .NET 8 + base de datos SQL Server (2008–2022) |

Flujo de ramas: `feature/<nombre>` → PR → `desarrollo` → `qa` → `produccion` → `main`.
