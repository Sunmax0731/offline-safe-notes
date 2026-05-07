export const productProfile = {
  "repository": "offline-safe-notes",
  "title": "オフライン安全メモ",
  "domain": "AndroidApp",
  "hostApp": null,
  "rank": 82,
  "tier": "P2",
  "ideaNo": 11,
  "overview": "防災、暗号メモ、ローカル保管の重要情報を管理する。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "通信前提のメモでは緊急時や秘密情報の扱いが不安。",
  "differentiation": "端末内保存、最小同期、必要時にすぐ読める構成にする。",
  "publish": "Google Play",
  "surface": "Android offline-first product core + mobile preview",
  "entity": "offline safe note",
  "requiredFields": [
    "id",
    "title",
    "category",
    "secretLevel",
    "body",
    "accessPlan"
  ],
  "warningField": "backupHint",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/listing-delivery-asset-checklist",
    "Sunmax0731/codex-remote-android",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber"
  ]
};
