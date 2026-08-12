# InoQua Web — Next.js + Tailwind

Proyecto generado a partir del diseño de Figma "Web Inoqua". Incluye la página **Home** completa,
armada con componentes reutilizables, lista para seguir con el resto de las landings (Servicios,
Nosotros, Contacto, Tipo de negocio, Formulario) del mismo modo.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Estructura (depurada — solo lo necesario)

```
app/
  layout.tsx          -> Navbar + Footer + WhatsApp flotante envuelven todas las páginas
  page.tsx             -> Home: solo ensambla secciones con contenido de /content
  globals.css
  servicios/
    representacion-tecnica/page.tsx  -> landing de servicio, con sus propios componentes
  nosotros/page.tsx     -> landing institucional
  contacto/page.tsx     -> landing de contacto + formulario
content/
  home.ts                                    -> texto/links editables de la Home
  servicios-representacion-tecnica.ts         -> texto/links de esa landing
  nosotros.ts                                  -> texto/links de Nosotros
  contacto.ts                                  -> texto/links de Contacto
components/
  layout/              -> Navbar (con logo real, dropdowns, resaltado de página activa),
                          Footer, WhatsAppButton
  ui/
    Button.tsx           -> botón reutilizable (variantes solid/outline/whatsapp/dark)
    Reveal.tsx            -> animación fade-in al hacer scroll
    Parallax.tsx           -> hace que una imagen "suba" suavemente al hacer scroll
    Icon.tsx               -> set de íconos SVG livianos, usados por los componentes "service"
    PlaceholderImage.tsx   -> rectángulo de color, por si necesitás marcar una imagen pendiente
  sections/            -> componentes de la Home: Hero, ServicesGrid, ProcessChecklist,
                          HowWeWork, BusinessTypes, FinalCTA
                          (HowWeWork y FinalCTA también se reutilizan en Servicios/Nosotros/Contacto
                          porque Figma repite esa misma estructura ahí)
  sections/service/    -> componentes propios de landings de servicio:
                          ServiceHero, ProblemCards, AlertBanner, FeatureSplit,
                          DifferentiatorCards, AudienceCards, ProcessSteps
  sections/about/       -> componentes propios de Nosotros:
                          AboutIntro, WhyChooseUs, LogosMarquee
  sections/contact/     -> componentes propios de Contacto:
                          ContactHero, ContactForm
public/
  img/
    logo.png             -> logo real de la marca
    home1.jpg             -> foto real (fábrica/producto) usada en todas las landings
```

### ¿Por qué algunas carpetas son distintas y otras se comparten?

Cada landing tiene su propia carpeta de componentes (`sections/service`, `sections/about`,
`sections/contact`) porque cada una tiene una estructura de página distinta en Figma: la de
servicio lleva tarjetas de "problema"/"diferencial", la de Nosotros lleva intro + checklist sin
botón + carrusel de logos, la de Contacto lleva un formulario real. Forzar todo a los componentes
de Home hubiera significado props cada vez más genéricos y difíciles de mantener.

Lo que sí se comparte entre landings es `HowWeWork` y `FinalCTA`, porque en Figma **son
literalmente la misma sección** (mismo layout, mismos textos en varios casos) repetida en Home,
Representación Técnica, Nosotros y Contacto — ahí duplicar el componente sería puro código
repetido. `FinalCTA` además se usa dos veces distintas en Nosotros: como cierre de página (un
botón) y como hero al principio (dos botones), gracias a que acepta un `secondaryButton` opcional.



## Cómo editar contenido

Para cambiar textos o links de la Home, editá **`content/home.ts`** — no hace falta tocar ningún
componente.

## Arreglos y efectos agregados en esta vuelta

- **Dropdown del navbar**: el menú de "Servicios" y "Tipo de negocio" ya no se cierra al bajar el
  mouse hacia los links. El bug era un gap invisible entre el botón y el menú (el menú tenía un
  `translate-y` que lo corría hacia abajo dejando un hueco muerto); ahora el área hoverable es
  continua (`components/layout/Navbar.tsx`).
- **Página activa en naranja**: los links del navbar (`Nosotros`, `Contacto`, y cada item dentro
  de los dropdowns) se pintan de naranja cuando `pathname` coincide con su `href`, usando
  `usePathname()` de `next/navigation`.
- **Parallax en la imagen previa al footer**: `components/ui/Parallax.tsx` hace que la foto de
  fondo del `FinalCTA` (la última sección antes del footer, en todas las landings) se desplace
  suavemente al hacer scroll, dando sensación de profundidad.
- **Forma naranja detrás de la imagen del hero**: agregado un polígono SVG naranja detrás de la
  foto en `Hero.tsx` (Home) y `ServiceHero.tsx` (Representación Técnica), replicando el acento
  decorativo del diseño original de Figma.

## Imágenes

Reemplacé todas las imágenes de Figma por tu foto real (`public/img/home1.jpg`) en todas las
landings: hero, secciones de proceso/checklist, tarjetas de tipo de negocio y banner final. Si más
adelante querés una foto distinta para cada bloque, guardá el archivo en `public/img/` y cambiá el
`src="/img/..."` en el componente correspondiente.

