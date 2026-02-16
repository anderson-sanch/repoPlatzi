Archivos de plantilla en formato Markdown (.md)

Estos son los más comunes. Se usan para definir tipos de issues como:

bug_report.md – para reportar errores
feature_request.md – para solicitar nuevas funcionalidades
task.md – para tareas técnicas o mantenimiento
question.md – para dudas o soporte
documentation.md – para cambios o mejoras en la documentación
custom-name.md – puedes ponerle cualquier nombre descriptivo

falta la plantilla pero es una manera explicativa de decir donde esta el error ejempl

# 🐞 Bug Report — Error al iniciar sesión

## 🆔 ID
BUG-023

## 📌 Título
Error 500 al intentar iniciar sesión con credenciales válidas

---

## 🧾 Descripción
Al intentar iniciar sesión con un usuario registrado y credenciales correctas, el sistema devuelve un error 500 en lugar de redirigir al dashboard.

---

## 🖥 Entorno
- **Sistema operativo:** Ubuntu 22.04 (WSL2)
- **Navegador:** Google Chrome 121
- **Backend:** PHP 8.2
- **Base de datos:** MySQL 8
- **Entorno:** Desarrollo local

---

## 🔁 Pasos para reproducir
1. Ir a `/login`
2. Ingresar correo válido registrado
3. Ingresar contraseña correcta
4. Presionar botón **"Iniciar sesión"**

---

## ❌ Resultado actual
- Aparece error:
