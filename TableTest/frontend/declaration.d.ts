declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const value: string;
  export default value;
}