**Foto del hero por landing**: hoy todos los heros comparten la misma foto porque es la única real
que tenemos. El componente ya está preparado para que cada landing tenga la suya propia sin tocar
código: `Hero` y `ServiceHero` aceptan una prop opcional `image` (si no se pasa, cae en
`/img/home1.jpg` por defecto). Cuando tengas fotos específicas por rubro, guardalas en `public/img/`
y agregá una línea así en el `content/*.ts` de esa página:
```ts
export const heroContent = {
  // ...
  image: "/img/habilitaciones-hero.jpg",
};
```
Como la página ya hace `<ServiceHero {...heroContent} />` (spread completo), no hace falta tocar
nada más — la nueva foto se toma automáticamente.

Para bloques donde todavía no tengas foto, queda disponible `components/ui/PlaceholderImage.tsx`
(rectángulo con borde punteado) — se usa así:

```tsx
<PlaceholderImage label="Foto del proceso" className="h-[360px] w-full rounded-panel" />
```

**Logos de clientes (Nosotros)**: la franja de "Empresas que respaldan nuestra trayectoria" ya
usa los **20 logos reales** que nos pasaste, guardados en `public/img/clients/` (recortados sin
márgenes y normalizados a la misma altura interna para que la fila quede pareja). Si sumás un
cliente nuevo, guardá su logo en esa carpeta y agregalo al array `logos` en
`content/nosotros.ts` (`{ name: "...", src: "/img/clients/archivo.png" }`) — no hace falta tocar
`LogosMarquee.tsx`.

## Ajustes de tamaño ya aplicados

- Títulos y subtítulos bajados ~10px respecto al primer export de Figma (ver
  `tailwind.config.ts` → `fontSize`), para una jerarquía más liviana.
- Textos del navbar a 18px (antes 20px).
- Botones reducidos 2px (18px de texto, padding un poco más ajustado).
- Más margen lateral en todas las secciones (`px-6 sm:px-10 lg:px-20`) para que el contenido
  no toque los bordes en pantallas grandes.

Todos estos valores están centralizados (tipografía en `tailwind.config.ts`, botón en
`components/ui/Button.tsx`, márgenes en cada sección) así que si algo todavía te parece grande o
chico, decime el elemento puntual y lo afino.

## Efectos / interactividad incluidos

- **Reveal**: fade-in + slide-up al entrar en el viewport (scroll), escalonable con `delay`.
- **Navbar**: sombra al hacer scroll, dropdowns animados, menú mobile con hamburguesa animada.
- **Botones**: hover con elevación + sombra + cambio de color, `active:scale-95` al hacer click.
- **Cards**: hover con elevación y aparición del link "Ver más".
- **WhatsApp flotante**: pulso animado + scale al hover.

## SEO implementado

Cada una de las 19 páginas tiene ahora:

- **Title y meta description únicos y optimizados**, con la palabra clave principal cerca del
  inicio (ej: "Habilitación Bromatológica para Restaurantes y Locales Gastronómicos").
- **Keywords objetivo** por página (uso interno, ayuda a mantener el foco de cada landing).
- **Canonical URL** para evitar contenido duplicado.
- **Open Graph y Twitter Cards** (título, descripción e imagen) para que se vea bien al compartir
  en WhatsApp, Facebook, LinkedIn, etc.
- **Datos estructurados (JSON-LD)**:
  - `ProfessionalService` (organización) en todo el sitio — ayuda a que Google entienda que es un
    negocio real, con teléfono, email y zona de cobertura (Uruguay).
  - `Service` en cada landing de servicio y tipo de negocio — le dice a Google explícitamente
    "esta página ofrece el servicio X".
  - `BreadcrumbList` en cada subpágina — puede hacer que Google muestre las migas de pan
    (Inicio > Servicios > Habilitaciones) directamente en el resultado de búsqueda.
- **`/sitemap.xml`** generado automáticamente (`app/sitemap.ts`) con las 19 URLs y su prioridad.
- **`/robots.txt`** generado automáticamente (`app/robots.ts`), permitiendo el rastreo completo y
  apuntando al sitemap.
- **Jerarquía de encabezados correcta**: un solo `<h1>` por página (el título del hero), el resto
  en `<h2>`/`<h3>`.

Todo esto vive centralizado en:
- `lib/seo/site.ts` — datos del negocio (nombre, teléfono, email, dominio).
- `lib/seo/metadata.ts` — función `buildMetadata()` que arma el objeto completo de metadata a
  partir de 3-4 campos por página.
- `components/seo/JsonLd.tsx` — los tres componentes de datos estructurados.

### ⚠️ Acción requerida de tu parte

1. ~~Reemplazar el dominio placeholder~~ ✅ Ya configurado: `https://inoqua.com.uy`.
2. ~~Completar redes sociales~~ ✅ Ya configuradas: Instagram y LinkedIn (`lib/seo/site.ts`, y
   enlazadas también desde los íconos del footer y la tarjeta "Redes sociales" de Contacto).
