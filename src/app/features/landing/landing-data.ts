/**
 * Contenido editable de la landing page.
 * Centralizamos los textos y datos en un único archivo para que
 * sean fáciles de mantener y reemplazar por los definitivos.
 */

export interface Seccion {
  id: string;
  etiqueta: string;
}

export interface Stat {
  valor: string;
  etiqueta: string;
}

export interface Clase {
  nombre: string;
  descripcion: string;
  nivel: string;
}

export interface Plan {
  nombre: string;
  precio: string;
  periodo: string;
  descripcion: string;
  caracteristicas: string[];
  destacado: boolean;
}

export interface FranjaHoraria {
  actividad: string;
  dias: string;
  hora: string;
}

export interface HorarioGeneral {
  dias: string;
  horario: string;
}

export interface RedSocial {
  nombre: string;
  url: string;
}

export const MARCA = {
  nombre: 'POWER GYM',
  lema: 'Más que un gimnasio: una comunidad que te acompaña en cada entrenamiento.',
};

export const SECCIONES: Seccion[] = [
  { id: 'inicio', etiqueta: 'Inicio' },
  { id: 'clases', etiqueta: 'Clases' },
  { id: 'planes', etiqueta: 'Planes' },
  { id: 'horarios', etiqueta: 'Horarios' },
  { id: 'contacto', etiqueta: 'Contacto' },
];

export const STATS: Stat[] = [
  { valor: '+1200', etiqueta: 'Socios activos' },
  { valor: '15', etiqueta: 'Entrenadores certificados' },
  { valor: '10', etiqueta: 'Años de experiencia' },
  { valor: '6', etiqueta: 'Disciplinas' },
];

export const CLASES: Clase[] = [
  {
    nombre: 'Musculación',
    descripcion:
      'Sala completa de máquinas y pesos libres para entrenar cada grupo muscular con acompañamiento profesional.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'CrossFit',
    descripcion:
      'WODs de alta intensidad que combinan fuerza, resistencia y agilidad. Exigente, adictivo y en equipo.',
    nivel: 'Intermedio / Avanzado',
  },
  {
    nombre: 'Spinning',
    descripcion:
      'Ciclos al ritmo de la música sobre bicicletas profesionales. Quemá calorías mientras te divertís.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Yoga',
    descripcion:
      'Mejorá tu flexibilidad, postura y respiración con sesiones guiadas para relajar cuerpo y mente.',
    nivel: 'Principiante / Intermedio',
  },
  {
    nombre: 'Boxeo',
    descripcion:
      'Técnica, sacos y circuitos de contacto para entrenar como un profesional y liberar tensiones.',
    nivel: 'Todos los niveles',
  },
  {
    nombre: 'Funcional',
    descripcion:
      'Circuitos con peso corporal, kettlebells y battle ropes para mejorar tu condición física general.',
    nivel: 'Todos los niveles',
  },
];

export const PLANES: Plan[] = [
  {
    nombre: 'Mensual',
    precio: '$35',
    periodo: 'por mes',
    descripcion: 'Ideal para arrancar y conocer el gimnasio sin compromiso.',
    caracteristicas: [
      'Acceso completo al gimnasio',
      '2 clases grupales por semana',
      'Evaluación física inicial',
    ],
    destacado: false,
  },
  {
    nombre: 'Trimestral',
    precio: '$90',
    periodo: 'por trimestre',
    descripcion: 'El plan más elegido: compromiso real con tu progreso.',
    caracteristicas: [
      'Acceso completo al gimnasio',
      'Clases grupales ilimitadas',
      'Plan de entrenamiento personalizado',
      'Reevaluación física mensual',
    ],
    destacado: true,
  },
  {
    nombre: 'Anual',
    precio: '$300',
    periodo: 'por año',
    descripcion: 'El mejor precio para quienes hacen del gym su estilo de vida.',
    caracteristicas: [
      'Acceso completo al gimnasio',
      'Clases grupales ilimitadas',
      'Plan de entrenamiento personalizado',
      'Locker exclusivo',
      '1 mes de regalo',
    ],
    destacado: false,
  },
];

export const HORARIOS_GENERALES: HorarioGeneral[] = [
  { dias: 'Lunes a viernes', horario: '06:00 – 22:00' },
  { dias: 'Sábados', horario: '08:00 – 14:00' },
  { dias: 'Domingos y feriados', horario: 'Cerrado' },
];

export const HORARIOS_CLASES: FranjaHoraria[] = [
  { actividad: 'CrossFit', dias: 'Lun / Mié / Vie', hora: '07:00 · 18:00 · 19:30' },
  { actividad: 'Spinning', dias: 'Mar / Jue', hora: '08:00 · 19:00' },
  { actividad: 'Yoga', dias: 'Lun / Jue', hora: '09:00' },
  { actividad: 'Funcional', dias: 'Lun a Vie', hora: '12:00 · 17:00' },
  { actividad: 'Boxeo', dias: 'Mar / Jue', hora: '20:00' },
  { actividad: 'Musculación', dias: 'Lun a Sáb', hora: 'Libre, todo el día' },
];

export const CONTACTO = {
  direccion: 'Av. del Deporte 1234, Ciudad',
  telefono: '(011) 4567-8900',
  email: 'info@powergym.com',
};

export const REDES: RedSocial[] = [
  { nombre: 'Instagram', url: 'https://instagram.com' },
  { nombre: 'Facebook', url: 'https://facebook.com' },
  { nombre: 'WhatsApp', url: 'https://wa.me/5491100000000' },
];
