### アプリの起動方法
```
docker-compose up -d --build
pnpm i
pnpm dev
```

### prismaのコマンド一覧
| コマンド | 説明 |
| ------------------------- | ---------------------------------------- |
| npx prisma init | Prismaの初期設定を行います。 |
| npx prisma migrate dev | ローカル環境でスキーマをデータベースに反映します。 |
| npx prisma migrate deploy | 商用やステージング環境でスキーマをデータベースに反映します。 |
| npx prisma db seed | マスターデータをデータベースに流し込みます。 |
| npx prisma generate | Prismaクライアントを生成します。 |
| npx prisma studio | GUIでデータを閲覧するためのPrisma Studioを起動します。 |
| npx prisma format | スキーマにフォーマットを適用します。 |
| npx prisma validate | スキーマのエラーを確認します。 |
| npx prisma introspect | 既存のデータベースからスキーマを生成します。 |
| npx prisma db pull | データベースの変更をスキーマに反映します。 |
| npx prisma db push | スキーマの変更をデータベースに反映します（マイグレーションを生成せず）。 |
| npx prisma version | Prismaのバージョン情報を表示します。 |

### shadcn ui 使い方
> コンポーネントの追加方法
```
npx shadcn-ui@latest add
or
npx shadcn-ui@latest add [component name]
```
> 公式URL
<a href="https://ui.shadcn.com/">https://ui.shadcn.com/</a>