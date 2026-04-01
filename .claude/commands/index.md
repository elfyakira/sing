# インデックス登録

作成したコンテンツをGoogleに届ける。

---

## 手順

### 1. サイトマップ確認
`src/app/sitemap.ts` に新規ページが追加されているか確認。

### 2. ai.txt / llms.txt 確認
新規コンテンツが `public/ai.txt` と `public/llms.txt` に反映されているか確認。

### 3. デプロイ
```bash
npx vercel --prod --yes
```

### 4. サイトマップ送信（Google Search Console）
デプロイ後、Google Search Console でサイトマップを送信。
URL: https://singgroup.biz/sitemap.xml

### 5. URL検査（Google Search Console）
新規ページの URL を Google Search Console の URL 検査ツールで個別にインデックス登録リクエスト。

## 注意
- Google Indexing API を導入済みの場合は `tools/indexing/` のスクリプトを使用
- 1日のインデックス登録リクエストは20件まで（API制限）
- サイトマップ送信はデプロイ後に実行すること
