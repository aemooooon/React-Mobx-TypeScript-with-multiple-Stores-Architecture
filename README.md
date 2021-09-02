# React + Mobx + TypeScript with multiple Stores Architecture

## File structure

- `components` basic component for UI display
- `index.tsx` app main entry point comes with `<StoreProvider>` wrapper
- `stores/api/...` each of the class/object do its CRUD action
- `stores/hook/` define and return sigle class/object's store
- `stores/index.tsx` define `StoreContext` and instantiate `stores = new RootStore()` and put it to Context Provider
- `stores/root/index.ts` define `RootStore` which holds the other class/object store as properties as well as instantiate in its constructor
- `stores/product~user` define other class/object store which holds its properties and functions

```bash
src
├── App.css
├── App.tsx
├── components
│   ├── ProductList.tsx
│   └── UserList.tsx
├── index.tsx
├── react-app-env.d.ts
└── stores
    ├── api
    │   ├── productApi.ts
    │   └── userApi.ts
    ├── hook
    │   └── index.ts
    ├── index.tsx
    ├── product
    │   └── index.ts
    ├── root
    │   └── index.ts
    └── user
        └── index.ts
```