import React from 'react';

export type Language = 'en' | 'bm' | 'cn';

export interface Product {
  id: string;
  name: string;
  category: 'CORN SERIES' | 'ROOTS & TUBERS' | 'FRUITS' | 'VEGETABLES';
  description: string;
  packaging?: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}