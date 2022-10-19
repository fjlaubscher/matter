export const INFO_MESSAGE = '💡 Did you know?';
export const WARNING_MESSAGE = '🎲 Hmmm...';
export const SUCCESS_MESSAGE = '🚀 Success!';
export const ERROR_MESSAGE = '🔥 Something went wrong!';

export const getMessageFromVariant = (variant: Variant) => {
  switch (variant) {
    case 'info':
      return INFO_MESSAGE;
    case 'error':
      return ERROR_MESSAGE;
    case 'success':
      return SUCCESS_MESSAGE;
    case 'warning':
      return WARNING_MESSAGE;
  }
};
