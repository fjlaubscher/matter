export const slugify = (input: string) => input.toLowerCase().replace(/ /g, '-');

export const capitalize = (input: string) => input[0].toUpperCase() + input.slice(1);

export const snakeCaseToCamelCase = (input: string) =>
  input.replace(/_([a-z])/g, (_, char) => char.toUpperCase());

export const convertSnakeCaseObjectToCamelCase = (obj: { [key: string]: unknown }) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const newObj: { [key: string]: unknown } = {};
  Object.keys(obj).forEach((key) => {
    const newKey = snakeCaseToCamelCase(key);
    // call recursively for nested objects
    newObj[newKey] = convertSnakeCaseObjectToCamelCase(obj[key] as { [key: string]: unknown });
  });

  return newObj;
};
