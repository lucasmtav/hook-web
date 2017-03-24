curl \
  --header "Content-Type: application/json" \
  --data '{"build_parameters": {"HOOK_NAME": "new-hook-web","HOOK_BUILD_NUM": "'$CIRCLE_BUILD_NUM'"}}' \
  --request POST \
  https://circleci.com/api/v1/project/redspark-io/sesc-publicacao-qa/tree/master?circle-token=$CIRCLE_TOKEN_SESC_QA