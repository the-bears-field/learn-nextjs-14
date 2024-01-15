# Next.js 14の学習記録

公式の学習コンテンツでの学習を記録するためのリポジトリです。

## 使用教材

- [Learn Next.js](https://nextjs.org/learn/)

## 使用技術

- Node.js v20.11.0
- react@18.2.0
- typescript@5.2.2
- next@14.0.4

## 必要要件

- Docker
- Docker Compose

## インストール

必要要件に記載している環境を整えた上で、ターミナルで下記コマンドを順番に実行して下さい。

```
git clone https://github.com/the-bears-field/learn-nextjs-14.git
```

```
cd learn-nextjs-14
```

```
docker compose build --no-cache
```

```
docker compose run --rm app yarn install
```

```
docker compose up -d
```

以上の過程を経てブラウザで[http://localhost:3000](http://localhost:3000)を開くと、閲覧可能となります。
