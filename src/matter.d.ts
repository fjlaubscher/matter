type Variant = 'info' | 'success' | 'error' | 'warning' | 'accent';

type Toast = {
  text: string;
  variant: Variant;
};
