declare namespace matter {
  type Variant = 'info' | 'success' | 'error' | 'warning' | 'accent';

  type Toast = {
    text: string;
    variant: Variant;
  };

  type Option = {
    value: string | number;
    description: string;
  };
}
