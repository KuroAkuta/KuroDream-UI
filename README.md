# Vue 3 + TypeScript + Vite

## I'm making a ui component! It must take a long time.

# 安装
## Node：
``` npm install kurodream-ui```


## main.ts

```ty
import KuroDream from 'kurodream-ui'
import '../node_modules/kurodream-ui/dist/style.css'
app.use(KuroDream);
```

## vite-env.d.ts

```ty
declare module "kurodream-ui"
```