3. **Dado de alta en Google Search Console**: subí el sitio, verificá la propiedad y enviá el
   sitemap (`https://inoqua.com.uy/sitemap.xml`) para que Google indexe las páginas más rápido.
4. Si sumás Facebook más adelante, completá `social.facebook` en `lib/seo/site.ts` — hoy solo
   están Instagram y LinkedIn, así que el ícono de Facebook no se muestra en el footer.
5. Ninguna cantidad de SEO técnico reemplaza los **backlinks y reseñas** (Google Business Profile,
   directorios locales uruguayos, prensa) — son el factor que más pesa para rankear arriba en
   búsquedas locales como "habilitación bromatológica Montevideo".

## Google Analytics

Ya está todo el código listo para conectar Google Analytics 4 — solo falta tu ID de medición.

1. Entrá a tu cuenta de Google Analytics → **Admin** → **Flujos de datos** → tu sitio web. Copiá el
   **ID de medición** (formato `G-XXXXXXXXXX`).
2. Copiá el archivo `.env.local.example` a **`.env.local`** (en la raíz del proyecto) y pegá tu ID:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Reiniciá `npm run dev` (o volvé a hacer `npm run build` en producción). Listo — Analytics
   empieza a registrar visitas automáticamente en todas las páginas.

Si no configurás `NEXT_PUBLIC_GA_ID`, el sitio funciona exactamente igual: Analytics simplemente no
se carga (no rompe nada ni en desarrollo ni en producción).

**Qué trackea automáticamente:**
- Vista de página en cada ruta, incluida la navegación interna del sitio (Next.js no recarga la
  página al navegar, así que agregamos un tracker específico para que esto funcione igual —
  `components/analytics/PageViewTracker.tsx`).

**Para trackear eventos específicos** (ej: cada vez que alguien clickea "Solicitar asesoramiento"
o "Hablar por Whatsapp"), importá el helper `event` desde `lib/analytics/gtag.ts` en el componente
que quieras medir:
```tsx
import { event } from "@/lib/analytics/gtag";

<button onClick={() => event({ action: "click", category: "cta", label: "Solicitar asesoramiento" })}>
```
Esto es opcional — hoy ningún botón lo tiene conectado, pero el helper ya está listo para usarse
donde lo necesites (por ejemplo, para saber qué botón de "Evaluar mi caso" convierte mejor).

**Importante sobre privacidad**: si empezás a trackear eventos con datos de usuarios, revisá que tu
política de privacidad mencione el uso de Google Analytics.

## Versiones de dependencias

Actualizado a las últimas versiones estables, compatibles entre sí:

| Paquete       | Versión  |
| ------------- | -------- |
| Next.js       | 16.2.10  |
| React         | 19.2.7   |
| Tailwind CSS  | 4.3.3    |
| TypeScript    | 5.9.3    |

**Nota sobre TypeScript**: la versión realmente más nueva publicada es TypeScript 7 (la reescritura
nativa del compilador), pero al probarla, Next.js 16 todavía no reconoce correctamente su nuevo
formato de paquete (falla con "It looks like you're trying to use TypeScript but do not have the
required package(s) installed"). Por eso quedamos en **5.9.3** — la última de la serie estable que
sí es 100% compatible con el resto del stack. Cuando el ecosistema (Next.js/ts-node/etc.) termine
de adaptarse a TypeScript 7, va a ser un cambio de una sola línea en `package.json`.

**Tailwind v4**: el salto de v3 a v4 cambia bastante la forma de configurar (antes todo vivía en
`tailwind.config.ts`, ahora el estándar es CSS con bloques `@theme`). Para no reescribir todos los
tokens de marca (colores, tipografías, radios, animaciones) migramos usando la capa de
compatibilidad de v4 (`@config "../tailwind.config.ts";` en `app/globals.css`), que le sigue leyendo
el archivo de configuración de siempre. Verifiqué que los estilos personalizados (`bg-azul`,
`text-titulo-xxl`, `rounded-hero`, la animación `marquee`, etc.) se generan correctamente en el CSS
final.

Con Next 16 además cambió el bundler por defecto: ahora usa **Turbopack** en vez de Webpack para
`next build`, lo cual da builds más rápidos (los 19 páginas + sitemap + robots compilan en ~12s).

## Estado del proyecto


**Las 19 páginas del sitio ya están armadas y compilando sin errores**: Home, las 6 landings de
Servicios (Habilitaciones, Representación Técnica, Registro de productos, Capacitaciones,
Certificaciones, Planes de trabajo), las 7 landings de Tipo de negocio (Locales gastronómicos,
Locales sin elaboración, Supermercados, Industria y elaboración, Depósitos y logística, Ferias
gastronómicas, Espacios colectivos), Nosotros y Contacto.

Pendiente si querés seguir iterando:
- Reemplazar `public/img/home1.jpg` por fotos reales específicas de cada rubro (hoy todas las
  landings comparten la misma foto).
- Conectar `ContactForm` a un backend real (hoy solo valida y muestra un mensaje de confirmación).
- Revisar/ajustar textos puntuales página por página si algo no refleja 100% tu negocio real.
Prueba tras migración
