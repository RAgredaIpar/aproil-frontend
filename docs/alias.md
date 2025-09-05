## 📥 Reglas de Import

Para mantener el código limpio y consistente, se definen **alias de imports**.  
De esta manera evitamos rutas relativas largas como `../../../components/Button`.

Los imports deben estar ordenados en este orden:

1. **React y librerías externas**
2. **Alias absolutos (`@/...`)**
3. **Imports relativos locales (`./...`)**

### 🔗 Alias Disponibles

| Alias           | Ruta real          | Uso recomendado                                |
| --------------- | ------------------ | ---------------------------------------------- |
| `@app/*`        | `src/app/*`        | Configuración global de la app                 |
| `@assets/*`     | `src/assets/*`     | Imágenes, íconos y recursos estáticos          |
| `@components/*` | `src/components/*` | Componentes compartidos                        |
| `@config/*`     | `src/config/*`     | Configuración (paths, env, etc.)               |
| `@features/*`   | `src/features/*`   | Módulos de negocio (auth, users, etc.)         |
| `@hooks/*`      | `src/hooks/*`      | Custom hooks reutilizables                     |
| `@lib/*`        | `src/lib/*`        | Librerías compartidas (i18n, api-client, etc.) |
| `@playground/*` | `src/playground/*` | Pruebas y demos de UI                          |
| `@testing/*`    | `src/testing/*`    | Utilidades y mocks de testing                  |
| `@types/*`      | `src/types/*`      | Tipos globales de TypeScript                   |
| `@utils/*`      | `src/utils/*`      | Funciones helper                               |

### ✅ Ejemplo de uso

```tsx
// ❌ Evitar
import Button from '../../../components/ui/Button'

// ✅ Usar alias
import Button from '@components/ui/Button'
```
