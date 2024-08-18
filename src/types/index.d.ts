export { };

declare global {
  namespace App {
  }

  namespace Helpers {
    type Keyof<T extends Record<any, any>> = keyof T;
  }
}
