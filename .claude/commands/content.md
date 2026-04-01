# コンテンツ制作

5段階パイプラインでコンテンツを制作する。

---

## 事前準備

**まず以下のドキュメントを読み込むこと：**

1. `docs/guide-flow/AGENT-CONFIG.md`（プロジェクト固有設定 — 最重要）
2. 該当トラックの設定を AGENT-CONFIG.md から確認

## 5段階パイプライン

| 工程 | ガイド | ユーザー承認 |
|------|--------|-------------|
| 1. リサーチ | `docs/guide-flow/AGENT-GUIDE-1-research.md` | 不要 |
| 2. 構成設計 | `docs/guide-flow/AGENT-GUIDE-2-content-design.md` | **必要** |
| 3. 執筆 | `docs/guide-flow/AGENT-GUIDE-3-writing.md` | **必要** |
| 4. 実装 | `docs/guide-flow/AGENT-GUIDE-4-implementation.md` | 不要 |
| 5. QA | `docs/guide-flow/AGENT-GUIDE-5-qa.md` | 不要 |

## 実行フロー

1. ユーザーからテーマとトラック（SEO/LLMO/User）を受け取る
2. AGENT-CONFIG.md のターゲット定義・品質基準・構成パターンを確認
3. ガイド1: リサーチ実行 → 事実収集・裏どり
4. ガイド2: 構成案作成 → **ユーザーに提示して承認を得る**
5. ガイド3: 執筆 → **ユーザーに提示して承認を得る**
6. ガイド4: Next.js ページとして実装（page.tsx + Content.tsx）
7. ガイド5: QA チェック実行 → 不合格項目があれば修正

## コンテンツ公開後に更新するファイル

| ファイル | 操作 |
|---------|------|
| `src/app/sitemap.ts` | エントリー追加 |
| `public/ai.txt` | ページ情報追加 |
| `public/llms.txt` | ページ情報追加（該当する場合） |

## 品質基準（AGENT-CONFIG.md より）

以下に全てYesと言えなければ出さない：
1. 読んだターゲットが「次に何をすればいいか」具体的にわかるか？
2. Singの哲学「採用で終わらない、一気通貫の人づくり」が自然に体現されているか？
3. データと出典に基づいた信頼できる内容か？
4. 「この発信元は本当に中小企業の現場を知っている」と感じられるか？
5. 人を「モノ」として扱う表現が一切ないか？
