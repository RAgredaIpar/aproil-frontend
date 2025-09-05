## 🗂️ Estructura General

```plaintext
src/
 ├── app/            
 │   ├── routes/     
 │   │   ├── public/     
 │   │   └── private/    
 │   ├── router.tsx      
 │   └── index.tsx       
 ├── assets/            
 ├── components/        
 ├── config/            
 │   ├── paths.tsx       
 │   └── env.tsx       
 ├── docs/         
 ├── features/          
 ├── hooks/             
 ├── lib/               
 │   ├── i18n/           
 │   │   ├── index.ts    
 │   │   └── en.js       
 ├── playground/         
 │   └── demos/          
 ├── testing/            
 │   └── mocks/          
 ├── types/             
 ├── utils/               
```

# 📁 Descripción de Carpetas y Archivos

---

## **app/**
Contiene la configuración global de la aplicación.

- **routes/**  
  Organización de las páginas según el tipo de acceso.
    - **public/** → Páginas públicas (landing, login, registro, etc.).
    - **private/** → Páginas privadas (dashboard, panel de administración, etc.).

- **router.tsx**  
  Configuración principal del enrutador. Utiliza `paths.ts` para centralizar los paths y evitar rutas hardcodeadas.

- **index.tsx**  
  Punto de entrada principal de la aplicación (renderiza el root y providers globales).

---

## **assets/**
Recursos estáticos como **imágenes, íconos, SVGs y fuentes**.

---

## **components/**
Componentes compartidos y reutilizables.  
Ejemplo: botones, modales, inputs, layouts comunes.

---

## **config/**
Centraliza configuraciones globales y constantes.

- **paths.tsx**  
  Define todas las rutas de la aplicación en un solo lugar.

- **env.tsx**  
  Configuración y validación de variables de entorno para asegurar que no falten en producción.

---

## **features/**
Módulos de negocio organizados por **feature** (feature-based architecture).  
Cada módulo incluye su lógica, componentes, hooks y pruebas.  
Ejemplo: `auth/`, `users/`, `comments/`

---
