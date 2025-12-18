#!/bin/bash
set -e

echo "🔍 Running custom PR review..."

PR_TITLE="$1"
BRANCH="$2"
COMMIT_MSG="$3"

# Jira check
if ! echo "$PR_TITLE" | grep -E "JIRA-[0-9]+"; then
  echo "❌ PR title missing Jira ID"
  exit 1
fi

# Branch name check
if ! echo "$BRANCH" | grep -E "feature/JIRA-[0-9]+"; then
  echo "❌ Invalid branch name"
  exit 1
fi

# Commit message check
if ! echo "$COMMIT_MSG" | grep -E "^JIRA-[0-9]+:"; then
  echo "❌ Commit message must start with Jira ID"
  exit 1
fi

echo "✅ PR metadata validation passed"
