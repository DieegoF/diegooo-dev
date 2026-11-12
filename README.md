# diegodev.com.ar

Landing de diegodev: desarrollo de software a medida en Buenos Aires.

Sitio estático, sin build. Todo vive en `index.html` (CSS y JS inline).

- `index.html`: la home (landing con el brief de presupuesto)
- `servicios/*.html` y `preguntas-frecuentes.html`: páginas de servicios y FAQ (estilos en `assets/sub.css`)
- `robots.txt` y `sitemap.xml`: para Google, Bing y buscadores con IA
- `og.png`: imagen que se ve al compartir el link (1200×630)
- `vercel.json`: Vercel lo sirve tal cual, sin framework ni build, con URLs limpias (sin .html)

Cada push a `main` se publica en producción.
