export interface Project {
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  ratio?: 'landscape' | 'portrait';
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'House on the Edge',
    category: 'Private residence',
    location: 'Finland',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
  },
  {
    number: '02',
    title: 'Courtyard 03',
    category: 'Urban residence',
    location: 'Stockholm',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    ratio: 'portrait',
  },
  {
    number: '03',
    title: 'Still House',
    category: 'Private residence',
    location: 'Copenhagen',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85',
    ratio: 'portrait',
  },
  {
    number: '04',
    title: 'North Office',
    category: 'Workplace',
    location: 'Helsinki',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85',
  },
];
