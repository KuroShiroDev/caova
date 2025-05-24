#!/bin/bash

echo "Importando datos de prueba en la base de datos..."

# Variables
DB_USER="postgres"
DB_NAME="caova"
DB_HOST="localhost"
DB_PORT="5432"
SQL_FILE="prisma/seed/caova_test_data.sql"

# Importar datos
# Verificar si el archivo SQL existe
if [ ! -f "$SQL_FILE" ]; then
  echo "Error: No se encontró el archivo $SQL_FILE en el directorio actual."
  exit 1
fi

# Importar los datos usando psql
docker exec -i caova-postgres psql -U $DB_USER -d $DB_NAME -h $DB_HOST -p $DB_PORT < $SQL_FILE

if [ $? -eq 0 ]; then
  echo "Datos de prueba importados correctamente."
else
  echo "Error al importar los datos de prueba."
fi