export const getPropertyTypeDisplay = (type: string) => {
    switch (type) {
      case 'viviendaDeInteresSocial':
        return 'Vivienda de Interés Social';
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };
  
  // Helper function to get status badge variant
  export const getStatusVariant = (status: string) => {
    switch (status) {
      case 'activo':
        return 'default';
      case 'inactivo':
        return 'destructive';
      default:
        return 'secondary';
    }
  };