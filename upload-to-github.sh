#!/bin/bash
# Upload Storage Array Website to GitHub
# Usage: ./upload-to-github.sh

set -e

REPO_NAME="storage-array-history"
GITHUB_USER="jp-moregain"

echo "🚀 Storage Array Website - GitHub Uploader"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Navigate to website directory
cd "$(dirname "$0")"

echo "📁 Preparing files..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
git add .

# Commit
git commit -m "Initial commit: Enterprise Storage Array History Archive

- 50+ spec sheets from 6 major vendors
- Searchable and filterable interface
- DellEMC, IBM, Hitachi, NetApp, HPE, Pure Storage
- Years covered: 2000-2025" || echo "⚠️  Nothing to commit (files already committed)"

# Check if remote exists
if ! git remote | grep -q "origin"; then
    echo ""
    echo "🔗 Adding GitHub remote..."
    git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
fi

echo ""
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main || {
    echo ""
    echo "❌ Push failed! You may need to:"
    echo "   1. Create the repo first at: https://github.com/new"
    echo "   2. Make sure the repo name is: ${REPO_NAME}"
    echo "   3. Run this script again"
    exit 1
}

echo ""
echo "✅ SUCCESS! Files uploaded to GitHub."
echo ""
echo "🌐 Next steps:"
echo "   1. Go to: https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
echo "   2. Under 'Source', select 'Deploy from a branch'"
echo "   3. Select 'main' branch and '/ (root)' folder"
echo "   4. Click 'Save'"
echo ""
echo "⏳ Wait 2-3 minutes, then visit:"
echo "   https://${GITHUB_USER}.github.io/${REPO_NAME}"
echo ""
