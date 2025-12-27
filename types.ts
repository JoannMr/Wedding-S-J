export interface NavItem {
  label: string;
  href: string;
}

export enum RelationshipType {
  FRIEND = 'Amigo/a',
  FAMILY = 'Familia',
  COLLEAGUE = 'Colega',
  OTHER = 'Otro'
}

export enum ToneType {
  SENTIMENTAL = 'Sentimental',
  FUNNY = 'Divertido',
  SHORT = 'Breve y Dulce',
  POETIC = 'Poético'
}

export interface GuestbookEntry {
  name: string;
  message: string;
  id: string;
  date: string;
}