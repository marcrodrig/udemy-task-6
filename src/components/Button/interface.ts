export interface ButtonProps {
  onClick(): void;
  type?: 'primary' | 'default';
  className?: string;
}