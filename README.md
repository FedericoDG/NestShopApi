<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# AnyShop API

## Pre-requisitos

- Docker Desktop

## Correr el proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/FedericoDG/NestShopApi.git
```

2. Instalar las dependencias del proyecto

```bash
npm install
```

3. Renombrar el archivo **.env.example** a **.env** y editar los valores de las variables de entorno

4. Levantantar la base de datos

```bash
docker-compose up -d
```

5. Ejecutar el seed, para cargar los datos de ejemplo, haciendo una petición get al siguiente endpoint

```GET
http://localhost:3000/api/seed
```

6. Correr la aplicación en modo de desarrollo

```bash
npm run start:dev
```
