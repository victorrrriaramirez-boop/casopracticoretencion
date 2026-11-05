# Contenido conservado y forma de presentar

| Capítulo | Contenido |
| --- | --- |
| 01. Resumen | Retener con valor, resultado 49,6 % → 44,4 %, dónde actuar y cómo retener. |
| 02. Método | Unidad de análisis, 147.955 solicitudes, calidad, periodo comparable y límites del registro. |
| 03. Indicadores | Cuatro indicadores, cálculo, comparación 2025–2026 y motivo de seguimiento. |
| 04. Evolución | Serie mensual, comparación de semestres/tercer trimestre y octubre parcial. |
| 05. Diagnóstico | Servicio en enero–febrero, motivo económico desde julio, hipótesis y comprobaciones. |
| 06. Segmentos | Canal escrito/teléfono, sin uso, clientes recientes, peso de segmentos y acciones. |
| 07. Acciones | Diagnóstico, piloto, extensión, responsables, medición y datos adicionales. |
| 08. Conversación | Perfil del cliente, apertura, preguntas y argumento de valor. |
| 09. Ofertas | Oferta según objeción real, catálogo y reglas que se respetan. |
| 10. Coste | Comparación nominal a 12 meses, cuotas y reducciones; cierre y limitaciones. |
| 11. Seguimiento | Registro, ejecución, continuidad pagada, criterio de trabajo y fuentes. |

La guía de ensayo conserva la correspondencia con estos 11 capítulos. Su distribución orientativa suma 12 minutos y medio. No se muestra ese tiempo en la portada web.

## Definiciones

- Retención = solicitudes con Resultado «Retenido» / solicitudes del periodo.
- Volumen = número de solicitudes.
- Frecuencia de descuentos = retenidas con descuento positivo / retenidas.
- Descuento equivalente anual por retenida = suma de `(descuento / 100) × duración / 12`, dividida entre las retenidas. Incluye las retenidas sin descuento con valor cero.
- La comparación principal utiliza enero–septiembre de ambos años. Octubre de 2026 llega hasta el día 15.
- Tasas calculadas con los totales, sin promediar porcentajes mensuales. Variaciones calculadas antes de redondear.
- No hay cartera completa, ID de cliente, bajas efectivas, cuotas ni costes. Por tanto, las solicitudes no retenidas no son churn de cartera y el indicador de descuento no es margen.
- Los descuentos concedidos no permiten medir la tasa de aceptación de ofertas ni demostrar causalidad.

## Datos adicionales en la web

La tabla mensual del final añade soporte verificable sin alargar la exposición principal. El JSON conserva las agregaciones disponibles por mes y segmento; el Excel descargable contiene las fórmulas y los desgloses de apoyo. Los datos ficticios de origen y las conclusiones no se han sustituido por estimaciones nuevas.

## Contenido que permanece fuera de la exposición

La guía es preparación personal: no está incorporada al relato público ni exige leerla durante la entrevista. El PDF y el Excel se ofrecen como apoyo. No es necesario enseñar todas las tablas: explica el criterio y abre los cálculos si te preguntan.


## Cálculos visibles añadidos al capítulo 03

Se mantienen las cuatro tarjetas y sus motivos de seguimiento. Debajo se muestra, sin desplegables, la fórmula, el denominador, las cifras de ambos años y la variación.

### Volumen de solicitudes

Contar los ID de solicitud del periodo seleccionado.

Cada solicitud se cuenta una vez; no equivale a clientes únicos.

- 2025 (enero–septiembre): N.º de solicitudes = 60.172
- 2026 (enero–septiembre): N.º de solicitudes = 63.453

(63.453 − 60.172) / 60.172 × 100 = +5,45 % → +5,5 %. Es una variación relativa.

### Tasa de retención

Solicitudes con resultado «Retenido» / total de solicitudes × 100.

El denominador incluye todas las solicitudes del periodo, retenidas y no retenidas.

- 2025 (enero–septiembre): 29.866 / 60.172 × 100 = 49,6344 % → 49,6 %
- 2026 (enero–septiembre): 28.143 / 63.453 × 100 = 44,3525 % → 44,4 %

44,3525 % − 49,6344 % = −5,2819 puntos porcentuales → −5,3 p. p.

### Frecuencia de descuentos

Solicitudes retenidas con descuento mayor que 0 / total de retenidas × 100.

Mide cuántas retenciones necesitan una concesión; no se divide entre todas las solicitudes.

- 2025 (enero–septiembre): 14.487 / 29.866 × 100 = 48,5067 % → 48,5 %
- 2026 (enero–septiembre): 13.498 / 28.143 × 100 = 47,9622 % → 48,0 %

47,9622 % − 48,5067 % = −0,5445 puntos porcentuales → −0,5 p. p.

### Descuento equivalente anual por retenida

Para cada retenida: e = (descuento % / 100) × (meses de descuento / 12). Indicador (%) = (suma de e / total de retenidas) × 100.

Ejemplo: 20 % durante 12 meses equivale al 20 % anual; 50 % durante 2 meses equivale al 8,33 %. Las retenidas sin descuento aportan cero y se incluyen en el denominador.

