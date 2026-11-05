# Caso Legálitas · Presentación web

Web de Victoria Ramírez de Arellano para presentar el caso práctico de retención y Lifecycle Marketing. Conserva las 11 partes de la presentación, sus cifras, fórmulas, límites y argumentario. La frase de portada eliminada no aparece.

## Subir a GitHub y Vercel

1. Descomprime `Legalitas_Web_GitHub_Vercel.zip`.
2. Crea un repositorio en GitHub. Puedes utilizar un repositorio privado.
3. Sube **el contenido de la carpeta `legalitas-scrollytelling`**, de modo que `package.json`, `vercel.json` y `README.md` queden en la raíz del repositorio. Sube también `public`, `scripts` y `docs`. No subas el ZIP como único archivo.
4. En Vercel, importa ese repositorio de GitHub como nuevo proyecto.
5. Revisa la configuración siguiente y despliega:

| Ajuste | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raíz del repositorio (si has seguido el paso 3) |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Variables de entorno | Ninguna |

`vercel.json` incluye el comando de construcción y la carpeta de salida. Si subes la carpeta completa en lugar de su contenido, selecciona `legalitas-scrollytelling` como Root Directory.

Al completar el despliegue, Vercel te proporciona la URL de la presentación. Los cambios que subas después a la rama conectada podrán generar nuevos despliegues. Este paquete está preparado para desplegarse; no incluye un despliegue ya realizado en tu cuenta.

Documentación oficial consultada: https://vercel.com/docs/project-configuration

## Verla en tu ordenador

Requisito: Node.js 20 o superior. El proyecto no utiliza dependencias externas.

```bash
npm run dev
```

Abre `http://localhost:3000`. Detén el servidor con Ctrl+C.

Para validar y generar los archivos que publicará Vercel:

```bash
npm run check
npm run build
```

También puedes abrir `public/index.html` directamente en el navegador para una revisión local básica. Para comprobar el comportamiento de publicación y las descargas, utiliza el servidor local.

## Presentar durante la entrevista

- Recorre los capítulos con scroll normal, sin desplazamiento forzado.
- El menú **Capítulos** permite ir directamente a cualquiera de las 11 partes.
- Los botones inferiores y las teclas **← / →** cambian de capítulo. Las flechas arriba/abajo conservan el desplazamiento normal.
- **Pantalla completa** utiliza la función del navegador cuando está disponible.
- **Pausar movimiento** desactiva las transiciones. Se respeta además la preferencia de movimiento reducido del dispositivo.
- En el capítulo 4, el gráfico permanece visible mientras avanzas por el contexto de 2025, el primer semestre de 2026 y julio–septiembre. El énfasis cambia; los datos y la escala permanecen iguales.
- Al final están los enlaces al PDF y al Excel, y una tabla desplegable con los cuatro indicadores de los 22 meses.
- Los controles no avanzan automáticamente ni consumen un tiempo predeterminado. Puedes detenerte para responder preguntas.
- Puedes imprimir desde el navegador; para entregar o proyectar un documento con paginación exacta, utiliza el PDF incluido.

## Qué contiene

```text
public/
  index.html                    Contenido completo y accesible sin JavaScript
  styles.css                    Diseño, adaptación móvil y movimiento reducido
  app.js                        Scrollytelling, navegación y controles
  datos-resumen.json            Agregaciones de apoyo del análisis
  favicon.svg                   Icono local
  descargas/
    Presentacion_Caso_Legalitas.pdf
    Calculos_Retencion_Legalitas.xlsx
scripts/
  build.mjs                     Copia public a dist
  serve.mjs                     Servidor local, sin dependencias
docs/
  Guia_Entrevista_Legalitas.pdf   Material de ensayo
  CONTENIDO_Y_CALCULOS.md        Mapa de contenido y criterios
package.json
vercel.json
README.md
```

Vercel publica únicamente `dist`, generado desde `public`. La guía de ensayo de `docs` no se enlaza ni se publica en la web, aunque sí forma parte del repositorio que subas a GitHub. La web ofrece las descargas de la presentación y el Excel.

## Editar más adelante

- Textos y cifras visibles: `public/index.html`.
- Colores, tamaños y espacios: variables al inicio de `public/styles.css`.
- Navegación y movimiento: `public/app.js`.
- Archivos descargables: `public/descargas/`.

Las cifras son una fotografía verificada del caso recibido. **No se actualizan automáticamente desde el Excel.** Si cambias datos, actualiza la web, el SVG del gráfico, la tabla mensual, el JSON y los archivos descargables para conservar la coherencia.

## Diseño y comportamiento

Azul oscuro, marfil y granate; capítulos editoriales, títulos fijos al desplazarse, apariciones suaves y gráfico con relato por fases. No hay carruseles automáticos, sonidos, vídeo de fondo, analítica, cookies de seguimiento, formularios ni servicios externos. No se necesitan fuentes ni librerías de una CDN.

La estructura semántica, el contenido estático, los enlaces de salto, los controles de teclado y el modo de movimiento reducido permiten utilizarla de distintas maneras. En móvil las tablas conservan sus datos mediante desplazamiento horizontal.

La página incluye `noindex` para no solicitar indexación en buscadores; esto no es una contraseña ni un control de acceso. Es una presentación de candidatura con datos ficticios, no una web oficial de Legálitas.

## Verificación de esta entrega

Comprobados: sintaxis de JavaScript, generación de `dist`, conservación del contenido de las 11 partes, anclas internas y presencia de los archivos descargables. Los PDF y Excel incluidos coinciden con los entregables anteriores. La vista de prueba del navegador de este entorno quedó bloqueada, por lo que no se ha completado una comprobación visual ni de interacción en navegador. Abre la vista previa de Vercel para revisar el recorrido antes de la entrevista.
