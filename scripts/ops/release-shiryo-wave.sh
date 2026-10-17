#!/bin/bash
# 資料レイアウトの図鑑の段階公開。publishedAt が来た項目を載せるため、ビルドし直して本番へ出す。
# launchd（com.moty.motytools.shiryo-wave）が 10/24・10/31・11/07 の朝6時に実行する。
set -euo pipefail
export PATH=/opt/homebrew/bin:/usr/bin:/bin
cd /Users/moty/deskclaude/projects/motytools-web
LOG=/Users/moty/deskclaude/projects/motytools-web/.shots/shiryo-wave.log
mkdir -p "$(dirname "$LOG")"
{
  echo "=== $(date) ==="
  git stash list >/dev/null
  if [ -n "$(git status --porcelain -- src)" ]; then echo "src に未コミットの変更があるので中止"; exit 1; fi
  npm run build
  n=$(ls -d dist/shiryo/*/ | wc -l | tr -d ' ')
  echo "公開する資料図鑑: $n 本"
  caffeinate -i npx vercel deploy --prod --yes
  sleep 20
  curl -s -o /dev/null -w "shiryo index %{http_code}\n" https://motytools.com/shiryo/
} >> "$LOG" 2>&1
