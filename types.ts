
export interface MenuItem {
  id: string;
  name: string;
  category: 'Coffee' | 'Cold' | 'Snacks' | 'Pastries';
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}

export interface SectionProps {
  id: string;
}
