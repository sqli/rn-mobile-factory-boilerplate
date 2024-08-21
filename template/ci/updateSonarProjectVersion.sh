#!/usr/bin/env bash
echo "Updating the SonarQube properties..."

# Get the version from package.json
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[:space:]')
echo "Extracted version: ${PACKAGE_VERSION}"

# Get the Sonar properties file
SONAR_FILE=$(find sonar-project.properties -type f)
echo "Sonar file found: ${SONAR_FILE}"

# Update the version
REPLACE='^sonar.projectVersion=.*$'
WITH="sonar.projectVersion=${PACKAGE_VERSION}"
sed -i.bak "s#${REPLACE}#${WITH}#g" "${SONAR_FILE}"

echo "Done!"
