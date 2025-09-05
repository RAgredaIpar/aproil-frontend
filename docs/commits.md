# 📦 Guía de Commits: Conventional Commits

Todos los commits deben seguir el siguiente formato:

`<tipo>(<scope opcional>): <descripción corta en minúsculas>`


- **tipo** → describe el tipo de cambio.
- **scope** → área del código afectada (opcional).
- **descripción** → breve, en minúsculas, sin punto al final.

---

## 1️⃣ Tipos de commits más usados

| Tipo      | Cuándo usarlo | Ejemplo |
|-----------|---------------|---------|
| **feat**  | Nueva funcionalidad | `feat(login): agregar validación de email` |
| **fix**   | Corrección de bug | `fix(api): corregir error en fetch de usuarios` |
| **chore** | Tareas de mantenimiento, configuraciones, scripts | `chore(config): agregar commitlint y husky` |
| **style** | Cambios de formato, espaciado, Prettier, ESLint auto-fix | `style: aplicar prettier a todos los archivos` |
| **refactor** | Refactorización que no agrega ni corrige features | `refactor(auth): reestructurar hooks de autenticación` |
| **docs** | Cambios en documentación | `docs(readme): actualizar sección de instalación` |
| **test** | Agregar o modificar tests | `test(login): agregar tests para validación de email` |
| **perf** | Mejoras de rendimiento | `perf(api): optimizar query de usuarios` |

---

## 2️⃣ Reglas de estilo

1. **Subject en minúsculas**:
```bash
    ✅ chore(config): agregar commitlint
    ❌ chore(config): Agregar commitlint
```
2. **No usar punto final**:

```bash
    ✅ fix(api): corregir error en fetch
    ❌ fix(api): corregir error en fetch.

```
3. **Scope opcional, pero recomendable**:

```bash
    ✅ feat(auth): login con Google
    ✅ chore: actualizar dependencias
```

