#!/bin/bash
cd /home/kavia/workspace/code-generation/recipevault-31854-72e82cae/recipe_backend_workspace/recipe_backend
source venv/bin/activate
flake8 .
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

