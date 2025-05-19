# Caova

Este es un proyecto basado en [Next.js](https://nextjs.org), configurado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)

---

## Configuración inicial

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/caova.git
   cd caova
   ```

2. **Crea un archivo `.env`**:
   Copia el archivo `.env.example` y renómbralo como `.env`. Asegúrate de que contenga la siguiente configuración para la base de datos local:

   ```properties
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/caova"
   ```

3. **Inicia los servicios de Docker**:
   Ejecuta el siguiente comando para iniciar una instancia de PostgreSQL:

   ```bash
   docker-compose up -d
   ```

4. **Instala las dependencias**:
   Usa tu gestor de paquetes favorito para instalar las dependencias del proyecto:

   ```bash
   npm install
   # o
   yarn install
   ```

5. **Aplica las migraciones de Prisma**:
   Ejecuta el siguiente comando para configurar la base de datos:

   ```bash
   npx prisma migrate dev
   ```

6. **Importa los datos de prueba**:
   Si deseas cargar datos de prueba en la base de datos, ejecuta el siguiente script:
   ```bash
   ./scripts/import_test_data.sh
   ```

---

## Ejecutar el servidor de desarrollo

Inicia el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento.

---

## Comandos útiles

### Detener los servicios de Docker

```bash
docker-compose down
```

### Ver los logs de PostgreSQL

```bash
docker logs caova-postgres
```

### Acceder a la base de datos desde la terminal

```bash
docker exec -it caova-postgres psql -U postgres -d caova
```

---

## Despliegue

El despliegue más sencillo para este proyecto es usar la [Plataforma Vercel](https://vercel.com/). Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

---

## Recursos adicionales

- [Documentación de Next.js](https://nextjs.org/docs) - Aprende sobre las características y API de Next.js.
- [Prisma](https://www.prisma.io/docs) - Aprende sobre el ORM utilizado en este proyecto.
- [Docker](https://docs.docker.com/) - Aprende a usar Docker para gestionar contenedores.

---
