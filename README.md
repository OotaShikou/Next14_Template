### アプリの起動方法

```
docker-compose up -d --build
pnpm i
pnpm dev
```

### prisma のコマンド一覧

| コマンド                  | 説明                                                                     |
| ------------------------- | ------------------------------------------------------------------------ |
| npx prisma init           | Prisma の初期設定を行います。                                            |
| npx prisma migrate dev    | ローカル環境でスキーマをデータベースに反映します。                       |
| npx prisma migrate deploy | 商用やステージング環境でスキーマをデータベースに反映します。             |
| npx prisma db seed        | マスターデータをデータベースに流し込みます。                             |
| npx prisma generate       | Prisma クライアントを生成します。                                        |
| npx prisma studio         | GUI でデータを閲覧するための Prisma Studio を起動します。                |
| npx prisma format         | スキーマにフォーマットを適用します。                                     |
| npx prisma validate       | スキーマのエラーを確認します。                                           |
| npx prisma introspect     | 既存のデータベースからスキーマを生成します。                             |
| npx prisma db pull        | データベースの変更をスキーマに反映します。                               |
| npx prisma db push        | スキーマの変更をデータベースに反映します（マイグレーションを生成せず）。 |
| npx prisma version        | Prisma のバージョン情報を表示します。                                    |

### shadcn ui 使い方

> コンポーネントの追加方法

```
npx shadcn-ui@latest add
or
npx shadcn-ui@latest add [component name]
```

> 公式 URL
> <a href="https://ui.shadcn.com/">https://ui.shadcn.com/</a>

### NextAuth

> <b>Github Setting</b><br /><a href="https://next-auth.js.org/providers/github">https://next-auth.js.org/providers/github</a><br /><br />
>
> <b>Google Setting</b><a href="https://next-auth.js.org/providers/google">https://next-auth.js.org/providers/google</a><br /><br />
