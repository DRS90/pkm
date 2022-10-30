export function getProperties<T extends { name: string }>({
  object,
  properties
}: {
  object: T;
  properties: (keyof T)[];
}) {
  return properties.reduce((usedProps, key) => {
    usedProps[key] = object[key];
    return usedProps;
  }, {} as Record<keyof T, unknown>);
}