- 2025 (enero–septiembre): (4.095,5667 / 29.866) × 100 = 13,7131 % → 13,7 %
- 2026 (enero–septiembre): (3.385,3667 / 28.143) × 100 = 12,0292 % → 12,0 %

12,0292 % − 13,7131 % = −1,6840 puntos porcentuales → −1,7 p. p. La suma de e está expresada en proporciones equivalentes: no son euros ni clientes. Este indicador mide intensidad nominal del descuento, no coste real ni margen.


## Cálculos visibles del punto 5

### Peso del motivo «Mal servicio»

Filtro: enero–febrero de cada año. Numerador: solicitudes con Motivo = «Mal servicio». Denominador: todas las solicitudes de esos dos meses. Fórmula: numerador / denominador × 100.

2025: 2.083 / 14.971 × 100 = 13,9 %.

2026: 4.757 / 15.764 × 100 = 30,2 %.

Mide el peso de un motivo entre las solicitudes, no su tasa de retención.

### Solicitudes por «Tiempo de respuesta»

Filtro: enero–febrero de cada año, Motivo = «Mal servicio» y Submotivo = «Tiempo de respuesta». Cálculo: contar los ID de solicitud que cumplen los tres filtros.

2025: 1.186 solicitudes.

2026: 3.855 solicitudes.

Son recuentos de solicitudes: no son minutos de espera ni clientes únicos.

### Retención del motivo «Económico»

Filtro: julio–septiembre de cada año y Motivo = «Económico». Fórmula: solicitudes de ese motivo con Resultado = «Retenido» / todas las solicitudes de ese motivo × 100.

2025: 4.858 / 6.885 × 100 = 70,6 %.

2026: 3.634 / 7.124 × 100 = 51,0 %.

El denominador es el total del motivo económico en ese trimestre, no el total de solicitudes de todos los motivos.

### Desaparición del descuento del 40 %

Filtro: Descuento concedido (%) = 40. Cálculo: contar solicitudes por el campo Mes y comprobar cuándo deja de haber registros.

Junio de 2026: 682 solicitudes con un descuento concedido del 40 %.

Julio, agosto y septiembre de 2026: 0 en cada mes. Octubre: 0 hasta el día 15.

Es una observación sobre descuentos concedidos. No prueba la fecha de una decisión de catálogo ni su efecto causal: habría que contrastarlo con Operaciones y Tecnología.


## Cálculos visibles del punto 6

### Retención por canal, uso y antigüedad

Filtro común: enero–septiembre de cada año. Para cada fila, añado el filtro del segmento. Fórmula: solicitudes del segmento con Resultado = «Retenido» / total de solicitudes del mismo segmento × 100.

Enero–septiembre de 2025:
Canal = Escrito: 4.378 / 11.803 × 100 = 37,1 %.
Canal = Teléfono: 25.488 / 48.369 × 100 = 52,7 %.
Uso último año = Sin uso: 17.407 / 40.302 × 100 = 43,2 %.
Antigüedad = 0–3 meses: 3.040 / 8.436 × 100 = 36,0 %.

Enero–septiembre de 2026:
Canal = Escrito: 5.693 / 17.619 × 100 = 32,3 %.
Canal = Teléfono: 22.450 / 45.834 × 100 = 49,0 %.
Uso último año = Sin uso: 16.001 / 42.518 × 100 = 37,6 %.
Antigüedad = 0–3 meses: 2.807 / 8.853 × 100 = 31,7 %.

Cada tasa tiene su propio denominador. Una misma solicitud puede pertenecer a Escrito, Sin uso y 0–3 meses; no se suman esos segmentos.

### Peso del canal escrito en el volumen

Filtro: enero–septiembre de cada año. Fórmula: solicitudes con Canal = «Escrito» / total de solicitudes del periodo × 100.

2025: 11.803 / 60.172 × 100 = 19,6 %.

2026: 17.619 / 63.453 × 100 = 27,8 %.

Aquí se mide el peso del canal, incluyendo solicitudes retenidas y no retenidas. Es distinto de su tasa de retención.

### Volumen y peso del motivo «No lo usa»

Filtro: enero–septiembre de 2026 y Motivo = «No lo usa». Volumen: contar las solicitudes filtradas. Peso: ese recuento / todas las solicitudes del periodo × 100.

Volumen en 2026: 19.387 solicitudes.

Peso en 2026: 19.387 / 63.453 × 100 = 30,6 %.

«No lo usa» es un motivo de solicitud; «Sin uso» es una categoría del campo Uso último año (42.518 solicitudes en enero–septiembre de 2026). Son variables distintas y no se intercambian.


## Presentación breve: pocos números, bien explicados

La versión actual conserva en primer plano los cuatro indicadores, sus definiciones y motivos de seguimiento, los dos hallazgos del diagnóstico y la tabla de segmentos con las acciones. Los desarrollos numéricos de los puntos 3, 5 y 6 se conservan completos en desplegables cerrados al cargar la página. Se mantiene visible la fórmula general de retención por segmento y el ajuste anual del descuento. Para exponer, sigue el relato principal y abre el respaldo únicamente cuando ayude a explicar una pregunta. Los recuentos secundarios y pesos de los segmentos están dentro de esos desplegables. Esta organización sustituye las indicaciones anteriores que describían todos los cálculos como visibles sin desplegables.
