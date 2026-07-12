#!/bin/bash
# Script de déploiement Laperla - GitHub + Vercel
# Usage: bash deploy.sh

echo "=============================="
echo "  DÉPLOIEMENT LAPERLA E-COMMERCE"
echo "=============================="

# 1. Configuration GitHub
echo ""
echo "Étape 1/4 : Connexion à GitHub"
echo "Allez sur https://github.com/settings/tokens"
echo "Créez un token (classic) avec scope 'repo'"
echo "Puis collez-le ci-dessous :"
read -s -p "Token GitHub : " GITHUB_TOKEN
echo ""

read -p "Nom d'utilisateur GitHub : " GITHUB_USER
read -p "Nom du repository (ex: laperla-ecommerce) : " REPO_NAME

# 2. Créer le repo GitHub via API
echo ""
echo "Création du repository $REPO_NAME sur GitHub..."
curl -s -X POST "https://api.github.com/user/repos" \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"$REPO_NAME\",\"private\":false,\"description\":\"Laperla Olive Oil - E-commerce Next.js avec Stripe & PayPal\"}"

# 3. Push vers GitHub
echo ""
echo "Push vers GitHub..."
git remote add origin "https://$GITHUB_USER:$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git"
git branch -M main
git push -u origin main

echo ""
echo "✓ Repository créé : https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""

# 4. Déploiement Vercel
echo "Étape 4/4 : Déploiement Vercel"
echo "Lien: https://vercel.com/import/git"
echo ""
echo "1. Allez sur https://vercel.com/new"
echo "2. Importez le repo GitHub: $GITHUB_USER/$REPO_NAME"
echo "3. Framework: Next.js (détecté automatiquement)"
echo "4. Variables d'environnement à ajouter :"
echo "   - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=votre_clé_publishable"
echo "   - STRIPE_SECRET_KEY=votre_clé_secret"
echo "   - STRIPE_WEBHOOK_SECRET=votre_webhook_secret"
echo "   - NEXT_PUBLIC_PAYPAL_CLIENT_ID=votre_client_id_paypal"
echo "   - PAYPAL_CLIENT_SECRET=votre_client_secret_paypal"
echo ""
echo "Pour obtenir vos clés :"
echo "  Stripe : https://dashboard.stripe.com/apikeys"
echo "  PayPal : https://developer.paypal.com/dashboard/applications"
echo ""
echo "Une fois déployé, configurez le webhook Stripe :"
echo "  stripe listen --forward-to https://votre-site.vercel.app/api/stripe/webhook"
echo ""
echo "=============================="
echo "  DÉPLOIEMENT TERMINÉ"
echo "=============================="
