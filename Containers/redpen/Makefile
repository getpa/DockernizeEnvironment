.DEFAULT_GOAL := help

# https://gist.github.com/tadashi-aikawa/da73d277a3c1ec6767ed48d1335900f3
.PHONY: $(shell grep -E '^[a-zA-Z_-]+:' $(MAKEFILE_LIST) | sed 's/://')


# Constant definitions
REPO_NAME := tmknom/redpen
DOCKER_REPO := index.docker.io/${REPO_NAME}
IMAGE_TAG := latest
IMAGE_NAME := $(shell echo ${DOCKER_REPO} | cut -d / -f 2,3):${IMAGE_TAG}

LINTER_IMAGES := hadolint/hadolint koalaman/shellcheck tmknom/markdownlint tmknom/yamllint
FORMATTER_IMAGES := tmknom/shfmt tmknom/prettier
DOCKER_IMAGES := ${LINTER_IMAGES} ${FORMATTER_IMAGES}

# Macro definitions
define list_shellscript
	grep '^#!' -rn . | grep ':1:#!' | cut -d: -f1 | grep -v .git
endef

define check_requirement
	if ! type ${1} >/dev/null 2>&1; then \
		printf "\nNot found %s, run command\n\n" ${1}; \
		printf "    \033[36mbrew install %s\033[0m\n" ${1}; \
	fi
endef

# Phony Targets
install: check-requirements install-images ## Install requirements

install-images:
	@for image in ${DOCKER_IMAGES}; do \
		echo "docker pull $${image}" && docker pull $${image}; \
	done

check-requirements:
	@$(call check_requirement,docker)

build: ## Build docker image
	DOCKER_REPO=${DOCKER_REPO} DOCKER_TAG=${IMAGE_TAG} IMAGE_NAME=${IMAGE_NAME} hooks/build
	docker images ${REPO_NAME}

lint: lint-dockerfile lint-shellscript lint-markdown lint-yaml ## Lint code

lint-dockerfile:
	docker run --rm -i hadolint/hadolint < Dockerfile

lint-shellscript:
	$(call list_shellscript) | xargs -I {} docker run --rm -v "$(CURDIR):/mnt" koalaman/shellcheck {}

lint-markdown:
	docker run --rm -i -v "$(CURDIR):/work" tmknom/markdownlint

lint-yaml:
	docker run --rm -v "$(CURDIR):/work" tmknom/yamllint --strict .

format: format-shellscript format-markdown format-json format-yaml ## Format code

format-shellscript:
	$(call list_shellscript) | xargs -I {} docker run --rm -v "$(CURDIR):/work" -w /work tmknom/shfmt -i 2 -ci -kp -w {}

format-markdown:
	docker run --rm -v "$(CURDIR):/work" tmknom/prettier --parser=markdown --write '**/*.md'

format-json:
	docker run --rm -v "$(CURDIR):/work" tmknom/prettier --parser=json --write '**/*.json'

format-yaml:
	docker run --rm -v "$(CURDIR):/work" tmknom/prettier --parser=yaml --write '**/*.y*ml'


# https://postd.cc/auto-documented-makefile/
help: ## Show help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
